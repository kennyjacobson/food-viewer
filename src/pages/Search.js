import React from 'react'
import { Typography, Grid, Button } from '@mui/material'
import {Link} from 'react-router-dom'



const Search = () => {

    return (
        <>
        <Grid container spacing={2}>
            <Grid item xs={6} md={2} >
                <Typography variant="h2">I am The Search Page.</Typography> 
            </Grid>
            <Grid item xs={6} md={2} >Hello</Grid>
            <Grid item xs={6} md={2} >Kenny</Grid>
            <Grid item xs={6} md={2} >Melanie</Grid>
            <Grid item xs={6} md={2} >Grant</Grid>
            <Grid item xs={6} md={2} >Eden</Grid>

        </Grid>

        <Typography>I'm the Test Grid</Typography>
        <Button component={Link} to="/TestGrid" variant="outlined">Test Grid</Button>
        </>
        

    )
}

export default Search