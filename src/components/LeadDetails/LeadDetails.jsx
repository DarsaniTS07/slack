import { Avatar, Box, Divider,  Typography } from '@mui/material'
import {makeStyles} from '@mui/styles'
import React from 'react'
import data from "./leadDetails.json"



    const useStyles = makeStyles((theme) => ({
        container:{
            height: "4.2rem",
            border:"1px solid #E4E8EE !important",
            margin:"7px",
            display:"flex", 
            flexDirection:"row",
            borderRadius:"5px"
        },
    }))
    const Lead_Details = () => {
    const classes = useStyles();
  return (
    <Box>
        <Typography sx={{padding:"13px", paddingBottom:"0px",color:"#4E5A6B",fontWeight:"600", marginLeft:"0.1rem"}}>Lead Details</Typography>
        <Box className = {classes.container}>
            <Avatar src='/src/assets/Profile.jpeg' sx={{margin:"10px 15px",height:"50px", borderRadius:"3px"}} />
            <Box display="flex" flexDirection="column">
            <Box display="flex" flexDirection="row">
                <Typography sx={{fontSize:"15px",fontWeight:"700",paddingTop:"12px", color:"#091B29"}}>Tom Cruise</Typography>
                <Typography sx={{fontWeight:"700",fontSize:"12px", border:"1px solid #5078E11E",
                    backgroundColor:"#5078E11E",height:"17px", paddingInline:"6px",borderRadius:"3px",marginTop:"13px", marginLeft:"15px"
                }}>Prospect</Typography>
            </Box>
            <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center" gap={1}>
                <Typography sx={{fontSize:'13px',color:"#4E5A6B"}}>+91 9090808012</Typography>
                <Typography sx={{color:"#4E5A6B"}}>{"\u2022"}</Typography>
                <Typography sx={{fontSize:'13px',color:"#4E5A6B"}}>Tomcruise2515@mail.com</Typography>
            </Box>
            </Box>
        </Box>
        <Divider sx={{marginLeft:"12px",marginTop:"10px"}}/>
        <Box>
            <Typography sx={{color:'#4E5A6B',fontWeight:700, paddingInline:"15px",paddingTop:"10px"}}>Quotation Details</Typography>
            <Box display="flex" flexWrap="wrap">
                {data.quotation.map((item) =>(
                    <Box key={item.id} sx={{width:"7.7rem",marginLeft:"16px",marginTop:"17px"}}>
                        <Typography sx={{fontSize:"11px",color:"#98A0AC"}}>{item.topic}</Typography>
                        <Box display="flex" flexGrow='1' sx={{width:'10rem'}}>
                        <Typography sx={{fontSize:"14px",color:"#091B29",fontWeight:600}}>{item.date}</Typography>
                        <Typography sx={{fontSize:"14px",color:"#98A0AC",fontWeight:500,marginLeft: '4px' }}>{item.state}</Typography>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    </Box>
  )
}

export default Lead_Details