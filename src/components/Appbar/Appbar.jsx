import { AppBar, Avatar, Badge, Box, Divider, Toolbar, Typography } from "@mui/material";
import React from "react";
import logo from "/src/assets/Logo.png";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import profile from "/src/assets/Profile.jpeg";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Appbar = () => {
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    width: "100%",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    },
  }));

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: "#1C1C1C",
          height: "3.37rem",
          display: "flex",
          justifyContent: "center",
          padding:0,
        }}
      >
        <Toolbar sx={{ display: "flex", alignItems: "center",padding: 0, justifyContent: { xs: "space-between", sm: "flex-start" }}}>
          <Box sx={{display:"flex", alignItems:"center"}}>
          <Box>
            <img src={logo} alt="Logo" />
          </Box>
          <Divider orientation="vertical" flexItem sx={{ margin: "0 0.5rem",borderColor: "#98A0AC", height:"20px"}} />
          <Typography sx={{ fontSize: "12px"}}>
            PROPERTY MANAGEMENT SOLUTION
          </Typography>
          </Box>
          <Box ml="6rem"
          sx={{display: { xs: "none", sm: "flex" }, flexGrow: 1}}>
          <Search
            sx={{ width: { xs: "15.5rem", sm: "22.87rem" }, marginLeft: "auto" }}
          >
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              sx={{fontSize:"15px"}}
            />
          </Search>
          </Box>
          <Box display="flex" alignItems="center"  justifyContent="center" ml="auto">
          <Badge
            color="primary"
            overlap="circular"
            badgeContent=" "
            variant="dot"
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            sx={{
              "& .MuiBadge-dot": {
                top: "7px",
                right: "7px",
              },
            }}
          >
            <NotificationsNoneIcon />
          </Badge>
          <Divider orientation="vertical" flexItem sx={{ margin: "0 0.5rem",borderColor: "#98A0AC", height:"20px", marginTop:"10px"}} />
          <Box display="flex" alignItems="center">
          <Avatar alt="Remy Sharp" src={profile} sx={{width:"32px", height:"32px",fontSize:"18px",marginRight: "0.5rem" }} />
          <Box>
            <Typography sx={{fontSize:"15px"}}>Bala Ganesh</Typography>
            <Typography sx={{color:"#98A0AC", fontSize:"12px"}}>Super admin</Typography>
          </Box>
<KeyboardArrowDownIcon sx={{ marginLeft: "0.5rem"}} />
          </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Appbar;
