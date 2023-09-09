import { Box, TextField } from "@mui/material";
import { useState } from "react";
import { ScheduleCondition } from "../../pages/scheduleList";

type Props = {
  scheduleCondition: ScheduleCondition;
  setScheduleCondition: (scheduleCondition: ScheduleCondition) => void;
};

export const ScheduleSearchTitle = ({
  scheduleCondition,
  setScheduleCondition,
}: Props) => {
  const [title, setTitle] = useState<string>("");
  return (
    <Box display={"flex"} sx={{ marginRight: "20px" }}>
      <p>タイトル：</p>
      <TextField
        placeholder="タイトル"
        data-testid=""
        variant="outlined"
        margin="dense"
        size="small"
        value={title}
        // disabled={schedule.jobChangeSite.id !== -1}
        // sx={{ paddingTop: "3px" }}
        onChange={(e) => {
          setScheduleCondition({ ...scheduleCondition, title: e.target.value });
        }}
      />
    </Box>
  );
};
