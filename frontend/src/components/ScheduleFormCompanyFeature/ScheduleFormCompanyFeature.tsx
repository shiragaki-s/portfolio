import { TextField } from "@mui/material";
import { Schedule } from "../../types";

type Props = {
  schedule: Schedule;
  setNewSchedule: (schedule: Schedule) => void;
};
export const ScheduleFormCompanyFeature = ({
  schedule,
  setNewSchedule,
}: Props) => {
  return (
    <TextField
      label="求人内容の気になる点"
      multiline
      minRows={3}
      placeholder="求人内容の気になる点"
      data-testid="form-interest-features"
      variant="filled"
      margin="dense"
      size="small"
      value={schedule.company.interestFeatures}
      disabled={schedule.company.id !== -1}
      onChange={(e) => {
        const newCompany = {
          ...schedule.company,
          interestFeatures: e.target.value,
        };
        const newSchedule = {
          ...schedule,
          company: newCompany,
        };
        setNewSchedule(newSchedule);
      }}
    />
  );
};
