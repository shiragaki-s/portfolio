import { Box, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import { ScheduleCondition } from "../../pages/scheduleList";
import { useRecoilValue } from "recoil";
import { jobChangeSiteSelctor } from "../../stores/schedule";

type Props = {
  scheduleCondition: ScheduleCondition;
  setScheduleCondition: (scheduleCondition: ScheduleCondition) => void;
};
export const ScheduleSearchJobChangeSite = ({
  scheduleCondition,
  setScheduleCondition,
}: Props) => {
  const [jobChangeSiteId, setJobChangeSiteId] = useState<number>(-1);
  const jobChangeSiteList = useRecoilValue(jobChangeSiteSelctor);
  return (
    <Box display={"flex"} sx={{ marginRight: "20px" }}>
      <p>転職サイト名：</p>
      <Select
        name="会社名"
        labelId="companyLabel"
        id="companyId"
        value={jobChangeSiteId}
        onChange={(e) => {
          if (typeof e.target.value === "number") {
            setScheduleCondition({
              ...scheduleCondition,
              jobChangeSiteId: e.target.value,
            });
            setJobChangeSiteId(e.target.value);
          }
        }}
      >
        <MenuItem value={-1}>選択してください</MenuItem>
        {
          // 既存の会社のmap
          jobChangeSiteList.map((company) => {
            return (
              <MenuItem key={company.id} value={company.id}>
                {company.name}
              </MenuItem>
            );
          })
        }
      </Select>
    </Box>
  );
};
