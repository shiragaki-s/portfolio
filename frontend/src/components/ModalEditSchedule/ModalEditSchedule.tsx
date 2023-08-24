import { Schedule } from "../../types";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import { ScheduleFormBaseContainer } from "../ScheduleFormBaseContainer/ScheduleFormBaseContainer";

type Props = {
  open: boolean;
  handleClose: () => void;
  targetSchedule: Schedule;
};
export const ModalEditSchedule = ({
  open,
  handleClose,
  targetSchedule,
}: Props) => {
  return (
    <Dialog
      fullWidth
      maxWidth={"sm"}
      open={open}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle>スケジュール編集</DialogTitle>
      <DialogContent>
        <ScheduleFormBaseContainer
          schedule={targetSchedule}
          handleClose={handleClose}
        />
      </DialogContent>
    </Dialog>
  );
};
