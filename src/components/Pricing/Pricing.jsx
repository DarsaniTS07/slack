import { Box, Dialog, DialogContent, DialogTitle, Divider, IconButton, Typography } from '@mui/material'
import React, { useState } from 'react'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import PricingTable from './PricingTable';

const Pricing = ({open, onClose}) => {

  const [openTable, setOpenTable] = useState("");

  const value = [
    {id:1, title:"Primary", bgColor:"#FEEAEA80", textColor:"#B3776D",table:"primary"},
    {id:2, title:"Secondary", bgColor:"#EDE4FE80", textColor:"#896DB3",table:"secondary"},
    {id:3, title:"One time Charges", bgColor:"#DBF0F180", textColor:"#6DAFB3",table:"one time charges"},
    {id:4, title:"Refundables", bgColor:"#E4EDFF80", textColor:"#6D80B3",table:"refundable"},
    {id:5, title:"Inventory Item", bgColor:"#FFFAD880", textColor:"#B3A16D",table:"inventory item"},
    {id:6, title:"Parking Slot", bgColor:"#FEEAEA80", textColor:"#B3776D",table:"parking slot"},
  ]

  const handleOpenPricingTale = (tableType) =>{
      setOpenTable(tableType);
  } 

  const handleClosePricingTable = (tableType) => {
    setOpenTable("");
  }


  
  return (
    <Dialog open={open} onClose={onClose}
    slotProps={{
        backdrop: {
          style: {
            backgroundColor: 'rgba(0, 0, 0, 0.29)', 
          },
        }}}>
        <DialogTitle sx={{padding:0.5,display:"flex",justifyContent:"space-between",alignItems:"center",width:"27.56rem",marginTop:"5px"}}>
        <Typography sx={{fontWeight:800,marginLeft:'20px'}}> Pricing Table</Typography>
        <IconButton onClick={onClose}>
        <CloseRoundedIcon sx={{color:"#7C8594"}} />
        </IconButton>
        </DialogTitle>
        <Divider/>
        
    <DialogContent sx={{paddingInline:2}}>
    {value.map((item,index) => (
        <Box display="flex" key={item.id} justifyContent="center" alignItems="center"   sx={{border:"1px solid none",margin:0,padding:1.65,borderRadius:"5px",backgroundColor:item.bgColor, marginBottom:"10px"}}>
            <Typography sx={{border:"1px solid",height:"23px",width:"25px", borderRadius:"50%",display:"flex", alignItems:"center", justifyContent:"center",
              marginLeft:"3px",fontWeight:700,fontSize:"12px",padding:"1px",backgroundColor:item.textColor,color:"#FFFFFF"}}>{(index + 1).toString().padStart(2,'0')}</Typography>
        <Typography sx={{marginLeft:"12px",fontWeight:600,color:item.textColor}}>{item.title}</Typography>
        <Box marginLeft="auto" display="flex" justifyContent="center">
          <IconButton>
        <InfoOutlinedIcon sx={{color:"#CED3DD"}}/>
        </IconButton>
        <IconButton>
        <KeyboardArrowRightRoundedIcon sx={{color:item.textColor}} onClick={() => handleOpenPricingTale(item.table)}/>
        </IconButton>
        </Box>
        </Box>
       )) }

       {value.map((item) => (
              openTable === item.table && (<PricingTable key={item.id} open={openTable === item.table} onClose={handleClosePricingTable} title={item.title} bgColor={item.bgColor} textColor={item.textColor}/>)
       ))}
       
    </DialogContent>
    </Dialog>
  )
}

export default Pricing