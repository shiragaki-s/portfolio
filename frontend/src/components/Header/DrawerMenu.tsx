import { Box, Link, List, ListItem } from "@mui/material";
type Props = {
  onClickMenuClose: () => void;
};
export const DrawerMenu = ({ onClickMenuClose }: Props) => {
  return (
    <Box>
      <List>
        <Link onClick={onClickMenuClose} href="calendar">
          <ListItem>カレンダー</ListItem>
        </Link>
        <Link href="scheduleList" onClick={onClickMenuClose}>
          <ListItem>スケジュール一覧</ListItem>
        </Link>
      </List>
    </Box>
  );
};
