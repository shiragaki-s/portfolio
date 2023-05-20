import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { RegisterSchedule } from "../RegisterSchedule/RegisterSchedule";
type Props = {
  open: boolean;
  handleClose: () => void;
};

export const ScheduleRegisterModal = ({ open, handleClose }: Props) => {
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
        <RegisterSchedule />
      </DialogContent>
      <DialogActions>
        {/* <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleClose}>Subscribe</Button> */}
      </DialogActions>
    </Dialog>
  );
};
