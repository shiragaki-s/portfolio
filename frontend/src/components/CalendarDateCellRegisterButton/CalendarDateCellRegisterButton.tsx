import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
type Props = {
  onClickRegistModal: () => void;
};
export const CalendarDateCellRegisterButton = ({
  onClickRegistModal,
}: Props) => {
  return (
    <IconButton onClick={onClickRegistModal}>
      <AddIcon />
    </IconButton>
  );
};
