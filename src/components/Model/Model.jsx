// Modal.jsx
import React from 'react';
import { Box, Modal, Typography, Button } from '@mui/material';
import MiddleContent from '../MiddleContent/MiddleContent';

const CustomModal = ({ open, onClose, title }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box 
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          borderRadius: '10px',
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography id="modal-title" variant="h6" component="h2">
          {title}
        </Typography>
        <Typography id="modal-description" sx={{ mt: 2 }}>
          {`This is the ${title} modal.`}
        </Typography>
        <Box mt={3} textAlign="center">
          <Button variant="contained" onClick={onClose}>
            Close
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default CustomModal;
