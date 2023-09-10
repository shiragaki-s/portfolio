import { Box, Rating } from "@mui/material";
import { useState } from "react";
import { ScheduleCondition } from "../../pages/scheduleList";

type Props = {
  scheduleCondition: ScheduleCondition;
  setScheduleCondition: (scheduleCondition: ScheduleCondition) => void;
};
export const ScheduleSearchDesireLevel = ({
  scheduleCondition,
  setScheduleCondition,
}: Props) => {
  const [desireLevel, setDesireLevel] = useState<number>(0);
  return (
    <Box display={"flex"} sx={{ marginRight: "20px" }}>
      <p>希望度：</p>
      <Rating
        name="hover-feedback"
        value={desireLevel}
        data-testid="form-rating"
        sx={{ paddingTop: "15px" }}
        onChange={(_, newValue) => {
          if (typeof newValue === "number") {
            setScheduleCondition({
              ...scheduleCondition,
              desiredLevel: newValue,
            });
            setDesireLevel(newValue);
          } else {
            setScheduleCondition({
              ...scheduleCondition,
              desiredLevel: 0,
            });
            setDesireLevel(0);
          }
        }}
      />
    </Box>
  );
};
