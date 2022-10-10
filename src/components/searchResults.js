import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import {useNavigate} from 'react-router-dom';

const SearchResults = ({food, title, setRestaurantId }) => {
    let navigate = useNavigate();

    const goToDetails = (restaurantId) => {
        setRestaurantId(restaurantId)
        navigate("/detail");
    } 
    

    return(
        <>
        {
            (food.length > 0) ? (
                <Typography variant="h3">{title}</Typography>       
            ) : (
                <></>
            )
        }
      
        <Grid container spacing={2} sx={{pt:2}}>
            {
                food.map(
                    (value, index) => {
                        return (
                            <Grid key={index}  item xs={6} md={2} >
                                {/* <Card>
                                    <CardContent>
                                    {value.name}
                                    </CardContent>
                                </Card> */}

                            <Card sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={value.image_url}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                    {value.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                    {value.location.address1} <br/>
                                    {value.location.city}, {value.location.state}

                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button onClick={(e) => goToDetails(value.id)}  size="small">Details</Button>
                                    {/* <Button size="small">Learn More</Button> */}
                                </CardActions>
                            </Card>



                            </Grid>
                        )
                    }
                )
            }
            </Grid>


        </>

    )
}

export default SearchResults