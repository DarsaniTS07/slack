import { Box, Grid2, Typography } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import React from "react";
import Lead_Details from "../Lead_Details/Lead_Details";
import Unit_Details from "../Unit_Details/Unit_Details";
import Quotation from "../Quotation/Quotation";
import CustomSeparator from "../Breadcrumbs/Breadcrumbs";

const Container = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#FFFFFF",
        height: "37rem",
        margin: "23px",
        borderRadius: "13px",
      }}
    >
      <Box borderBottom="1px solid #E4E8EE" sx={{ padding: "13px 25px" }}>
<CustomSeparator/>
      </Box>
      <Grid2 container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid2 size={3.7}>
          <Lead_Details/>
        </Grid2>
        <Grid2 size={4.6}>
          <Unit_Details/>
        </Grid2>
        <Grid2 size={3.7}>
        <Quotation/>
        </Grid2>
      </Grid2>
      <Box>
        hi
      </Box>
    </Box>
  );
};

export default Container;
