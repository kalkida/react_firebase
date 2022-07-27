import React from 'react'
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Avatar, Box, Link, Toolbar } from '@mui/material';
import { Logo } from './logo';
import imlogo from '../assets/logo.png'
export const Navbar = () => (
  <AppBar
    elevation={0}
    sx={{ backgroundColor: '#1e212a' }}
  >
    <Toolbar
      disableGutters
      sx={{
        alignItems: 'center',
        display: 'flex',
        minHeight: 64,
        px: 3,
        py: 1
      }}
    >
      <Box
        component={RouterLink}
        to="/login"
        sx={{
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <Logo />
      </Box>
      <Box sx={{ flexGrow: 1 }} />
      <Link
        color="#ffffff"
        to='/updateprofile'
        sx={{ mr: 1.25 }}
        target="_blank"
        variant="body2"
      >
        Update Profile
      </Link>
      <Avatar
        alt="User"
        src={imlogo}
      />
    </Toolbar>
  </AppBar>
);

