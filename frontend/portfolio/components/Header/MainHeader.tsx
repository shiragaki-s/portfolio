import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";
import { DrawerMenu } from "./DrawerMenu";

// const StyledDrawer , 0, 0)= styled(Drawer)(() => ({
//   "& .MuiDrawer-paper": {
//     top: 20, // PageHeaderの高さ分の余白をメニュー上部に設ける
//     height: "fit-content", // メニューの項目数に応じた高さにする 指定しないと残りの高さ全てを使う
//     innerWidth: "fit-content",
//     outerWidth: "fit-content",
//   },
//   "& .MuiBackdrop-root": {
//     // バックドロップがPageHeaderを覆わないように上下で塗分ける
//     background: `linear-gradient(
//     rgba(0, 0, 0, 0) 0%,
//     rgba(0, 0 ${20},
//     rgba(0, 0, 0, 0.5) ${20},
//     rgba(0, 0, 0, 0.5) calc(100% - ${20})
//    )`,
//   },
// }));

export const MainHeader = () => {
  const [drawerOpened, setDrawerOpened] = useState(false);
  const menuClick = () => {
    setDrawerOpened(true);
  };
  const onClickMenuClose = () => {
    setDrawerOpened(false);
  };
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
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            スケジュール管理
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor={"left"}
        open={drawerOpened}
        onClose={onClickMenuClose}
        color="primary"
      >
        <DrawerMenu onClickMenuClose={onClickMenuClose} />
      </Drawer>
    </Box>
  );
};
