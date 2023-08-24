import { Button } from "@mui/material";

type Props = {
  onClickDelete: () => void;
  handleClose: () => void;
};
export const ScheduleFormDeleteButton = ({
  onClickDelete,
  handleClose,
}: Props) => {
  return (
    <Button
      variant="contained"
      color="error"
      data-testid="delete-button"
      sx={{ width: 100, padding: 1, margin: 2 }}
      onClick={() => {
        // onClickDelete ? onClickDelete() : handleClose();
        onClickDelete();
        handleClose();
      }}
    >
      削除
    </Button>
  );
};
