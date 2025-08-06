// frontend/src/HomePage.js

import React from 'react';
import { Box } from '@mui/material';
import Chat from './Chat'; // We will render the Chat component inside
// You can re-add the AIGlobe here if you want the globe background
// import AIGlobe from './AIGlobe'; 

const HomePage = () => {
    return (
        <Box sx={{
            width: '100vw',
            height: '100vh',
            overflowY: 'auto', // Allow scrolling if content is long
            position: 'relative',
            background: 'radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%)', // Dark background
            display: 'flex',
            alignItems: 'flex-start', // Align chat to the top
            justifyContent: 'center',
            py: 4 // Add some vertical padding
        }}>
            {/* Optional: Add the globe back here if desired */}
            {/* <Box sx={{ position: 'absolute', top: 0, left: 0, zIndex: 0, opacity: 0.5 }}><AIGlobe /></Box> */}

            {/* The Chat component will now be rendered on top of this dark background */}
            <Chat />
        </Box>
    );
};

export default HomePage;