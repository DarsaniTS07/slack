import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  Grid2,
  Box,
  Divider,
  IconButton,
  Button,
} from "@mui/material";
import HomeDetails from "../HomeDetails/HomeDetails";
import { CloseRounded, ExpandMore } from "@mui/icons-material";
import data from '../Discount/Discount.json'
import { RiDeleteBinLine } from "react-icons/ri";

const RemoveComponent = ({ open, onClose }) => {

  const totalAmount = data.pricingDetails.reduce((total, item) => {
    return total + item.amount; 
  }, 0);

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
  <DialogTitle sx={{padding:0.5,display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"4px"}}>
        <Typography sx={{fontWeight:800,marginLeft:'20px'}}>Remove Component</Typography>
        <IconButton onClick={onClose}>
        <CloseRounded sx={{color:"#7C8594"}} />
        </IconButton>
        </DialogTitle>
      <Divider sx={{ width: "100%", color: "gray" }} />
      <DialogContent>
        <Grid2 container spacing={1}>
          <Grid2 item xs={12} sm={7} flex={2}>
            <HomeDetails />
          </Grid2>
          <Grid2 item xs={12} sm={5} flex={2} >
<Box sx={{backgroundColor:"#F8F9FB",height:"33.2rem",borderRadius:"8px"}} p={1}>
<Typography sx={{ fontWeight: "700",color:"#091B29",paddingLeft:"5px",paddingTop:"5px"}}>UNIT PRICE DETAIL</Typography>

<Box  sx={{
                  height: '29rem', 
                  overflowY: 'auto', 
                  scrollbarWidth:'none'
                }}>
{data.pricingDetails.map((item) => (
<Box p={0.9} key={item.id}>
 
    <Box display="flex" alignItems="center">
    <Typography sx={{color:"#4E5A6B", fontWeight:600}}>Bill Name Here</Typography>
    <Typography sx={{marginLeft:"auto"}}>${item.amount}</Typography>
    <IconButton>
    <RiDeleteBinLine style={{color:"#FF4B4B",border:"1px solid #fbefea", padding:"3.5px", backgroundColor:"#fbefea", borderRadius:"3px",marginLeft:"20px"}}/>
    </IconButton>
    </Box>
    <Divider sx={{color:"#E4E8EE",marginTop:"15px"}}/>
</Box>
))}

</Box>
<Box sx={{border:"1px solid #E4E8EE", backgroundColor:"#E4E8EE",borderRadius:"5px",margin:"5px",marginBottom:"10px",display:"flex"}}>
  <Typography sx={{fontWeight:700,padding:"3px"}}>Final Total</Typography>
  <Typography sx={{fontWeight:700,padding:"3px",marginLeft:"auto",paddingRight:"10px"}}>$ {totalAmount.toFixed(2)}</Typography>
</Box>
</Box>
<Button variant="contained" fullWidth sx={{textTransform:'none',padding:"5px",fontSize:"15px"}}>Update & Save</Button>
</Grid2>

        </Grid2>
      </DialogContent>
    </Dialog>
  );
};

export default RemoveComponent;
