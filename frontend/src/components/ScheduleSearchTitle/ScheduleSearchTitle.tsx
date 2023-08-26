import { Box, TextField } from "@mui/material";
import { useState } from "react";

export const ScheduleSearchTitle = () => {
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
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
    </Box>
  );
};
