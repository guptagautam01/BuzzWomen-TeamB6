import React from 'react'
import { Typography, Grid, Button } from '@mui/material';
import { Box } from '@mui/system';
import Women from '../images/robot.png'

const HeroSection = ({ setLanguage }) => {
    return (
        <Grid container direction="row" alignItems="center" overflow-y="hidden" maxHeight={60} fontFamily={'Rubik'} sx={{ p: 2 }}>
            <Grid item xs={6} sm={6} order={{ xs: 2, sm: 1 }}>
                <Typography variant="h6" >
                    Join the movement
                </Typography>
                <Typography variant="h4" color="primary" fontFamily={'Black Han Sans'}>
                    Empower Yourself Change Together
                </Typography>
                <Typography variant="h6">
                    <Box sx={{ pb: 2, pt: 2 }}>We bring transformation within reach. And enable women to ignite their personal and collective power.</Box>
                </Typography>
                <Button size="large" style={{ color: 'white' }} variant="contained" sx={{ borderRadius: 5, margin: 1 }} onClick={() => setLanguage("en")}>
                    <Box>Connect in English</Box>
                </Button>
                <Button size="large" style={{ color: 'white' }} variant="contained" sx={{ borderRadius: 5, margin: 1 }} onClick={() => setLanguage("hi")}>
                    <Box>हिंदी में जुड़ें</Box>
                </Button>
            </Grid>
            <Grid container item xs={12} sm={6} justifyContent="center" order={{ xs: 1, sm: 2 }} >
                <Box component="img" src={Women} />
            </Grid>
        </Grid>
    )
}

export default HeroSection