import { Box, Divider, IconButton } from '@mui/material'
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import People from "/src/assets/Icon.svg"
import Ticket from "/src/assets/Request Ticket.svg"
import Inventory from "/src/assets/Inventory.svg"
import Community from "/src/assets/community.svg"
import Cloud from "/src/assets/cloud.svg"
import Messenger from "/src/assets/message.svg"
import Folder from "/src/assets/Folder.svg"
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import React from 'react'

const Sidebar = () => {

  const menuItems = [
    {icon:<DashboardRoundedIcon sx={{color:"#E4E8EE", fontSize:"23px"}}/>},
    {icon:<img src={Community} style={{width:'20px', height:'23px', border:"1px solid", backgroundColor:"#5078E1", padding:"7px", borderRadius:"50%"}} />},
    {icon:<img src={People} style={{width:'25px', height:'25px'}}/>},
    {icon:<img src={Inventory} style={{width:'25px', height:'25px'}}/>},
    {icon:<img src={Ticket} style={{width:'25px', height:'25px'}}/>},
    {icon:<SettingsIcon sx={{color:"#E4E8EE", fontSize:"23px"}}/>},
    {icon:<img src={Cloud} style={{width:'25px', height:'25px'}}/>},
    {icon:<LibraryBooksOutlinedIcon sx={{color:"#E4E8EE",fontSize:"22px"}}/>},
    {icon:<img src={Folder} style={{width:'25px', height:'25px'}}/>},
    {icon:<img src={Messenger} style={{width:'25px', height:'25px'}}/>}
  ]
  return (
    <Box sx={{backgroundColor:'#333333', height: '90.2vh'}} flex={1} flexDirection="column"  display='flex' alignItems="center" paddingTop="17px" >

      <IconButton>
        <KeyboardArrowRightIcon sx={{color:"#FFFFFF", border:"1px solid #5078E1", borderRadius:"50%", backgroundColor:"#5078E1", fontSize:"25px"}}/>
        </IconButton>
        <Divider orientation='horizontal' flexItem sx={{borderColor:"#98A0AC",width:"30px", marginLeft:"15px", marginTop:"18px", marginBottom:"15px" }}/>
        {menuItems.map((item, index) => (
        <IconButton key={index} sx={{justifyContent:"center"}}>
            {item.icon}
        </IconButton>
       ))}
    </Box>
  )
}

export default Sidebar