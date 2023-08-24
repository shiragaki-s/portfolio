import { Button } from "@mui/material";

type Props = {
  onSubmitHandle: () => void;
  handleClose: () => void;
  buttonText: string;
};
export const ScheduleFormDecisionButton = ({
  onSubmitHandle,
  handleClose,
  buttonText,
}: Props) => {
  return (
    <Button
      variant="contained"
      color="primary"
      sx={{ width: 100, padding: 1, margin: 2 }}
      data-testid="register-button"
      onClick={() => {
        // onSubmitHandle = 新規登録 or 更新処理を親コンポーネントから渡す
        onSubmitHandle();
        handleClose();
      }}
    >
      {buttonText}
    </Button>
  );
};
