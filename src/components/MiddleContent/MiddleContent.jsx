import { Box,Button,Card,CardActions,CardContent,CardMedia,
  Dialog,Popover,Typography,} from "@mui/material";
import React, { useState } from "react";
import place from "../../assets/Home.jpeg";
import LocalHotelOutlinedIcon from "@mui/icons-material/LocalHotelOutlined";
import { LuBath } from "react-icons/lu";
import { IoMdHome } from "react-icons/io";
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import Pricing from "../Pricing/Pricing.jsx";
import Amenities from "../Amenities/Amenities.jsx";
import Discount from "../Discount/Discount.jsx";
import RemoveComponent from "../RemoveComponent/RemoveComponent.jsx";
import AddUtilities from "../Utilities/Utilities.jsx";

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
          <CardMedia component="img" alt="Home" height="115" image={place}  />
          <CardContent sx={{padding:'0'}}>
            <Box display="flex" flexDirection="row" sx={{mt:1}} >
              <Typography
                
                variant="p"
                component="div"
                sx={{ fontSize: "16px" , fontWeight:"600"}}
              >
                {item.name}
              </Typography>
              <Typography sx={{ fontSize: "15px", marginLeft: "auto" }}>
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
                  marginLeft: "10px",
                  marginRight: "1px", 
                
                }}
              >
                •
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
                •
              </Typography>
              </Box>
              <Box display="flex" flexDirection="row" gap={1}>
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
                •
              </Typography>
              </Box>
              <Box display="flex" flexDirection="row" gap={1}>
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
    </Box>
  </CardActions>
  
  <Popover
    id={id}
    open={open}
    anchorEl={anchorEl}
    onClose={handleClosePopover}
    anchorOrigin={{
      vertical: "center",
      horizontal: "right",
    }}
  >
    <Typography onClick={() =>handleOpenComponent("Pricing")}
    sx={{ p: 1, fontSize: "13px", borderBottom: "1px solid #98A0AC", m: 1 }}>
      Add Pricing Component
    </Typography>
    <Typography onClick={() => handleOpenComponent("Amenities")}
    sx={{ p: 1, fontSize: "13px", borderBottom: "1px solid #98A0AC", m: 1 }}>
      Add Amenities
    </Typography>
    <Typography onClick={() => handleOpenComponent("Utilities")}
    sx={{ p: 1, fontSize: "13px", borderBottom: "1px solid #98A0AC", m: 1 }}>
      Add Utilities
    </Typography>
    <Typography onClick={() => handleOpenComponent("Discount")}
    sx={{ p: 1, fontSize: "13px", borderBottom: "1px solid #98A0AC", m: 1 }}>
      Add Discount
    </Typography>
    <Typography onClick={() => handleOpenComponent("Remove")}
     sx={{ p: 1, fontSize: "13px", m: 1 }}>Remove Component</Typography>
  </Popover>
  <Dialog open={Boolean(openComponent)} onClose={handleCloseComponent}
  slotProps={{
    backdrop: {
      style: {
        backgroundColor: 'rgba(0, 0, 0, 0.2)', 
      },
    },
  }}>
            {openComponent === "Pricing" && <Pricing />}
            {openComponent === "Amenities" && <Amenities/>}
            {openComponent === "Utilities" && <AddUtilities />}
            {openComponent === "Discount" && <Discount />}
            {openComponent === "Remove" && <RemoveComponent />}
          </Dialog>
        </Card>
      ))}
    </Box>
   
  );
};

export default MiddleContent;
