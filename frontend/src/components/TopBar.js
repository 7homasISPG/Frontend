// frontend/src/components/TopBar.js

import React from 'react';
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { Apps } from '@mui/icons-material'; // Import the Apps icon

const TopBar = () => {
  return (
    <AppBar 
      position="fixed" 
      color="default" 
      elevation={0} // The reference design has no shadow
      sx={{ 
        bgcolor: 'white', 
        zIndex: (theme) => theme.zIndex.drawer + 1,
        borderBottom: '1px solid #e0e0e0' // A subtle bottom border
      }}
    >
      <Toolbar>
        
        {/* Logo on the far left */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img 
            src="/First_Drive_logo.png" // Path to the logo in the 'public' folder
            alt="First_Drive Centre Logo" 
            style={{ height: '40px' }}
          />
        </Box>

        {/* This Box will grow and push the other items to the sides */}
        <Box sx={{ flexGrow: 1 }} />

        {/* Centered Navigation Links */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
          <Button 
            startIcon={<Apps />}
            sx={{ 
              color: 'primary.main', // Use theme's primary color
              fontWeight: 'bold',
              mx: 1
            }}
          >
            AI Assistance
          </Button>
          <Button sx={{ color: 'text.secondary', mx: 1 }}>All Courses</Button>
          <Button sx={{ color: 'text.secondary', mx: 1 }}>Training Courses</Button>
          <Button sx={{ color: 'text.secondary', mx: 1 }}>About us</Button>
          <Button sx={{ color: 'text.secondary', mx: 1 }}>Safety & Awareness</Button>
          <Button sx={{ color: 'text.secondary', mx: 1 }}>Careers</Button>
          <Button sx={{ color: 'text.secondary', mx: 1 }}>Student Login</Button>
          <Button sx={{ color: 'text.secondary', mx: 1 }}>Find Us</Button>
        </Box>
        
        {/* This Box will grow again, pushing the login/signup to the far right */}
        <Box sx={{ flexGrow: 1 }} />

        {/* Right-aligned Action Buttons */}
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Button 
            variant="contained" 
            sx={{ 
              mr: 1, 
              borderRadius: '20px', // Pill shape
              boxShadow: 'none' // Remove default shadow for a flatter look
            }}
          >
            Login
          </Button>
          <Button 
            variant="outlined"
            sx={{
              borderRadius: '20px' // Pill shape
            }}
          >
            Sign up
          </Button>
        </Box>

      </Toolbar>
    </AppBar>
  );
};

export default TopBar;