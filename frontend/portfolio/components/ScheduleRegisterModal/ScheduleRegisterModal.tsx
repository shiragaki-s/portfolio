import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import { RegisterSchedule } from "../Schedule/RegisterSchedule";
type Props = {
  open: boolean;
  handleClose: () => void;
};

export const ScheduleRegisterModal = ({ open, handleClose }: Props) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Subscribe</DialogTitle>
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
