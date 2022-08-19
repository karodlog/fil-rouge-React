import React from "react";
import { Avatar, Divider } from "@mui/material";
import IconMenu from "./logo192.png";
import { Stack } from "@mui/system";
import style from './navBar.module.css'


const NavBar = () => {
  return (
    <nav className={style.nav}>
      <Stack
        direction='column'
        divider={<Divider orientation='horizontal'/>}
        spacing={2}>
        <Avatar
        //   sx={{ width: 90, height: 90, alignSelf: 'center' }}
        className={style.logo}
          alt="logomenu"
          src={IconMenu}
        ></Avatar>
        <p>toto</p>
      </Stack>
    </nav>
  );
};

export default NavBar;
