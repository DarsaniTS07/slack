import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { useState } from 'react';
import PrimaryComponent from '../Primary/Primary'; // Import your PrimaryComponent

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  boxShadow: 'none',
  maxWidth: 900,
  height: 35,
  justifyContent: 'center',
  alignItems: 'center',
  justifyItems: 'center',
  borderRadius: 5,
}));

const itemsData = [
  { message: 'Primary', backgroundColor: '#FEEAEA80', color: '#B3776D' },
  { message: 'Secondary', backgroundColor: '#EDE4FE80', color: '#896DB3' },
  { message: 'One time Charges', backgroundColor: '#DBF0F180', color: '#6DAFB3' },
  { message: 'Refundables', backgroundColor: '#E4EDFF80', color: '#6D80B3' },
  { message: 'Inventory Item', backgroundColor: '#FFFAD880', color: '#B3A16D' },
  { message: 'Parking Slot', backgroundColor: '#FEEAEA80', color: '#B3776D' },
];

const avatarColors = ['#B3776D', '#896DB3', '#6DAFB3', '#6D80B3', '#B3A16D', '#B3776D'];

export default function PricingTable() {
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState('');

  const handleOpen = (message) => {
    setSelectedItem(message);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const formatIndex = (index) => (index < 9 ? `0${index + 1}` : `${index + 1}`);

  return (
    <Box
      sx={{
        display: 'block',
        height: '71vh',
        width: '26rem',
        overflowY: 'auto', 
        bgcolor: 'white',
        borderRadius: 2,
        boxShadow: 3,
        p: 2, 
      }}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ borderBottom: '1px solid lightgrey', pb: 1 }}>
        <Typography variant="h6">Pricing Table</Typography>
        <IconButton aria-label="close" onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </Stack>
      <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 1, mt: 1 }}>
        {itemsData.map((item, index) => (
          <Item
            key={index}
            sx={{ my: 1, mx: 'auto', p: 2, backgroundColor: item.backgroundColor, pt: '1rem', width: '25rem', ml: -3 }}
            onClick={() => handleOpen(item.message)} // Open the modal on item click
          >
            <Stack spacing={2} direction="row" sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
              <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
                <Avatar sx={{ bgcolor: avatarColors[index % avatarColors.length], height: '1.5rem', width: '1.5rem', fontSize: '0.75rem' }}>
                  {formatIndex(index)}
                </Avatar>
                <Typography noWrap sx={{ color: item.color }}>{item.message}</Typography>
              </Stack>
              <Stack direction="row" spacing={1} sx={{ color: 'lightgrey' }}>
                <InfoOutlinedIcon />
                <IconButton sx={{ padding: "0px" }}>
                  <ArrowForwardIosOutlinedIcon sx={{ marginRight: "15px", marginLeft: "10px" }} />
                </IconButton>
              </Stack>
            </Stack>
          </Item>
        ))}
      </Box>

      {/* PrimaryComponent Modal */}
      {open && (
        <PrimaryComponent open={open} onClose={handleClose} title={selectedItem} />
      )}
    </Box>
  );
}
