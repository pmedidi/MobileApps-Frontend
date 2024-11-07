import React from 'react';
import { Container, Typography, Box, IconButton, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { CologneCard, BookmarkedCologne } from './components/CologneCard';

const App = () => {
  return (
    <Container style={{ padding: '1rem', backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      {/* Header */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <IconButton>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" style={{ fontWeight: 'bold', color: '#000' }}>Scent Search</Typography>

        <IconButton>
          <AccountCircleIcon />
        </IconButton>
      </Box>

      {/* Search Bar */}
      <Box display="flex" alignItems="center" mt={2} mb={3} p={1} style={{ backgroundColor: '#e0e0e0', borderRadius: '12px' }}>
        <SearchIcon style={{ color: '#9e9e9e' }} />
        <InputBase placeholder="Search..." style={{ marginLeft: '8px', flex: 1, color: '#333' }} />
      </Box>

      {/* Explore Section */}
      <Typography variant="h6" gutterBottom style={{ fontWeight: 'bold', color: '#333' }}>
        Explore
      </Typography>
      <Box className="scroll-container">
        <CologneCard name="Bleu De Chanel" brand="Chanel" price={100} />
        <CologneCard name="No5 Paris" brand="Chanel" price={200} />
      </Box>

      {/* Bookmarked Section */}
      <Typography variant="h6" gutterBottom mt={4} style={{ fontWeight: 'bold', color: '#333' }}>
        Bookmarked
      </Typography>
      <Box className="scroll-container">
        <BookmarkedCologne name="Remarkable People" brand="Etat Libre d'Orange" price={50} />
      </Box>
    </Container>
  );
};

export default App;
