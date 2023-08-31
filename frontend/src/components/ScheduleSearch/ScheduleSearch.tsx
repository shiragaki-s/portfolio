import { Box } from "@mui/material";
import { ScheduleSearchDate } from "../ScheduleSearchDate/ScheduleSearchDate";
import { ScheduleSearchCompany } from "../ScheduleSearchCompany/ScheduleSearchCompany";
import { ScheduleSearchJobChangeSite } from "../ScheduleSearchJobChangeSite/ScheduleSearchJobChangeSite";
import { ScheduleSearchDesireLevel } from "../ScheduleSearchDesireLevel/ScheduleSearchDesireLevel";
import { ScheduleSearchTitle } from "../ScheduleSearchTitle/ScheduleSearchTitle";
import { ScheduleSearchButton } from "../ScheduleSearchButton/ScheduleSearchButton";
import { ScheduleCondition } from "../../pages/scheduleList";
import { Schedule } from "../../types";

type Props = {
  scheduleCondition: ScheduleCondition;
  setScheduleCondition: (scheduleCondition: ScheduleCondition) => void;
  setSearchResultSchedules: (searchResultSchedules: Schedule[]) => void;
};

export const ScheduleSearch = ({
  scheduleCondition,
  setScheduleCondition,
}: Props) => {
  return (
    <Box
      display={"flex"}
      sx={{
        whiteSpace: "nowrap",
        padding: "20px",
        backgroundColor: "#4e73c054",
      }}
    >
      <ScheduleSearchDate
        scheduleCondition={scheduleCondition}
        setScheduleCondition={setScheduleCondition}
      />
      <ScheduleSearchTitle />
      <ScheduleSearchCompany />
      <ScheduleSearchJobChangeSite />
      <ScheduleSearchDesireLevel />
      {/* <ScheduleSearchButton scheduleCondition={scheduleCondition} setSearchResultSchedules/> */}
      <ScheduleSearchButton />
    </Box>
  );
};
