import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';

const Header = ({onOpenMenu}) => {
    return (
        <header>
           <AppBar position='static' color='primary'>
           <Toolbar>
          <IconButton
            onClick={()=> onOpenMenu()}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component='div'
            variant='h5'>

            Task list

          </Typography>
        </Toolbar>

           </AppBar>
        </header>
    );
};

export default Header;