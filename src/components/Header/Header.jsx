import { Accordion, AccordionDetails, AccordionSummary, Box, FormControl, IconButton, InputLabel, MenuItem, Select, Typography } from '@mui/material'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react'

const Header = () => {

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };


  return (
    <Box sx={{backgroundColor:"#FFFFFF", height:"43px", display:"flex",alignItems:"center"}}>
      <IconButton sx={{marginLeft:"20px"}}>
        <KeyboardArrowLeftIcon sx={{border:"1px solid none", borderRadius:"50%", backgroundColor:"#E4E8EE"}}/>
        </IconButton>
        <Typography sx={{fontWeight:600}}>Create Quotation To Existing Lead</Typography>
        <Box marginLeft="auto" sx={{ display: "flex", alignItems: "center",minWidth: 120} }>
        <FormControl fullWidth>
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          IconComponent={ExpandMoreIcon}
          sx={{ height: "25px", fontSize: "12px",paddingRight: "30px" , backgroundColor:"#F5F7FA", marginRight:"25px", fontWeight:700}}
        >
            <MenuItem value="" disabled sx={{fontSize:"13px"}}>
              Select a Category
            </MenuItem>
          <MenuItem value={10} sx={{fontSize:"13px"}}> Casagrand</MenuItem>
        </Select>
      </FormControl>
        </Box>
    </Box>
  )
}

export default Header