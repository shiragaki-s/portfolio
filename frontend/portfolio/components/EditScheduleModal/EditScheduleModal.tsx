import { EditSchedule } from "../EditSchedule/EditSchedule";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";

type Props = {
  open: boolean;
  handleClose: () => void;
};
export const EditScheduleModal = ({ open, handleClose }: Props) => {
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
        <EditSchedule />
      </DialogContent>
    </Dialog>
  );
};
