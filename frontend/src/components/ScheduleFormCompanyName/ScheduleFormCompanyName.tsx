import { TextField } from "@mui/material";
import { Schedule } from "../../types";

type Props = {
  schedule: Schedule;
  setNewSchedule: (schedule: Schedule) => void;
};
export const ScheduleFormCompanyName = ({
  schedule,
  setNewSchedule,
}: Props) => {
  return (
    <TextField
      label="会社名"
      placeholder="会社名"
      variant="filled"
      margin="dense"
      size="small"
      data-testid="form-company-name-input"
      value={schedule.company.name}
      disabled={schedule.company.id !== -1}
      onChange={(e) => {
        const newCompany = { ...schedule.company, name: e.target.value };
        const newSchedule = { ...schedule, company: newCompany };
        setNewSchedule(newSchedule);
      }}
    />
  );
};
