import { Button } from "@mui/material";

type Props = {
  onClick: () => void;
  text: string;
};
export const CalendarMonthlyChangeButton = ({ onClick, text }: Props) => {
  // export const CaledarButton = (props: Props) => {

  return (
    <Button
      variant="contained"
      color="primary"
      sx={{ width: "50px", height: "40px" }}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};
