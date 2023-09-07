import { Box } from "@mui/material";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import { ScheduleCondition } from "../../pages/scheduleList";
import { useScheduleList } from "../../hooks/useScheduleList";
import { Schedule } from "../../types";

type Props = {
  scheduleCondition: ScheduleCondition;
  setScheduleCondition: (scheduleCondition: ScheduleCondition) => void;
};

export const ScheduleSearchDate = ({
  scheduleCondition,
  setScheduleCondition,
}: Props) => {
  return (
    <Box display={"flex"} sx={{ marginRight: "20px", height: "5px" }}>
      <p>予定日：</p>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateTimePicker
          data-testid="form-time"
          value={scheduleCondition.startDate}
          sx={{ width: "300px" }}
          slotProps={{ textField: { placeholder: "YYYY年MM月DD日 HH時mm分" } }}
          onChange={(date) => {
            if (date == null) return;
            setScheduleCondition({ ...scheduleCondition, startDate: date });
          }}
        />
      </LocalizationProvider>
      <p>〜</p>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateTimePicker
          data-testid="form-time"
          value={scheduleCondition.endDate}
          sx={{ width: "300px" }}
          slotProps={{ textField: { placeholder: "YYYY年MM月DD日 HH時mm分" } }}
          onChange={(date) => {
            if (date == null) return;
            scheduleCondition.endDate = date;
            setScheduleCondition({ ...scheduleCondition, endDate: date });
          }}
        />
      </LocalizationProvider>
    </Box>
  );
};
