import { Schedule } from "@/types";
import { Box, Stack, Typography } from "@mui/material";
import { ScheduleButton } from "../ScheduleButton/ScheduleButton";

type Props = {
  schedules: Schedule[];
};
export const DateSchedulesStack = ({ schedules }: Props) => {
  return (
    <Stack>
      {schedules.map((schedule) => (
        <Box key={schedule.id} sx={{ whiteSpace: "nowrap", float: "left" }}>
          <ScheduleButton schedule={schedule} />
        </Box>
      ))}
    </Stack>
  );
};
