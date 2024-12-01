import React from 'react';
import { Box, IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
 //push
const BottomNavigationBar = ({ view, handleNavigation, user, handleSignIn, handleSignOut }) => {
  return (
    <Box
      style={{
        position: 'fixed',
        bottom: 0,
        left: '24.5%',
        transform: 'translateX(-70%)', // Centers the bar horizontally
        width: '39%', // Matches the search bar's width
        backgroundColor: '#8a7cae', // Darker purple shade
        padding: '0.5rem 0',
        borderRadius: '20px 20px 0 0', // Curved top corners
        boxShadow: '0px -4px 10px rgba(0, 0, 0, 0.2)', // Shadow above the bar
        display: 'flex',
        justifyContent: 'space-around', // Even spacing between icons
        alignItems: 'center',
      }}
    >
      {/* Explore Icon */}
      <IconButton onClick={() => handleNavigation('explore')}>
        <HomeIcon style={{ color: view === 'explore' ? '#fff' : '#ccc' }} />
      </IconButton>

      {/* Bookmarks Icon */}
      <IconButton onClick={() => handleNavigation('bookmarks')}>
        <BookmarkIcon style={{ color: view === 'bookmarks' ? '#fff' : '#ccc' }} />
      </IconButton>

      {/* Account Icon */}
      <IconButton onClick={user ? handleSignOut : handleSignIn}>
        <AccountCircleIcon style={{ color: user ? '#fff' : '#ccc' }} />
      </IconButton>
    </Box>
  );
};

export default BottomNavigationBar;
