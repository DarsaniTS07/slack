import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import React from 'react';

const Quotation = () => {
  return (
    <Box>
      <Typography sx={{ marginTop: "15px", fontSize: "18px", fontWeight: "bold" }}>Quotation Summary</Typography>
      <Box
        border="1px solid"
        height="26.6rem"
        color="#F5F7FA"
        sx={{
          marginRight: "22px",
          marginTop: "10px",
          marginBottom: "10px",
          borderRadius: "7px",
          backgroundColor: "#F5F7FA"
        }}
      >
        <TableContainer component={Paper} sx={{ backgroundColor: '#F5F7FA', boxShadow: 'none' }}>
          <Table aria-label="quotation-table">
            <TableHead >
              <TableRow>
                <TableCell><Typography sx={{ fontWeight: 'regular', fontSize:'13px',color:"#98A0AC" }}>DESCRIPTION</Typography></TableCell>
                <TableCell align="right"><Typography sx={{ fontWeight: '500' , fontSize:'13px', color:"#98A0AC"}}>QTY</Typography></TableCell>
                <TableCell align="right"><Typography sx={{ fontWeight: 'regular', fontSize:'13px' ,color:"#98A0AC"}}>AMOUNT</Typography></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell component="th" scope="row" sx={{padding:'10px 18px', color:"#4E5A6B"}}>Total Amount</TableCell>
                <TableCell align="right" sx={{ padding: "10px 18px", color:"#4E5A6B" }}>3</TableCell>
                <TableCell align="right" sx={{ padding: "10px 18px" , color:"#4E5A6B", fontWeight:"600"}}>$3700.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row" sx={{padding:'10px 18px', color:"#4E5A6B"}}>Total Discount</TableCell>
                <TableCell align="right" sx={{ padding: "10px 18px", color:"#4E5A6B" }}>10%</TableCell>
                <TableCell align="right" sx={{ padding: "10px 18px", color:"#4E5A6B" }}>-$100.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row" sx={{padding:'10px 18px', color:"#4E5A6B"}}>Total Refundable</TableCell>
                <TableCell align="right" sx={{ padding: "10px 18px", color:"#4E5A6B" }}>0%</TableCell>
                <TableCell align="right" sx={{ padding: "10px 18px" , color:"#4E5A6B", fontWeight:"600"}}>$0</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row" sx={{padding:'10px 18px', color:"#4E5A6B"}}>Total Tax</TableCell>
                <TableCell align="right" sx={{ padding: "10px 18px", color:"#4E5A6B" }}>18%</TableCell>
                <TableCell align="right" sx={{ padding: "10px 18px", color:"#4E5A6B", fontWeight:"600" }}>$648.00</TableCell>
              </TableRow>
              <Box sx={{height:"11rem"}}></Box>
              <TableRow sx={{borderTop:"1px solid #98A0AC"}}>
                <TableCell component="th" scope="row" sx={{padding:'10px 18px', color:"#4E5A6B", fontWeight:"600", fontSize:"15px"}}>Quote Amount</TableCell>
                <TableCell align="right" sx={{ padding: "10px 18px", color:"#4E5A6B" }}></TableCell>
                <TableCell align="right" sx={{ padding: "10px 18px", color:"#4E5A6B", fontWeight:"600" }}>$4148.00</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default Quotation;
