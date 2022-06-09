import React from 'react'
import { Typography,Grid, Button } from '@mui/material';
import { Box } from '@mui/system';
import Women from '../images/robot.png'

const HeroSection = () => {
    return (
        <Grid container direction="row" alignItems="center" minHeight={400} fontFamily={'Rubik'} sx={{p:2}}>
           <Grid item xs={12} sm={6} order={{xs:2,sm:1}}>
                <Typography variant="h6" >
                    Join the movement
               </Typography>
               <Typography variant="h3" color="primary" fontFamily={'Black Han Sans'}>
                  Empower Yourself Change Together
               </Typography>
               <Typography variant="h5">
                  <Box sx={{pb:2,pt:2}}>We bring transformation within reach. And enable women to ignite their personal and collective power.</Box>

               </Typography>
               <Button size="large" variant="contained" sx={{borderRadius:5}}>
               <Box>Connect to Chatbot</Box>
               </Button>
           </Grid>
           <Grid container item xs={12} sm={6} justifyContent="center" order={{xs:1,sm:2}} >
               <Box component="img" src={Women}/>
           </Grid>
        </Grid>
    )
}

export default HeroSection