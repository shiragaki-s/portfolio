import { TextField } from "@mui/material";
import { JobChangeSite, Schedule } from "../../types";

type Props = {
  schedule: Schedule;
  jobChangeSiteList: JobChangeSite[];
  setNewSchedule: (schedule: Schedule) => void;
};
export const ScheduleFormJobSiteName = ({
  schedule,
  jobChangeSiteList,
  setNewSchedule,
}: Props) => {
  return (
    <TextField
      label="転職サイト名"
      placeholder="転職サイト名"
      data-testid="form-company-site-name"
      variant="filled"
      margin="dense"
      size="small"
      value={schedule.jobChangeSite.name}
      disabled={schedule.jobChangeSite.id !== -1}
      onChange={(e) => {
        const newJobChangeSite = {
          ...schedule.jobChangeSite,
          name: e.target.value,
        };
        const newSchedule = {
          ...schedule,
          jobChangeSite: newJobChangeSite,
        };
        setNewSchedule(newSchedule);
      }}
    />
  );
};
