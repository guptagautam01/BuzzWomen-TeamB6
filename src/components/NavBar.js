import React from 'react';
import { AppBar,Button,Toolbar,Typography } from '@mui/material';

function Navbar(){
  return (
        <AppBar position='static'>
        <Toolbar>
        <Typography variant='h6' flexGrow={1} fontFamily={'Rubik'}><b>Sakhi</b></Typography>
        <Button color='inherit'>Explore</Button>
        <Button color='inherit'>Donate</Button>
        </Toolbar>
        </AppBar>
  )
}

export default Navbar;