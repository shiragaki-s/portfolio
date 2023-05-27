import { EditSchedule } from "../EditSchedule/EditSchedule";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import { Schedule } from "@/types";

type Props = {
  open: boolean;
  handleClose: () => void;
  targetSchedule: Schedule;
};
export const EditScheduleModal = ({
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
        <EditSchedule
          targetSchedule={targetSchedule}
          handleClose={handleClose}
        />
      </DialogContent>
    </Dialog>
  );
};
