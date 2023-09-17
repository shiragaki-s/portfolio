import { Box, List, ListItem } from "@mui/material";
import { Link } from "react-router-dom";

type Props = {
  onClickMenuClose: () => void;
};
export const AppDrawerMenu = ({ onClickMenuClose }: Props) => {
  // const navigation = useNavigate();
  return (
    <Box>
      <List>
        <Link onClick={() => onClickMenuClose()} to="/">
          <ListItem>カレンダー</ListItem>
        </Link>
        <Link onClick={() => onClickMenuClose()} to="/scheduleList">
          <ListItem>スケジュール一覧</ListItem>
        </Link>
      </List>
    </Box>
  );
};
