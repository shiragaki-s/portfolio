import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { JobChangeSite, Schedule } from "../../types";
import { defaultSchedule } from "../../utils/calendarUtill";
import { useRecoilValue } from "recoil";
import { jobChangeSiteSelctor } from "../../stores/schedule";

type Props = {
  schedule: Schedule;
  setNewSchedule: (schedule: Schedule) => void;
};
export const ScheduleFormSelectJobSite = ({
  schedule,
  setNewSchedule,
}: Props) => {
  const jobChangeSiteList = useRecoilValue(jobChangeSiteSelctor);
  return (
    <FormControl fullWidth>
      <InputLabel id="jobChangeSiteLabel">転職サイト名</InputLabel>
      <Select
        labelId="jobChangeSiteLabel"
        id="jobChangeSiteId"
        label="転職サイト名"
        data-testid="form-company-site-name-select"
        value={schedule.jobChangeSite.id}
        onChange={(e) => {
          let newJobChangeSite: JobChangeSite = {
            ...schedule.jobChangeSite,
            id: Number(e.target.value),
          };
          if (newJobChangeSite.id !== -1) {
            newJobChangeSite = jobChangeSiteList.filter(
              (jobChangeSite) => jobChangeSite.id === newJobChangeSite.id
            )[0];
          } else if (newJobChangeSite.id === -1) {
            newJobChangeSite = defaultSchedule.jobChangeSite;
          }
          const newSchedule = {
            ...schedule,
            jobChangeSite: newJobChangeSite,
          };
          setNewSchedule(newSchedule);
        }}
      >
        <MenuItem key={-1} value={-1}>
          --新規の転職サイトを登録--
        </MenuItem>
        {
          // 既存の転職サイトのmap
          jobChangeSiteList.map((jobChangeSite) => {
            return (
              <MenuItem
                key={jobChangeSite.id}
                value={jobChangeSite.id}
                selected={schedule.jobChangeSite.id === jobChangeSite.id}
              >
                {jobChangeSite.name}
              </MenuItem>
            );
          })
        }
      </Select>
    </FormControl>
  );
};
