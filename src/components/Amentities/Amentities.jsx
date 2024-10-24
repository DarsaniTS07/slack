import { CheckBox, CheckCircle, Circle, CloseRounded, RadioButtonUnchecked } from '@mui/icons-material'
import { Avatar, Box, Button, Dialog, DialogContent, DialogTitle, Divider, IconButton, Radio, Switch, Typography } from '@mui/material'
import React, { useState } from 'react'
import { MdOutlineHouseboat } from "react-icons/md";
import data from "./Amentities.json" 

const Amentities = ({open, onClose}) => {
  const [amount,setAmount] = useState(0);
  const [index,setIndex] = useState(0);
  const [ischecked, setIsChecked] = useState(false);


  const handleSwitch = (id) => {
    setIsChecked((prev) => {
      const newValue = !prev[id]; 
      setAmount(newValue ? amount + 20 : amount - 20); 
      setIndex(newValue ? index + 1 : index - 1);
      return { ...prev, [id]: newValue };
    })}

  

  return (
    <Dialog open={open} onClose={onClose} 
    height="28rem"
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
          
        <Typography sx={{marginLeft:"12px",fontWeight:700,color:"#B3776D", fontSize:"17px"}}>{index.toString().padStart(2,'0')} Total Amenities</Typography>
        <Typography sx={{marginLeft:"auto",color:"#B3776D",fontWeight:700,fontSize:"1.1rem"}}>$ {amount.toFixed(2)}</Typography>
        </Box>
        </DialogContent>
        
          
        <Typography sx={{fontSize:"13px",color:"#98A0AC", marginLeft:2.5}} >Available Amenities</Typography>
        <Box sx={{maxHeight: '25rem',  
          overflowY: 'auto', 
          msScrollbarWidth:"none", scrollbarWidth:"none",  
          marginBottom: '1rem'}}>
          
          <Box >
          {data.amenities.map((item) => (
            
          <Box key={item.id} >
          
          <Box  sx={{border:"1px solid #E4E8EE",height:"3.9rem",marginInline:2.3, borderRadius:"5px",marginBottom:1.3,display:"flex",}}>
          <Avatar variant='square' src={item.image} sx={{margin:"7px 10px",height:"48px",width:"45px", borderRadius:"3px"}}/>
          <Box alignContent="center">
            <Typography sx={{fontWeight:700,marginBottom:"1px"}}>Amenities name</Typography>
            <Box display="flex" alignItems="center" sx={{gap:1}}>
            <Typography sx={{fontSize:"12px",color:"#4E5A6B"}}>$ 20.00</Typography>
            <Typography sx={{color:"#E4E8EE"}}>{"\u2022"}</Typography>
            <Typography sx={{fontSize:"12px",color:"#4E5A6B"}}>Valid Feb 22 - 12 Feb 23</Typography>
            </Box>
          </Box>
          <Switch sx={{marginLeft:"auto",
             '& .MuiSwitch-switchBase.Mui-checked': {
              color: "#5AC782",  
            },
            '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
              backgroundColor: "#5AC782"
            },
          }} checked={ischecked[item.id] || false} onChange={()=>handleSwitch(item.id)}/> 
  
          </Box>
       
        {ischecked[item.id] && 
          <Box sx={{border:"1px solid #E4E8EE",marginInline:2.3,marginTop:"-11px", borderRadius:"0 0 5px 5px",marginBottom:"0.5rem"}} display="flex">
           
                  <Radio  size="small" sx={{
                      color:'grey',
                      '&.Mui-checked': {
                        color: '#5078E1',
                      },
                      padding:"5px"
                      
                    }}/>

            <Typography sx={{fontSize:"12px", color:"#4E5A6B",padding:"5px"}}>Free Availability</Typography>
                  </Box>
        }
        </Box>
       
          ))}
           </Box>
         
            </Box>
            <Box>
            <Button  minWidth='400px' width="100%"  sx={{marginInline:2.2,marginBottom:2, width:'23.6rem', backgroundColor:'#5078E1', color:"#FFFFFF",fontWeight:700, textTransform:'none'}}>Update & Save</Button>
          </Box>
            
    </Dialog>
  )
}

export default Amentities