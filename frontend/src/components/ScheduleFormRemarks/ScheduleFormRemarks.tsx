import { TextField } from "@mui/material";
import { Schedule } from "../../types";

type Props = {
  schedule: Schedule;
  setNewSchedule: (schedule: Schedule) => void;
};
export const ScheduleFormRemarks = ({ schedule, setNewSchedule }: Props) => {
  return (
    <TextField
      label="備考欄"
      multiline
      minRows={3}
      placeholder="備考欄"
      data-testid="form-remarks"
      variant="filled"
      margin="dense"
      size="small"
      value={schedule.remarks}
      onChange={(e) => {
        const newSchedule = { ...schedule, remarks: e.target.value };
        setNewSchedule(newSchedule);
      }}
    />
  );
};
