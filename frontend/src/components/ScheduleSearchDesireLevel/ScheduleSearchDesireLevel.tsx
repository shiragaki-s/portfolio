import { Box, Rating } from "@mui/material";
import { useState } from "react";

export const ScheduleSearchDesireLevel = () => {
  const [desireLevel, setDesireLevel] = useState<number>(0);
  return (
    <Box display={"flex"} sx={{ marginRight: "20px" }}>
      <p>希望度：</p>
      <Rating
        name="simple-controlled"
        value={desireLevel}
        data-testid="form-rating"
        onChange={(_, newValue) => {
          typeof newValue === "number" && setDesireLevel(newValue);
        }}
      />
    </Box>
  );
};
