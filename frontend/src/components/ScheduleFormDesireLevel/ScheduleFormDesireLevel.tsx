import { Rating } from "@mui/material";
import { Schedule } from "../../types";

type Props = {
  schedule: Schedule;
  setNewSchedule: (schedule: Schedule) => void;
};
export const ScheduleFormDesireLevel = ({
  schedule,
  setNewSchedule,
}: Props) => {
  return (
    <>
      <label>希望度</label>
      <Rating
        name="simple-controlled"
        value={schedule.desiredLevel}
        data-testid="form-rating"
        onChange={(_, newValue) => {
          const newSchedule = {
            ...schedule,
            desiredLevel: newValue ? newValue : 0,
          };
          setNewSchedule(newSchedule);
        }}
      />
    </>
  );
};
