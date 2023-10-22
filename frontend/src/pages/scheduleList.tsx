import { Box } from "@mui/material";
import { ScheduleListTable } from "../components/ScheduleListTable/ScheduleListTable";
import { ScheduleSearch } from "../components/ScheduleSearch/ScheduleSearch";
import { useEffect, useState } from "react";
import { Schedule } from "../types";
import { Dayjs } from "dayjs";
import { useRecoilValue } from "recoil";
import { schedulesSelctor } from "../stores/schedule";
// @を使わないと全部相対パスで書く
// import { Inter } from '../../../hoge'
// @を使うと、基点のフォルダからのパスだけでいい
// import { Inter } from '@/components/hoge'

export default function scheduleList() {
  // const { schedules } = useScheduleList(); // 検索をかけていないオリジナルの配列
  const schedules = useRecoilValue(schedulesSelctor);
  const [searchResultSchedules, setSearchResultSchedules] = useState<
    Schedule[]
  >([]);
  const [scheduleCondition, setScheduleCondition] = useState<ScheduleCondition>(
    {
      startDate: null,
      endDate: null,
      companyId: null,
      jobChangeSiteId: null,
      title: "",
      desiredLevel: 0,
    }
  );
  useEffect(() => {
    setScheduleCondition({
      startDate: null,
      endDate: null,
      companyId: null,
      jobChangeSiteId: null,
      title: "",
      desiredLevel: 0,
    });
    setSearchResultSchedules(schedules);
  }, [schedules]);
  return (
    <>
      <Box>
        <ScheduleSearch
          scheduleCondition={scheduleCondition}
          setScheduleCondition={setScheduleCondition}
          setSearchResultSchedules={setSearchResultSchedules}
        />
      </Box>
      <ScheduleListTable searchResultSchedules={searchResultSchedules} />
    </>
  );
}

export type ScheduleCondition = {
  startDate: Dayjs | null;
  endDate: Dayjs | null;
  companyId: number | null;
  jobChangeSiteId: number | null;
  title: string;
  desiredLevel: number | null;
};
