import React from 'react';
import {
  AppBar,
  IconButton,
  Toolbar,
  Drawer,
  Button,
  Avatar,
  useMediaQuery,
} from '@mui/material';

import {
  Brightness4,
  Brightness7,
  AccountCircle,
  Menu,
} from '@mui/icons-material';

import { NavLink } from 'react-router-dom';

const NavBar = () => {
  // If window width > 600px , is Mobie will return false otherwise true
  const isMobile = useMediaQuery('(max-width:600px');
  return (
    <>
      <AppBar position="fixed">
        <Toolbar className="nav-toolbar">
          {isMobile && (
            <IconButton
              color="inherit"
              edge="start"
              sx={{
                outline: 'none',
                marginRight: 'theme.spacing(2)',
              }}
              onClick={() => {}}
            >
              <Menu />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
