import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const CologneCard = ({ name, brand, price }) => (
  <Box
    style={{
      width: '150px',
      padding: '1rem',
      backgroundColor: '#fff',
      borderRadius: '16px',
      boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
      textAlign: 'center'
    }}
  >
    <Box height="100px" style={{ backgroundColor: '#f0f0f0', borderRadius: '8px' }} />
    <Typography variant="subtitle1" mt={1} style={{ fontWeight: 'bold', color: '#333' }}>{name}</Typography>
    <Typography variant="body2" color="textSecondary">{brand}</Typography>
    <Typography variant="body2" mt={1} style={{ fontWeight: 'bold' }}>${price}</Typography>
    <IconButton>
      <AddIcon style={{ color: '#9e9e9e' }} />
    </IconButton>
  </Box>
);

const BookmarkedCologne = ({ name, brand, price }) => (
  <Box
    style={{
      width: '100px',
      padding: '0.5rem',
      backgroundColor: '#fff',
      borderRadius: '16px',
      boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
      textAlign: 'center'
    }}
  >
    <Box height="50px" style={{ backgroundColor: '#f0f0f0', borderRadius: '8px' }} />
    <Typography variant="subtitle2" mt={1} style={{ fontWeight: 'bold', color: '#333' }}>{name}</Typography>
    <Typography variant="caption" color="textSecondary">{brand}</Typography>
    <Typography variant="caption" style={{ fontWeight: 'bold' }}>${price}</Typography>
  </Box>
);

export { CologneCard, BookmarkedCologne };
