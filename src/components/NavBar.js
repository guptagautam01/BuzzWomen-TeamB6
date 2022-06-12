import React from 'react';
import { AppBar,Button,Toolbar,Typography } from '@mui/material';

function Navbar(){
  return (
        <AppBar position='static'>
        <Toolbar>
        <Typography variant='h6'  style={{ color: 'white' }}  flexGrow={1} fontFamily={'Poppins'}><b>Sakhi</b></Typography>
        
        </Toolbar>
        </AppBar>
  )
}

export default Navbar;