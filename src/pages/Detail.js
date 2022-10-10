import React from "react"
import {Typography } from "@mui/material"


const Detail = ({searchResults, restaurantId}) => {
    return (
        <>
            <Typography>My Details: {restaurantId}</Typography>
        </>
    )
}

export default Detail