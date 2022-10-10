import React from 'react'
import { Typography, Grid, Button, Card, CardContent } from '@mui/material'
import {Link} from 'react-router-dom'
import SearchResults from '../components/searchResults'



const Search = ({searchResults, setRestaurantId}) => {
    const people = ["Search","Melanie","Grant","Eden","Scooter","James"]
    const cheapFood = searchResults.filter((value) => value.price === "$")
    const moderateFood = searchResults.filter((value) => value.price === "$$")
    const expensiveFood = searchResults.filter((value) => value.price === "$$$")


    return (
        <>
                <SearchResults food={cheapFood} title={"Cheap Food"} setRestaurantId={setRestaurantId} />
                <SearchResults food={moderateFood} title={"Moderate Food"} setRestaurantId={setRestaurantId}/>
                <SearchResults food={expensiveFood} title={"Expensive Food"} setRestaurantId={setRestaurantId}/>
                    
        </>
    )
}

export default Search