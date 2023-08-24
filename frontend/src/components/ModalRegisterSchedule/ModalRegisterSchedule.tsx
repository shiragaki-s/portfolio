import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import { Dayjs } from "dayjs";
import { ScheduleFormBaseContainer } from "../ScheduleFormBaseContainer/ScheduleFormBaseContainer";
import { defaultSchedule } from "../../utils/calendarUtill";
type Props = {
  open: boolean;
  handleClose: () => void;
  date: Dayjs;
};

export const ModalRegisterSchedule = ({ open, handleClose, date }: Props) => {
  return (
    <Dialog
      fullWidth
      maxWidth={"sm"}
      open={open}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle>スケジュール登録</DialogTitle>
      <DialogContent>
        <ScheduleFormBaseContainer
          handleClose={handleClose}
          schedule={defaultSchedule}
          registerDate={date}
        />
      </DialogContent>
    </Dialog>
  );
};
