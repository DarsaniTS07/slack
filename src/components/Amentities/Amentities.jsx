import { CloseRounded } from '@mui/icons-material'
import { Avatar, Box, Dialog, DialogContent, DialogTitle, Divider, IconButton, Typography } from '@mui/material'
import React from 'react'
import { MdOutlineHouseboat } from "react-icons/md";

const Amentities = ({open, onClose}) => {
  return (
    <Dialog open={open} onClose={onClose}
    slotProps={{
        backdrop: {
          style: {
            backgroundColor: 'rgba(0, 0, 0, 0.29)', 
          },
        }}}>
        <DialogTitle sx={{padding:0.5,display:"flex",justifyContent:"space-between",alignItems:"center",width:"25.56rem",marginTop:"4px"}}>
        <Typography sx={{fontWeight:800,marginLeft:'20px'}}> Add Amenities</Typography>
        <IconButton onClick={onClose}>
        <CloseRounded sx={{color:"#7C8594"}} />
        </IconButton>
        </DialogTitle>
        <Divider/>
        <DialogContent>
        <Box display="flex"  alignItems="center"   sx={{border:"1px solid none",margin:0,padding:1,marginInline:"-6px",marginTop:"-7px",marginBottom:"-8px",
          borderRadius:"5px",backgroundColor:"#FEEAEA80"}}>
            <MdOutlineHouseboat style={{color:"#B3776D",fontSize:"2rem"}}/>
        <Typography sx={{marginLeft:"12px",fontWeight:700,color:"#B3776D"}}>Total Amenities</Typography>
        <Typography sx={{marginLeft:"auto"}}>$ 200.00</Typography>
        </Box>
        </DialogContent>
        <Box>
          <Typography sx={{fontSize:"13px",color:"#98A0AC", marginLeft:2.5}} >Available Amenities</Typography>
          <Box sx={{border:"1px solid #E4E8EE",height:"3.9rem",marginInline:2.3, borderRadius:"5px",marginBottom:1.3,display:"flex",}}>
          <Avatar variant='square' src='src\assets\playGround.jpg' sx={{margin:"7px 10px",height:"48px",width:"45px", borderRadius:"3px"}}/>
          <Box alignContent="center">
            <Typography sx={{fontWeight:700,marginBottom:"1px"}}>Amenities name</Typography>
            <Box display="flex" alignItems="center" sx={{gap:1}}>
            <Typography sx={{fontSize:"12px",color:"#4E5A6B"}}>$ 20.00</Typography>
            <Typography sx={{color:"#E4E8EE"}}>{"\u2022"}</Typography>
            <Typography sx={{fontSize:"12px",color:"#4E5A6B"}}>Valid Feb 22 - 12 Feb 23</Typography>
            </Box>
          </Box>
          </Box>
        </Box>
    </Dialog>
  )
}

export default Amentities