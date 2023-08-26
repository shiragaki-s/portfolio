import { Button, Typography } from "@mui/material";
import { Schedule } from "../../types";
import { ModalEditSchedule } from "../ModalEditSchedule/ModalEditSchedule";
import { useEditForm } from "../../hooks/useEditForm";

type Props = {
  schedule: Schedule;
};
export const CalendarDateCellScheduleUnit = ({ schedule }: Props) => {
  const { editFormIsOpen, setEditFormIsopen, onClickEditForm } = useEditForm();
  return (
    <>
      <Button sx={{ width: "150px" }} onClick={() => onClickEditForm()}>
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
        open={editFormIsOpen}
        handleClose={() => {
          setEditFormIsopen(false);
        }}
        targetSchedule={schedule}
      />
    </>
  );
};
