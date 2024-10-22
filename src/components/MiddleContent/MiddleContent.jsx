import { Box,Button,Card,CardActions,CardContent,CardMedia,
  ClickAwayListener,
Divider,IconButton,List,ListItem,Paper,Popper,Typography,} from "@mui/material";
import React, { useState } from "react";
import place from "../../assets/Home.jpeg";
import LocalHotelOutlinedIcon from "@mui/icons-material/LocalHotelOutlined";
import { LuBath } from "react-icons/lu";
import { IoMdHome } from "react-icons/io";
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { RiDeleteBinLine } from "react-icons/ri";
import Pricing from "../Pricing/Pricing";
import Amentities from "../Amentities/Amentities";


const MiddleContent = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const [openComponent, setOpenComponent] = useState("");

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClosePopover = () => {
      setAnchorEl(null);
    };
  

    const handleOpenComponent = (componentType) => {
      setOpenComponent(componentType);
      handleClosePopover();
    };
  
    const handleCloseComponent= () => {
      setOpenComponent("");
    };

    const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const Content_details = [
    {
      id: 1,
      name: "Jumeirah Estate",
      amount: 1200,
      Description: "Jumeirah Golf Estate",
      feet: 2000,
      bed: 2,
      bath: 2,
      home: 2,
    },
    {
      id: 2,
      name: "Jumeirah Estate",
      amount: 1500,
      Description: "Jumeirah Golf Estate",
      feet: 2000,
      bed: 2,
      bath: 3,
      home: 2,
    },
    {
      id: 3,
      name: "Jumeirah Estate",
      amount: 1400,
      Description: "Jumeirah Golf Estate",
      feet: 1500,
      bed: 2,
      bath: 3,
      home: 2,
    },
    {
      id: 4,
      name: "Jumeirah Estate",
      amount: 1250,
      Description: "Jumeirah Golf Estate",
      feet: 1500,
      bed: 2,
      bath: 2,
      home: 2,
    },
  ];
  return (

    <Box display="flex" flexWrap="wrap">
      {Content_details.map((item) => (
        <Card
          key={item.id}
          sx={{
            maxWidth: "205px",
            width: "100%",
            gap: "20px",    
            margin: "15px",
            padding:"14px"
          }}
        >
          <Box sx={{position:"relative"}}>
          <CardMedia component="img" alt="Home" height="115"
          image={place} sx={{borderRadius:"5px", position:"relative"}} />
          <IconButton sx={{position:"absolute", top:3, right:3,cursor:"pointer"}}>
          <RiDeleteBinLine style={{color:"#FF4B4B",fontSize:"17px",
            border:"1px solid #FFFFFF", borderRadius:"50%", padding:"4px", backgroundColor:"#FFFFFF"
          }}/>
          </IconButton>
          </Box>
          <CardContent sx={{padding:'0'}}>
            <Box display="flex" flexDirection="row" sx={{mt:1}} >
              <Typography
                sx={{ fontSize: "16px" , fontWeight:"700"}}
              >
                {item.name}
              </Typography>
              <Typography sx={{ fontSize: "15px", marginLeft: "auto" ,fontWeight:700}}>
                $ {item.amount}
              </Typography>
            </Box>
            <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center">
              <Typography sx={{ color: "#98A0AC", fontSize: "13px" }}>
                {item.Description}
              </Typography>
              <Typography
                sx={{
                  color: "#98A0AC",
                  fontSize: "20px",
                  marginLeft: "5px",
                  marginRight: "1px", 
                
                }}
              >
                {"\u2022"}
              </Typography>
              <Typography sx={{ color: "#98A0AC", fontSize: "13px" , marginLeft:"auto"}}>
                {item.feet} Sq.Ft
              </Typography>
            </Box>
            <Box display="flex" flexDirection="row"  alignItems="center" justifyContent="space-between" >
              <Box display="flex" flexDirection="row" gap={1}>
              <LocalHotelOutlinedIcon
                sx={{ color: "#98A0AC", fontSize: "19px"  }}
              />
              <Typography sx={{ color: "#98A0AC", fontSize: "15px" }}>
                {item.bed}
              </Typography>
              <Typography
                sx={{
                  color: "#98A0AC",
                  fontSize: "18px",
                  marginLeft: "15px",
                  marginRight: "10px"
                }}
              >
                {"\u2022"}
              </Typography>
              </Box>
              <Box display="flex" flexDirection="row" gap={1} justifyContent="center" alignItems="center">
              <LuBath style={{ color: "#98A0AC", fontSize: "17px" }} />
              <Typography sx={{ color: "#98A0AC", fontSize: "15px" }}>
                {item.bath}
              </Typography>
              <Typography
                sx={{
                  color: "#98A0AC",
                  fontSize: "20px",
                  marginLeft: "15px",
                  marginRight: "10px", 
                
                }}
              >
                {"\u2022"}
              </Typography>
              </Box>
              <Box display="flex" flexDirection="row" gap={1} justifyContent="center" alignItems="center">
              <IoMdHome style={{ color: "#98A0AC", fontSize: "18px" }} />
              <Typography sx={{ color: "#98A0AC", fontSize: "17px" }}>
                {item.home}
              </Typography>
              </Box>
            </Box>
          </CardContent>
          <CardActions>
    <Box display="flex" justifyContent="center" width="100%"sx={{m:0,mt:-1.5,mb:-1.5}}>
      <Button
        aria-describedby={id}
        size="small"
        sx={{ fontSize: "15px", fontWeight: "500" ,textTransform: 'none' }}
        onClick={handleClick}
      >
        <AddRoundedIcon sx={{fontWeight:"500", fontSize:"20px"}}/> Customize
      </Button>
      <Popper
        id={id}
        open={open}
        anchorEl={anchorEl}
        placement="right" 
      >
        <ClickAwayListener onClickAway={handleClosePopover}>
        <Paper>
          <List sx={{padding:0, margin:0, fontFamily:'Nunito Sans',fontSize:"13px",cursor:"pointer"}}>
            <ListItem onClick={() => handleOpenComponent("Pricing")}>Add Pricing Component</ListItem>
            <Divider sx={{marginInline:"6px"}}/>
            <ListItem onClick={() => handleOpenComponent("Amenities")}>Add Amenities</ListItem>
            <Divider sx={{marginInline:"6px"}}/>
            <ListItem onClick={() => handleOpenComponent("Utilities")}>Add Utilities</ListItem>
            <Divider sx={{marginInline:"6px"}}/>
            <ListItem onClick={() => handleOpenComponent("Discount")}>Add Discount</ListItem>
            <Divider sx={{marginInline:"6px"}}/>
            <ListItem onClick={() => handleOpenComponent("Remove")}>Remove Component</ListItem>
          </List>
        </Paper>
        </ClickAwayListener>
      </Popper>
      {openComponent === "Pricing" && (<Pricing  open={openComponent === "Pricing"} onClose={handleCloseComponent}/>)}
      {openComponent === "Amenities" && (<Amentities open={openComponent === "Amenities"} onClose={handleCloseComponent}/>)}

    </Box>
  </CardActions>
        </Card>
      ))}
    </Box>
   
  );
};

export default MiddleContent;
