import { Box, List, ListItem } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
type Props = {
  onClickMenuClose: () => void;
};
export const AppDrawerMenu = ({ onClickMenuClose }: Props) => {
  return (
    <Box>
      <List>
        <Link onClick={onClickMenuClose} to="/calendar">
          <ListItem>カレンダー</ListItem>
        </Link>
        <Link onClick={onClickMenuClose} to="/scheduleList">
          <ListItem>スケジュール一覧</ListItem>
        </Link>
      </List>
    </Box>
  );
};
