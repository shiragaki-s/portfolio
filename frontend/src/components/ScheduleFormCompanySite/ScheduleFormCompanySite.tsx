import { TextField } from "@mui/material";
import { Schedule } from "../../types";

type Props = {
  schedule: Schedule;
  setNewSchedule: (schedule: Schedule) => void;
};
export const ScheduleFormCompanySite = ({
  schedule,
  setNewSchedule,
}: Props) => {
  return (
    <TextField
      label="会社公式サイト"
      placeholder="会社公式サイト"
      data-testid="form-company-site-url"
      variant="filled"
      margin="dense"
      size="small"
      // defaultValue={schedule.company.url}
      value={schedule.company.url}
      disabled={schedule.company.id !== -1}
      onChange={(e) => {
        const newCompany = { ...schedule.company, url: e.target.value };
        const newSchedule = { ...schedule, company: newCompany };
        setNewSchedule(newSchedule);
      }}
    />
  );
};
