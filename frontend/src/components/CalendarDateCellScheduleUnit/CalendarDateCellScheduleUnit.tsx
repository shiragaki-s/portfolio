import { Button, Typography } from "@mui/material";
import { Schedule } from "../../types";
import { ModalEditSchedule } from "../ModalEditSchedule/ModalEditSchedule";
import { useEditModal } from "../ScheduleListTable/ScheduleListTable.hooks";

type Props = {
  schedule: Schedule;
};
export const CalendarDateCellScheduleUnit = ({ schedule }: Props) => {
  const { editModalIsOpen, setEditModalIsopen, onClickEditModal } =
    useEditModal();
  return (
    <>
      <Button sx={{ width: "150px" }} onClick={() => onClickEditModal()}>
        <Typography
          maxWidth={"100%"}
          variant="body2"
          textAlign={"left"}
          noWrap
          sx={{
            textOverflow: "ellipsis",
            overflow: "hidden",
            width: "140px",
          }}
        >
          {schedule.time.format("HH:mm")}
          {schedule.title}
        </Typography>
      </Button>
      <ModalEditSchedule
        open={editModalIsOpen}
        handleClose={() => {
          setEditModalIsopen(false);
        }}
        targetSchedule={schedule}
      />
    </>
  );
};
