import styled from '@emotion/styled';
import { CloseRounded, ExpandMore, InfoOutlined } from '@mui/icons-material'
import { Box, Button, Dialog, DialogContent, DialogTitle, Divider, IconButton, LinearProgress, linearProgressClasses, MenuItem, Select, Typography } from '@mui/material'
import React, { useState } from 'react'

const PricingTable = ({open, onClose, title, bgColor,textColor}) => {

  const [selectedRevenueType, setSelectedRevenueType] = useState("Lease");
  const [dropDown, setDropDown] = useState("");
  const [pricing,setPricing] = useState("Amount")

const handleChange = (event) => {
  setDropDown(event.target.value);
}

const BorderLinearProgress = styled(LinearProgress)(({ theme,color }) => ({
  height: 5,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[200],
    ...theme.applyStyles('dark', {
      backgroundColor: theme.palette.grey[800],
      
    }),
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: color || '#1a90ff',
    ...theme.applyStyles('dark', {
      backgroundColor: color || '#308fe8',
    }),
  },
}));

  return (
    <Dialog open={open} onClose={onClose} title={title} bgColor={bgColor} textColor={textColor}>
      <DialogTitle sx={{padding:0.7,display:"flex",justifyContent:"space-between",alignItems:"center",width:"27.49rem",marginTop:"5px"}}>
        <Typography sx={{fontWeight:800,marginLeft:'20px'}}> Pricing Table</Typography>
        <IconButton onClick={onClose}>
        <CloseRounded sx={{color:"#7C8594"}} />
        </IconButton>
        </DialogTitle>
        <Divider/>
      <DialogContent>
        <Box display="flex" justifyContent="center" alignItems="center"   sx={{border:"1px solid none",margin:0,padding:0.4,marginInline:"-4px",borderRadius:"5px",backgroundColor:bgColor, marginBottom:"10px"}}>
        <Typography sx={{marginLeft:"12px",fontWeight:600,color:textColor}}>{title}</Typography>
        <Box marginLeft="auto" display="flex" justifyContent="center">
          <IconButton>
        <InfoOutlined sx={{color:"#CED3DD"}}/>
        </IconButton>
        </Box>
        </Box>
      
      {/* Second Part */}
        <Box display="flex" flexDirection="row">
        <Box marginTop={1}>
          <Typography sx={{color:"#98A0AC", fontSize:"14px"}}>Revenue Type</Typography>
          <Box sx={{ display: "flex",gap:1.5,marginTop:1 }}>
            {(title !== "Primary"
              ? ["Lease", "Sales", "Manage", "Stay"]
              : ["Lease", "Sales", "Manage"]
            ).map((revenueType) => (
              <Button
                key={revenueType}
                sx={{
                  backgroundColor:
                    selectedRevenueType === revenueType
                      ? "rgb(80,120,225)"
                      : "white",
                  color:
                    selectedRevenueType === revenueType ? "white" : "#4E5A6B",
                  textTransform:"none",
                  border:
                    selectedRevenueType === revenueType
                      ? "none"
                      : "1px solid #E4E8EE",
                  fontSize: "14px",
                  width: "auto", 
                }}
                onClick={() => setSelectedRevenueType(revenueType)}
              >
                {revenueType}
              </Button>  ))}
          </Box>
        </Box>
        {title === 'Primary' && (
        <Box sx={{marginLeft:1,marginTop:1}}>
          <Typography sx={{color:"#98A0AC", fontSize:"14px"}}>Pricing Component</Typography>
          <Select
          value={dropDown}
          onChange={handleChange}
          IconComponent={ExpandMore}
          displayEmpty
          sx={{ height: "38px", fontSize: "14px",paddingRight: "15px" , backgroundColor:"#FFFFFF",marginTop:1 ,fontWeight:"600"}}
        >
            <MenuItem value="" disabled sx={{fontSize:"13px"}}>
              Pricing Component
            </MenuItem>
        </Select>
        </Box>)}
        </Box>

        {/* Third Part */}
          <Box display="flex" flexDirection="row" gap={1} marginTop={1.5}>
          {title === 'Primary' && (
          <>
        <Box >
          <Typography sx={{color:"#98A0AC", fontSize:"14px"}}>Tax Group for Pricing Component</Typography>
          <Select
          value={dropDown}
          onChange={handleChange}
          IconComponent={ExpandMore}
          displayEmpty
          sx={{ height: "38px", fontSize: "14px",paddingRight: "7.5rem" , backgroundColor:"#FFFFFF",marginTop:1 ,fontWeight:"700"}}
        >
            <MenuItem value="" disabled sx={{fontSize:"13px"}}>
              GST
            </MenuItem>
        </Select>
          
        </Box>
        <Box sx={{marginLeft:2.5}}>
        <Typography sx={{color:"#98A0AC", fontSize:"14px"}}>Component based on</Typography>
          <Box sx={{ display: "flex", gap:1.5,marginTop:1 }}>
            {(title !== "Primary"
              ? []
              : ["Amount", "UOM"]
            ).map((pricingType) => (
              <Button
                key={pricingType}
                sx={{
                  backgroundColor:
                    pricing === pricingType
                      ? "rgb(80,120,225)"
                      : "white",
                  color:
                    pricing === pricingType ? "white" : "#4E5A6B",
                  textTransform:"none",
                  border:
                    pricing === pricingType
                      ? "none"
                      : "1px solid #E4E8EE",
                  fontSize: "14px",
                  width: "auto", 
                }}
                onClick={() => setPricing(pricingType)}
              >
                {pricingType}
              </Button>
              ))}
          </Box>
          </Box>
          </>
          )}
          </Box>
          <Box>
          {title !== 'Primary' && (
          <>
        <Box  display="flex">
          <Box marginTop={1.5}>
          <Typography sx={{color:"#98A0AC", fontSize:"14px"}}>Pricing Component</Typography>
          <Select
          value={dropDown}
          onChange={handleChange}
          IconComponent={ExpandMore}
          displayEmpty
          sx={{ height: "38px", fontSize: "14px",paddingRight: "1rem" , backgroundColor:"#FFFFFF",marginTop:1 ,fontWeight:"700"}}
        >
            <MenuItem value="" disabled sx={{fontSize:"13px"}}>
              Pricing Component
            </MenuItem>
        </Select>
        </Box>
        <Box marginTop={1.5}>
          <Typography sx={{color:"#98A0AC", fontSize:"14px",marginLeft:1.5}}>Tax Group for Pricing Component</Typography>
          <Select
          value={dropDown}
          onChange={handleChange}
          IconComponent={ExpandMore}
          displayEmpty
          sx={{ height: "38px", fontSize: "14px",paddingRight: "6.7rem" , backgroundColor:"#FFFFFF",marginTop:1 ,fontWeight:"700",marginLeft:2}}
        >
            <MenuItem value="" disabled sx={{fontSize:"13px"}}>
              GST
            </MenuItem>
        </Select>
        </Box>
        </Box>
        </>
        
)}

        {/* Fourth Part */}
        <Box display="flex" flexDirection="row">
         
        {title === "Primary" && (
          <Box sx={{marginTop:1.7}} > 
            <Typography sx={{color:"#98A0AC", fontSize:"14px"}}>UOM Value</Typography>
            <Box border="1px solid #E4E8EE"  sx={{height: "34px", borderRadius:"5px",width:"25rem",display:"flex" , alignItems:"center",marginTop:"5px"}}>
              <Typography sx={{marginLeft:"auto",color:"#98A0AC", marginRight:"10px"}}>SAR / Total</Typography>
            </Box>
          </Box>
)}
{(title === "Secondary" || title === "One time Charges" || title === "Parking Slot") &&
<Box display="flex" flexDirection="row" marginTop={2}>
<Box sx={{marginRight:6.2}}> 
  <Typography sx={{color:"#98A0AC", fontSize:"14px"}}>Chargeble</Typography>
  <Box sx={{ display: "flex",gap:1.5,marginTop:1}}>
            {(title === "Secondary" || title === "One time Charges" || title === "Parking Slot"
              ? ["Yes", "No"]
              : []
            ).map((revenueType) => (
              <Button
                key={revenueType}
                sx={{
                  backgroundColor:
                    selectedRevenueType === revenueType
                      ? "rgb(80,120,225)"
                      : "white",
                  color:
                    selectedRevenueType === revenueType ? "white" : "#4E5A6B",
                  textTransform:"none",
                  border:
                    selectedRevenueType === revenueType
                      ? "none"
                      : "1px solid #E4E8EE",
                  fontSize: "14px",
                  width: "auto", 
                }}
                onClick={() => setSelectedRevenueType(revenueType)}
              >
                {revenueType}
              </Button>  ))}
          </Box>
</Box>
<Box>
  <Typography sx={{color:"#98A0AC", fontSize:"14px"}}>Component Based on</Typography>
  <Box sx={{ display: "flex",gap:1.5,marginTop:2}}>
            {(title === "Secondary" || title === "One time Charges" || title === "Parking Slot"
              ? ["Amount", "UNO", "%"]
              : []
            ).map((revenueType) => (
              <Button
                key={revenueType}
                sx={{
                  backgroundColor:
                    selectedRevenueType === revenueType
                      ? "rgb(80,120,225)"
                      : "white",
                  color:
                    selectedRevenueType === revenueType ? "white" : "#4E5A6B",
                  textTransform:"none",
                  border:
                    selectedRevenueType === revenueType
                      ? "none"
                      : "1px solid #E4E8EE",
                  fontSize: "14px",
                  width: "auto", 
                }}
                onClick={() => setSelectedRevenueType(revenueType)}
              >
                {revenueType}
              </Button>  ))}
          </Box>
  </Box>
  </Box>
  }
        {title === "Refundables" && (
          <Box sx={{marginTop:2.3}}> 
            <Typography sx={{color:"#98A0AC", fontSize:"14px"}}>Component Based on</Typography>
            <Box sx={{ display: "flex",gap:1.5,marginTop:1}}>
            {(title === "Refundables" 
              ? ["Amount", "Rental Value", "%"]
              : []
            ).map((revenueType) => (
              <Button
                key={revenueType}
                sx={{
                  backgroundColor:
                    selectedRevenueType === revenueType
                      ? "rgb(80,120,225)"
                      : "white",
                  color:
                    selectedRevenueType === revenueType ? "white" : "#4E5A6B",
                  textTransform:"none",
                  border:
                    selectedRevenueType === revenueType
                      ? "none"
                      : "1px solid #E4E8EE",
                  fontSize: "14px",
                  width: "auto", 
                }}
                onClick={() => setSelectedRevenueType(revenueType)}
              >
                {revenueType}
              </Button>  ))}
          </Box>
            </Box>
)}
 {title === "Inventory Item" && (
          <Box marginTop={2.4}> 
            <Typography sx={{color:"#98A0AC", fontSize:"14px"}}>Pricing based on</Typography>
            <Box sx={{ display: "flex",gap:1.5,marginTop:1}}>
            {(title === "Inventory Item" 
              ? ["Monthly", "Total"]
              : []
            ).map((revenueType) => (
              <Button
                key={revenueType}
                sx={{
                  backgroundColor:
                    selectedRevenueType === revenueType
                      ? "rgb(80,120,225)"
                      : "white",
                  color:
                    selectedRevenueType === revenueType ? "white" : "#4E5A6B",
                  textTransform:"none",
                  border:
                    selectedRevenueType === revenueType
                      ? "none"
                      : "1px solid #E4E8EE",
                  fontSize: "14px",
                  width: "auto", 
                }}
                onClick={() => setSelectedRevenueType(revenueType)}
              >
                {revenueType}
              </Button>  ))}
          </Box>
            </Box>
)}
</Box>

{/* Fifth Part */}
<Box display="flex" flexDirection="column">
  {title === "Primary" &&(
    <Box display="flex" gap={1.5}>
      <Box marginTop={2.1}>
      <Typography sx={{color:"#98A0AC", fontSize:"13px"}}>Maximum</Typography>
      <BorderLinearProgress variant="determinate" value={100} color='red' sx={{width:"7rem", height:"1px"}} />
      <Box border="1px solid #E4E8EE" width="7rem" sx={{padding:"7px",fontFamily:"Nunito Sans", fontSize:"14px", fontWeight:700,marginTop:1, borderRadius:"5px"}}>$190</Box>
      <Typography sx={{color:"#98A0AC", fontSize:"13px"}}>Sq.Yard/Monthly</Typography>
      </Box>
      <Box marginTop={2.1}>
      <Typography sx={{color:"#98A0AC", fontSize:"13px"}}>Recommended</Typography>
      <BorderLinearProgress variant="determinate" value={70} color='green' sx={{width:"7rem", height:"1px"}} />
      <Box border="1px solid #E4E8EE" width="7rem" sx={{padding:"7px",fontFamily:"Nunito Sans", fontSize:"14px", fontWeight:700,marginTop:1, borderRadius:"5px"}}>$120</Box>
      <Typography sx={{color:"#98A0AC", fontSize:"13px"}}>Sq.Yard/Monthly</Typography>
      </Box>
      <Box marginTop={2.1}>
      <Typography sx={{color:"#98A0AC", fontSize:"13px"}}>Manimum</Typography>
      <BorderLinearProgress variant="determinate" value={30} color='orange' sx={{width:"7rem", height:"1px"}} />
      <Box border="1px solid #E4E8EE" width="7rem" sx={{padding:"7px",fontFamily:"Nunito Sans", fontSize:"14px", fontWeight:700,marginTop:1, borderRadius:"5px"}}>$190</Box>
      <Typography sx={{color:"#98A0AC", fontSize:"13px"}}>Sq.Yard/Monthly</Typography>
      </Box>
    </Box>
  )}
  {(title === "Secondary" || title === "One time Charges" || title === "Parking Slot" )&& (
    <Box sx={{marginTop:2}} > 
    <Typography sx={{color:"#98A0AC", fontSize:"14px"}}>UOM Value</Typography>
    <Box border="1px solid #E4E8EE"  sx={{height: "34px", borderRadius:"5px",width:"26rem",display:"flex" , alignItems:"center",marginTop:"5px"}}>
      <Typography sx={{marginLeft:"auto",color:"#98A0AC", marginRight:"10px"}}>$ / Total</Typography>
    </Box>
  </Box>
  )}
  {title === "Refundables" && (
    <Box sx={{marginTop:2.5}} > 
    <Typography sx={{color:"#98A0AC", fontSize:"14px"}}>Fixed Amount Value</Typography>
    <Box border="1px solid #E4E8EE"  sx={{height: "34px", borderRadius:"5px",width:"25rem",display:"flex" , alignItems:"center",marginTop:"5px"}}>
      <Typography sx={{marginLeft:"auto",color:"#98A0AC", marginRight:"10px"}}>$ / Total</Typography>
    </Box>
  </Box>
  )}
  {title === "Inventory Item" && (
    <Box sx={{marginTop:2.4}}  display="flex" gap={3}> 
    <Box>
    <Typography sx={{color:"#98A0AC", fontSize:"14px"}}>Item unit Price</Typography>
    <Box border="1px solid #E4E8EE"  sx={{height: "34px", borderRadius:"5px",width:"11.3rem",display:"flex" , alignItems:"center",marginTop:"5px"}}>
      <Typography sx={{marginLeft:"auto",color:"#98A0AC", marginRight:"10px"}}>$</Typography>
    </Box>
    </Box>
    <Box>
    <Typography sx={{color:"#98A0AC", fontSize:"14px"}}>Quantity</Typography>
    <Box border="1px solid #E4E8EE"  sx={{height: "34px", borderRadius:"5px",width:"11.3rem",display:"flex" , alignItems:"center",marginTop:"5px"}}>
      <Typography sx={{marginLeft:"auto",color:"#98A0AC", marginRight:"10px"}}>Qty</Typography>
    </Box>
    </Box>

  </Box>
  )}

{/* Button Part */}
<Box marginTop={3.5} >
  <Button variant='outlined'sx={{textTransform:"none"}}> Back</Button>
  <Button variant='contained'sx={{textTransform:"none", marginLeft:19}}> Create Pricing Component</Button>
</Box>
</Box>

</Box>
        
  
      </DialogContent>
    </Dialog>
  
)}

export default PricingTable