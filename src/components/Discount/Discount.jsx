import { 
  Box, 
  Divider, 
  Grid, 
  List, 
  ListItem, 
  ListItemText, 
  Typography, 
  Button, 
  Dialog, 
  DialogContent, 
  DialogTitle, 
  Grid2
} from '@mui/material';
import PropertyDetails from '../PropertyDetails/PropertyDetails.jsx';
import { CloseOutlined } from '@mui/icons-material';
import { useState } from 'react';

const Discount = () => {
  const [open, setOpen] = useState(true); 

  const handleClose = () => {
    setOpen(false); 
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="md"  fullWidth sx={{scrollbarWidth:'none',msScrollbarWidth:'none',fontFamily:'Nunito Sans',height:'100vh'}}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 20px' }}>
      <DialogTitle>Unit Details</DialogTitle>
      <CloseOutlined onClick={handleClose} />
      </Box>
      <Divider sx={{mt:-2,mb:-1}} />
      <DialogContent sx={{overflowY:'auto',scrollbarWidth:'none',msScrollbarWidth:'none',fontFamily:'Nunito Sans'}}>
        <Box display={'flex'}>
          <PropertyDetails />
          <Box sx={{ paddingLeft: 2 ,flexGrow: 1,backgroundColor:'#F8F9FB',pt:'1rem'}}>
            <Typography variant="h6" gutterBottom>
              UNIT PRICING DETAILS
            </Typography>
            <List style={{ mb:19}}> 
  {["Bill Name Here", "Bill Name Here","Bill Name Here", "Bill Name Here"].map(
    (item, index) => (
      <ListItem key={index} divider style={{ padding: '4px 16px' }}> 
        <ListItemText primary={item} style={{ fontSize: '0.875rem' }} /> {/* Reduce font size */}
        <ListItemText primary="$1,000" style={{ textAlign: "right", fontSize: '0.875rem' }} /> {/* Reduce font size */}
      </ListItem>
    )
  )}
</List>

            <Grid2 container justifyContent="space-between" style={{ padding: "10px 0",marginLeft:'0rem' ,backgroundColor:'#E4E8EE',paddingLeft:'2rem',borderRadius:'5px',alignItems:'center'}}>
              <Typography variant="body1">Final Total</Typography>
              <Typography variant="h6"sx={{mr:'3rem'}}>$1,200</Typography>
            </Grid2>

            <Divider style={{ margin: "10px 0" }} />

            <Button variant="contained" color="primary" sx={{ width: '100%' }}>
               Update & Save
            </Button>

          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default Discount;