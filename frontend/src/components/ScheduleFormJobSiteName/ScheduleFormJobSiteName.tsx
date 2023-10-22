import { TextField } from "@mui/material";
import { JobChangeSite, Schedule } from "../../types";

type Props = {
  schedule: Schedule;
  setNewSchedule: (schedule: Schedule) => void;
};
export const ScheduleFormJobSiteName = ({
  schedule,
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
