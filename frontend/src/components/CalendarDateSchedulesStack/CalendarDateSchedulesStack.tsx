import { Schedule } from "../../types";
import { Box, Stack } from "@mui/material";
import { CalendarDateCellScheduleUnit } from "../CalendarDateCellScheduleUnit/CalendarDateCellScheduleUnit";

type Props = {
  schedules: Schedule[];
};
export const CalendarDateSchedulesStack = ({ schedules }: Props) => {
  return (
    <Stack>
      {schedules.map((schedule) => (
        <Box key={schedule.id} sx={{ whiteSpace: "nowrap", float: "left" }}>
          <CalendarDateCellScheduleUnit schedule={schedule} />
        </Box>
      ))}
    </Stack>
  );
};
