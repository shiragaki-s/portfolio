import { Button } from "@mui/material";
import { ScheduleCondition } from "../../pages/scheduleList";
import { Schedule } from "../../types";
import { useScheduleSearch } from "../../hooks/useScheduleSearch";
import { useScheduleList } from "../../hooks/useScheduleList";
type Props = {
  scheduleCondition: ScheduleCondition;
  setSearchResultSchedules: React.Dispatch<React.SetStateAction<Schedule[]>>;
};
export const ScheduleSearchButton = ({
  scheduleCondition,
  setSearchResultSchedules,
}: Props) => {
  const { schedules } = useScheduleList();
  const { executeSearch } = useScheduleSearch();
  const onClickSearch = () => {
    const afterSchedule = executeSearch(scheduleCondition, schedules);
    setSearchResultSchedules(afterSchedule);
  };
  return (
    <Button
      variant="contained"
      color="primary"
      sx={{ marginRight: "20px" }}
      onClick={() => {
        onClickSearch();
      }}
    >
      検索
    </Button>
  );
};
