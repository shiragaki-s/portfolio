import { Box, Typography } from "@mui/material";
import {
  LocalizationProvider,
  DateTimePicker,
  TimePicker,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Schedule } from "../../types";
import dayjs from "dayjs";
type Props = {
  schedule: Schedule;
  setNewSchedule: (schedule: Schedule) => void;
};
export const ScheduleFormDate = ({ schedule, setNewSchedule }: Props) => {
  const scheduleDateTime = dayjs(
    `${schedule.date.format("YYYY-MM-DD")} ${schedule.time.format("HH:mm")}`
  );

  return schedule.id === -1 ? (
    <>
      <Box>
        <label>面接日</label>
        <Typography
          variant="h4"
          sx={{ textAlign: "center", margin: "auto", width: "300px" }}
          gutterBottom
        >
          {schedule.date.format("YYYY年MM月DD日")}
        </Typography>
      </Box>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <TimePicker
          label="時間"
          data-testid="form-time"
          value={schedule.time}
          onChange={(value) => {
            if (value !== null) {
              const newSchedule = { ...schedule, time: value };
              setNewSchedule(newSchedule);
            }
          }}
        />
      </LocalizationProvider>
    </>
  ) : (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateTimePicker
        label="時間"
        data-testid="form-time"
        value={scheduleDateTime}
        onChange={(value) => {
          if (value !== null) {
            const newSchedule = { ...schedule, date: value, time: value };
            setNewSchedule(newSchedule);
          }
        }}
      />
    </LocalizationProvider>
  );
};
