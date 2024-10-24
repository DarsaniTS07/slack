import { Box, Button, Grid2, Typography } from "@mui/material";
import React from "react";
import LeadDetails from "../LeadDetails/LeadDetails";
import UnitDetails from "../UnitDetails/UnitDetails";
import Quotation from "../Quotation/Quotation";
import CustomSeparator from "../Header/Breadcrumbs";

const Container = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#FFFFFF",
        height: "36.8rem",
        margin: "23px",
        borderRadius: "13px",
      }}
    >
      <Box borderBottom="1px solid #E4E8EE" sx={{ padding: "13px 25px" }}>
<CustomSeparator/>
      </Box>
      <Grid2 container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid2 size={3.7}>
          <LeadDetails/>
        </Grid2>
        <Grid2 size={4.6}>
          <UnitDetails/>
        </Grid2>
        <Grid2 size={3.7}>
        <Quotation/>
        </Grid2>
      </Grid2>
      <Box display="flex" flexDirection="row">
        <Button variant="outlined" sx={{textTransform:"none" , color:"#091B29", fontWeight:"600", borderColor:"#E4E8EE", padding:"0px 12px !important",  ml:"1.3rem",mt:"7px", borderRadius:"7px",height:'2.2rem'}} > Previous</Button>
        <Box marginLeft="auto">
        <Button variant="outlined" sx={{textTransform:"none" , color:"#091B29", fontWeight:"600", borderColor:"#E4E8EE", padding:"5px 12px", ml:"2rem",mt:'7px', borderRadius:"7px"}} > Cancel</Button>
        <Button variant="contained" sx={{textTransform:"none" , color:"#FFFFFF", fontWeight:"600", borderColor:"#E4E8EE", padding:"5px 12px", ml:"2rem", mt:'7px',mr:'1.4rem',borderRadius:"7px"}} > Create Quotation</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Container;
