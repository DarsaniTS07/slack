import styled from '@emotion/styled';
import { CloseRounded, ExpandMore, InfoOutlined } from '@mui/icons-material'
import { Box, Button, Dialog, DialogContent, DialogTitle, Divider, FormControl, IconButton, InputAdornment, LinearProgress, linearProgressClasses, MenuItem, OutlinedInput, Select, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const PricingTable = ({open, onClose, title, bgColor,textColor}) => {

  const [selectedRevenueType, setSelectedRevenueType] = useState("Lease");
  const [pricingDropDown, setPricingDropDown] = useState("");
  const [taxDropDown,setTaxDropDown] = useState("");
  const [pricing,setPricing] = useState("Amount")

const handlePricingChange = (event) => {
  setPricingDropDown(event.target.value);
}
const handleTaxChange = (event) => {
  setTaxDropDown(event.target.value);
}

const BorderLinearProgress = styled(LinearProgress)(({ theme,color }) => ({
  height: 5,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "#E4E8EE",
    ...theme.applyStyles('dark', {
      backgroundColor: "#E4E8EE",
    }),
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: color || '#1a90ff',
    ...theme.applyStyles('dark', {
      backgroundColor: color || '#E4E8EE',
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
          value={pricingDropDown}
          onChange={handlePricingChange}
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
          value={taxDropDown}
          onChange={handleTaxChange}
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
          value={taxDropDown}
          onChange={handlePricingChange}
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
          value={taxDropDown}
          onChange={handlePricingChange}
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
          <TextField variant='outlined'
          type='number'
          slotProps ={{
            input:{
            endAdornment:<InputAdornment position='end' sx={{marginRight:"17px",fontWeight:"700",
            }}><Typography sx={{fontWeight:"600",color:"#98A0AC"}}>SAR / Total</Typography></InputAdornment>,
            style:{
              padding:0,
              height:'2rem',
              width:'25.4rem',
              marginTop:'10px',
              "& .MuiInputBase-input":{
                fontWeight:"700",
              },
            }
          }}
        }></TextField>
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
      <TextField variant='outlined'
          type='number'
          placeholder='190'
          slotProps ={{
            input:{
            startAdornment:<InputAdornment position='start' sx={{marginLeft:"11px",fontWeight:"700",
            }}><Typography sx={{fontWeight:"700",color:"#1C1C1C"}}>$</Typography></InputAdornment>,
            style:{
              padding:0,
              height:'2rem',
              width:'8rem',
              marginTop:'10px',
              fontWeight:"700",              
            }
          }}
        }></TextField>
      <Typography sx={{color:"#98A0AC", fontSize:"13px"}}>Sq.Yard/Monthly</Typography>
      </Box>
      <Box marginTop={2.1}>
      <Typography sx={{color:"#98A0AC", fontSize:"13px"}}>Recommended</Typography>
      <BorderLinearProgress variant="determinate" value={70} color='green' sx={{width:"7rem", height:"1px"}} />
      <TextField variant='outlined'
          type='number'
          placeholder='190'
          slotProps ={{
            input:{
            startAdornment:<InputAdornment position='start' sx={{marginLeft:"11px",fontWeight:"700",
            }}><Typography sx={{fontWeight:"700",color:"#1C1C1C"}}>$</Typography></InputAdornment>,
            style:{
              padding:0,
              height:'2rem',
              width:'8rem',
              marginTop:'10px',
              fontWeight:"700",              
            }
          }}
        }></TextField>
      <Typography sx={{color:"#98A0AC", fontSize:"13px"}}>Sq.Yard/Monthly</Typography>
      </Box>
      <Box marginTop={2.1}>
      <Typography sx={{color:"#98A0AC", fontSize:"13px"}}>Minimum</Typography>
      <BorderLinearProgress variant="determinate" value={30} color='orange' sx={{width:"7rem", height:"1px"}} />
      <TextField variant='outlined'
          type='number'
          placeholder='190'
          slotProps ={{
            input:{
            startAdornment:<InputAdornment position='start' sx={{marginLeft:"11px",fontWeight:"700",
            }}><Typography sx={{fontWeight:"700",color:"#1C1C1C"}}>$</Typography></InputAdornment>,
            style:{
              padding:0,
              height:'2rem',
              width:'8rem',
              marginTop:'10px',
              fontWeight:"700",              
            }
          }}
        }></TextField>
      <Typography sx={{color:"#98A0AC", fontSize:"13px"}}>Sq.Yard/Monthly</Typography>
      </Box>
    </Box>
  )}
  {(title === "Secondary" || title === "One time Charges" || title === "Parking Slot" )&& (
    <Box sx={{marginTop:2}} > 
    <Typography sx={{color:"#98A0AC", fontSize:"14px"}}>UOM Value</Typography>
    <TextField variant='outlined'
          type='number'
          slotProps ={{
            input:{
            endAdornment:<InputAdornment position='end' sx={{marginRight:"17px",fontWeight:"700",
            }}><Typography sx={{fontWeight:"600",color:"#98A0AC"}}>$ / Total</Typography></InputAdornment>,
            style:{
              padding:0,
              height:'2rem',
              width:'25.4rem',
              marginTop:'10px',
              "& .MuiInputBase-input":{
                fontWeight:"700",
              },
            }
          }}
        }></TextField>
  </Box>
  )}
  {title === "Refundables" && (
    <Box sx={{marginTop:2.5}} > 
    <Typography sx={{color:"#98A0AC", fontSize:"14px"}}>Fixed Amount Value</Typography>
    <TextField variant='outlined'
          type='number'
          slotProps ={{
            input:{
            endAdornment:<InputAdornment position='end' sx={{marginRight:"17px",fontWeight:"700",
            }}><Typography sx={{fontWeight:"600",color:"#98A0AC"}}>$ / Total</Typography></InputAdornment>,
            style:{
              padding:0,
              height:'2rem',
              width:'25.4rem',
              marginTop:'10px',
              "& .MuiInputBase-input":{
                fontWeight:"700",
              },
            }
          }}
        }></TextField>
  </Box>
  )}
  {title === "Inventory Item" && (
    <Box sx={{marginTop:2.4}}  display="flex" gap={3}> 
    <Box>
    <Typography sx={{color:"#98A0AC", fontSize:"14px"}}>Item unit Price</Typography>
    <TextField variant='outlined'
          type='number'
          slotProps ={{
            input:{
            endAdornment:<InputAdornment position='end' sx={{marginRight:"17px",fontWeight:"700",
            }}><Typography sx={{fontWeight:"600",color:"#98A0AC"}}>$</Typography></InputAdornment>,
            style:{
              padding:0,
              height:'2rem',
              width:'11.3rem',
              marginTop:'10px',
              "& .MuiInputBase-input":{
                fontWeight:"700",
              },
            }
          }}
        }></TextField>
    </Box>
    <Box>
    <Typography sx={{color:"#98A0AC", fontSize:"14px"}}>Quantity</Typography>
    <TextField variant='outlined'
          type='number'
          slotProps ={{
            input:{
            endAdornment:<InputAdornment position='end' sx={{marginRight:"17px",fontWeight:"700",
            }}><Typography sx={{fontWeight:"600",color:"#98A0AC"}}>Qty</Typography></InputAdornment>,
            style:{
              padding:0,
              height:'2rem',
              width:'11.3rem',
              marginTop:'10px',
              "& .MuiInputBase-input":{
                fontWeight:"700",
              },
            }
          }}
        }></TextField>
    </Box>

  </Box>
  )}

{/* Button Part */}
<Box marginTop={3.5} >
  <Button variant='outlined' onClick={onClose} sx={{textTransform:"none"}}> Back</Button>
  <Button variant='contained'sx={{textTransform:"none", marginLeft:19}}> Create Pricing Component</Button>
</Box>
</Box>

</Box>
        
  
      </DialogContent>
    </Dialog>
  
)}

export default PricingTable