import { Box, Rating } from "@mui/material";
import { useState } from "react";
// import StarIcon from "@mui/icons-material/Star";

export const ScheduleSearchDesireLevel = () => {
  const [desireLevel, setDesireLevel] = useState<number>(0);
  // const [hover, o0lsetHover] = useState(-1);
  return (
    <Box display={"flex"} sx={{ marginRight: "20px" }}>
      <p>希望度：</p>
      <Rating
        name="hover-feedback"
        value={desireLevel}
        data-testid="form-rating"
        sx={{ paddingTop: "15px" }}
        onChange={(_, newValue) => {
          typeof newValue === "number"
            ? setDesireLevel(newValue)
            : setDesireLevel(0);
        }}
        // onChangeActive={(event, newHover) => {
        //   setHover(newHover);
        // }}
        // emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
    </Box>
  );
};
