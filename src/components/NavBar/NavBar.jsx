import React from 'react';
import { Avatar, Drawer} from '@mui/material'
import IconMenu from './logo192.png'


const NavBar = ({isVisible, onCloseMenu}) => {
    return (
        <Drawer
        anchor='left'
        open={isVisible}
        onClose={onCloseMenu}>

            <Avatar
                sx={{width: 90, height:90}}
                alt='logomenu'
                src={IconMenu}
            ></Avatar>    
        </Drawer>
    );
};

export default NavBar;