import { Button } from "@mui/material";

type Props = {
  initScheduleForm: () => void;
  handleClose: () => void;
};
export const ScheduleFormCancelButton = ({
  initScheduleForm,
  handleClose,
}: Props) => {
  return (
    <Button
      variant="outlined"
      sx={{ width: 100, padding: 1, margin: 2 }}
      onClick={() => {
        initScheduleForm();
        handleClose();
      }}
    >
      キャンセル
    </Button>
  );
};
