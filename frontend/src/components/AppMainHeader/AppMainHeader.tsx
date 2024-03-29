import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { AppDrawerMenu } from "../AppDrawerMenu/AppDrawerMenu";
import { SignOut } from "../../types";
import { useUserInfo } from "../../hooks/useUserInfo";

type Props = {
  signOut: SignOut;
};

export const AppMainHeader = ({ signOut }: Props) => {
  const [drawerOpened, setDrawerOpened] = useState(false);
  const menuClick = () => {
    setDrawerOpened(true);
  };
  const onClickMenuClose = () => {
    setDrawerOpened(false);
  };
  const { userNickName } = useUserInfo();
  return (
    <Box sx={{ flexGrow: 1, margin: 0 }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={menuClick}
          >
            {/* <MenuIcon /> */}
            menu
            {/* menu */}
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            スケジュール管理
          </Typography>
          <Typography>{userNickName}さん</Typography>
          <Button color="inherit" onClick={() => signOut()}>
            ログアウト
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor={"left"}
        open={drawerOpened}
        onClose={onClickMenuClose}
        color="primary"
      >
        <AppDrawerMenu onClickMenuClose={onClickMenuClose} />
      </Drawer>
    </Box>
  );
};
