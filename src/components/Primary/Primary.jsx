import { Dialog, DialogTitle, DialogContent, IconButton, Button, ToggleButtonGroup, ToggleButton, Box, Typography, TextField, InputAdornment, MenuItem } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from 'react';

export default function PrimaryComponent({ open, onClose, title }) {
  const [revenueType, setRevenueType] = useState('Lease');
  const [componentBasedOn, setComponentBasedOn] = useState('Amount');

  const handleRevenueChange = (event, newType) => setRevenueType(newType);
  const handleComponentBasedChange = (event, newValue) => setComponentBasedOn(newValue);

  const [isPrimary,setIsPrimary] = useState(false);

  const handlePriimary = () =>{
    setIsPrimary(true)
  }

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
            width: '28rem', 
          borderRadius: '12px',
          padding: '0.2rem',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        },
      }}
    >
      <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontWeight: 'bold', fontSize: '1.25rem', 
        marginBottom:"-13px" }}>
        {title} 
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent sx={{ paddingTop: '0rem' }}>
        <Box sx={{ paddingBottom: '0rem' }}>
          <Button
            
            variant="contained"
            sx={{
                width:"25rem",
              backgroundColor: '#FEEAEA80',
              color: '#B3776D',
              textTransform: 'none',
              fontWeight: '500',
              borderRadius: '8px',
              display: 'flex',
              justifyContent: 'space-between',
              padding: '0.5rem 0.5rem',
              marginBottom: '0.5rem',
          
            }}
          >
            {title} Component {/* Display the dynamic title in the button */}
            <IconButton size="small" sx={{ color: '#B3776D'}}>
              <CloseIcon sx={{marginLeft:"auto"}} />
            </IconButton>
          </Button>

          <Box display={'flex'}>
            <Box sx={{ marginBottom: '1.5rem', flex: 2 }}>
              <Typography variant="body2" sx={{ marginBottom: '0.5rem', fontWeight: 500 }}>
                Revenue Type
              </Typography>
              <ToggleButtonGroup
                value={revenueType}
                exclusive
                onChange={handleRevenueChange}
                sx={{
                  width: '100%',
                  '& .MuiToggleButton-root': {
                    borderRadius: '8px',
                    padding: '5px 9px',
                    textTransform: 'none',
                    fontWeight: '500',
                    borderColor: '#e0e0e0',
                    marginRight:"10px",
                    // flex: 1,
                    color: 'grey',
                  },
                  '& .Mui-selected': {
                    backgroundColor: '#5078E1',
                    color: '#fff',
                  },
                }}
              >
                <ToggleButton value="Lease">Lease</ToggleButton>
                <ToggleButton value="Sales">Sales</ToggleButton>
                <ToggleButton value="Manage">Manage</ToggleButton>
                <ToggleButton value="Stay">Stay</ToggleButton>
              </ToggleButtonGroup>
            
<Box display="flex" flexDirection="row" marginTop="10px" >
            <Box sx={{ flex: 1.5, marginBottom:'0.5rem'}}>
              <Typography variant="body2" sx={{ marginBottom: '0.5rem', fontWeight: 500, fontSize:"13px" }}>
                Pricing Component
              </Typography>
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                placeholder="Pricing Component"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <KeyboardArrowDownIcon />
                    </InputAdornment>
                  ),
                  sx: {
                    '& ::placeholder': {
                      fontWeight: 500,
                      fontSize: '0.9rem',
                    },
                  },
                }}
                sx={{ borderRadius: '8px' }}
              />
            </Box>
            <Box sx={{ marginBottom: '0.5rem', ml: '1.5rem', flex: 2 }}>
              <Typography variant="body2" sx={{ marginBottom: '0.5rem', fontWeight: 500 , fontSize:'13px'}}>
                Tax Group For Pricing Componet
              </Typography>
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                placeholder="GST"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <KeyboardArrowDownIcon />
                    </InputAdornment>
                  ),
                  sx: {
                    '& ::placeholder': {
                      fontWeight: 500,
                      fontSize: '0.9rem',
                    },
                  },
                }}
                sx={{ borderRadius: '8px' }}
              />
              </Box>

            </Box>
            <Typography variant="body2" sx={{ marginBottom: '0.5rem', fontWeight: 500 }}>
                Component Based On
              </Typography>
              <ToggleButtonGroup
                value={revenueType}
                exclusive
                onChange={handleRevenueChange}
                sx={{
                  width: '100%',
                  '& .MuiToggleButton-root': {
                    borderRadius: '8px',
                    padding: '5px 7px',
                    textTransform: 'none',
                    fontWeight: '500',
                    borderColor: '#e0e0e0',
                    color: 'grey',
                    marginRight:"10px"
                  },
                  '& .Mui-selected': {
                    backgroundColor: '#5078E1',
                    color: '#fff',
                  },
                }}
              >
                <ToggleButton value="Lease">Amount</ToggleButton>
                <ToggleButton value="Sales">Rental Value</ToggleButton>
                <ToggleButton value="Manage">%</ToggleButton>
              </ToggleButtonGroup>
            </Box>
            
            
          </Box>
          <Box sx={{ mt:"-10px"}}>
              <Typography variant="body2" sx={{ marginBottom: '0.5rem', fontWeight: 500 }}>
                Fixed Amount Value
              </Typography>
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                placeholder="200"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      $ / Monthly
                    </InputAdornment>
                  ),
                  sx: {
                    '& ::placeholder': {
                      fontWeight: 500,
                      fontSize: '0.9rem',
                    },
                  },
                }}
                sx={{ borderRadius: '8px' }}
              />
              <Box sx={{marginTop:"23px"}}>
              <Button variant='outlined' onClick={onClose} sx={{textTransform:"none"}}> Cancel</Button>
              <Button variant='contained' sx={{textTransform:"none", marginLeft:"110px"}}> Create Pricing Component</Button>
              </Box>
              </Box>

          {/* Add more content as needed */}
        </Box>
      </DialogContent>
    </Dialog>
  );
}
