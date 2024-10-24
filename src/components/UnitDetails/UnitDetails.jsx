import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import MiddleContent from '../MiddleContent/MiddleContent'

const Unit_Details = () => {

  return (
    <Box sx={{ backgroundColor:"#E4E8EE",height:"30.5rem"}}>
      <Typography sx={{fontSize:"15px",fontWeight:600, paddingTop:"15px", paddingLeft:"15px",color:"#4E5A6B"}}>Unit Details</Typography>
      <Box sx={{display:"flex", flexWrap:"wrap", maxHeight:"28.2rem", overflowY:"scroll", scrollbarWidth:"none", "&::-webkit-scrollbar":{ display: "none"} }}>
        <MiddleContent/>
        </Box>
    </Box>
  )
}

export default Unit_Details