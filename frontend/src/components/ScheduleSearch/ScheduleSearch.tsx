import { Box } from "@mui/material";
import { ScheduleSearchDate } from "../ScheduleSearchDate/ScheduleSearchDate";
import { ScheduleSearchCompany } from "../ScheduleSearchCompany/ScheduleSearchCompany";
import { ScheduleSearchJobChangeSite } from "../ScheduleSearchJobChangeSite/ScheduleSearchJobChangeSite";
import { ScheduleSearchDesireLevel } from "../ScheduleSearchDesireLevel/ScheduleSearchDesireLevel";
import { ScheduleSearchTitle } from "../ScheduleSearchTitle/ScheduleSearchTitle";
import { ScheduleSearchButton } from "../ScheduleSearchButton/ScheduleSearchButton";

export const ScheduleSearch = () => {
  return (
    <Box
      display={"flex"}
      sx={{
        whiteSpace: "nowrap",
        padding: "20px",
        backgroundColor: "#4e73c054",
      }}
    >
      <ScheduleSearchDate />
      <ScheduleSearchTitle />
      <ScheduleSearchCompany />
      <ScheduleSearchJobChangeSite />
      <ScheduleSearchDesireLevel />
      <ScheduleSearchButton />
    </Box>
  );
};
