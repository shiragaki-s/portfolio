import { Box } from "@mui/material";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Dayjs } from "dayjs";

import { useState } from "react";

export const ScheduleSearchDate = () => {
  const [startDateTime, setStartDateTime] = useState<Dayjs>();
  const [endDateTime, setEndDateTime] = useState<Dayjs>();
  return (
    <Box display={"flex"} sx={{ marginRight: "20px" }}>
      <p>予定日：</p>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateTimePicker
          label="時間"
          data-testid="form-time"
          value={startDateTime}
          onChange={(value) => {
            value != null && setStartDateTime(value);
          }}
        />
      </LocalizationProvider>
      <p>〜</p>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateTimePicker
          label="時間"
          data-testid="form-time"
          value={endDateTime}
          onChange={(value) => {
            value != null && setEndDateTime(value);
          }}
        />
      </LocalizationProvider>
    </Box>
  );
};
