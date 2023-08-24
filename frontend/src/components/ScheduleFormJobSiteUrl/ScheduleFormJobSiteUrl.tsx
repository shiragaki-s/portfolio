import { TextField } from "@mui/material";
import { Schedule } from "../../types";

type Props = {
  schedule: Schedule;
  setNewSchedule: (schedule: Schedule) => void;
};
export const ScheduleFormJobSiteUrl = ({
  schedule,

  setNewSchedule,
}: Props) => {
  return (
    <TextField
      label="転職サイト URL"
      placeholder="転職サイト URL"
      data-testid="form-site-url"
      variant="filled"
      margin="dense"
      size="small"
      // defaultValue={schedule.jobChangeSite.url}
      value={schedule.jobChangeSite.url}
      disabled={schedule.jobChangeSite.id !== -1}
      onChange={(e) => {
        const newJobChangeSite = {
          ...schedule.jobChangeSite,
          url: e.target.value,
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
