import { TextField } from "@mui/material";
import { Schedule } from "../../types";

type Props = {
  schedule: Schedule;
  setNewSchedule: (schedule: Schedule) => void;
};
export const ScheduleFormTitle = ({ schedule, setNewSchedule }: Props) => {
  return (
    <TextField
      label="タイトル"
      placeholder="タイトル"
      variant="filled"
      margin="dense"
      size="small"
      data-testid="form-title"
      defaultValue={schedule.title}
      onChange={(e) => {
        const newSchedule = { ...schedule, title: e.target.value };
        setNewSchedule(newSchedule);
      }}
    />
  );
};
