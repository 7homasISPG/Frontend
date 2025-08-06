// frontend/src/components/CardScrollView.js

import React from 'react';
import { Box, Paper, Typography, Chip, SvgIcon } from '@mui/material';
import { DirectionsCar, AirportShuttle } from '@mui/icons-material'; // AirportShuttle can be a good limo icon

// Helper to map backend icon names to MUI icons
const getIcon = (iconName) => {
    switch (iconName?.toLowerCase()) {
        case 'car': return <DirectionsCar />;
        case 'limo': return <AirportShuttle />;
        // Add other icons as needed
        default: return <DirectionsCar />;
    }
};

const CardScrollView = ({ cards, onCardClick }) => {
    if (!cards || cards.length === 0) return null;

    return (
        <Box 
            sx={{
                display: 'flex',
                overflowX: 'auto', // This enables horizontal scrolling
                gap: 2,
                p: 2,
                // Hide scrollbar for a cleaner look
                '&::-webkit-scrollbar': { display: 'none' },
                scrollbarWidth: 'none',
            }}
        >
            {cards.map((card, index) => (
                <Paper
                    key={index}
                    elevation={2}
                    onClick={() => onCardClick(`Tell me more about ${card.title}`)}
                    sx={{
                        p: 2,
                        borderRadius: '16px',
                        minWidth: '280px', // Set a minimum width for each card
                        cursor: 'pointer',
                        transition: 'box-shadow 0.2s',
                        '&:hover': { boxShadow: 6 }
                    }}
                >
                    <SvgIcon component="div" sx={{ fontSize: '2rem', mb: 1, color: 'text.secondary' }}>
                        {getIcon(card.icon_name)}
                    </SvgIcon>
                    <Typography variant="h6" fontWeight="bold" gutterBottom>{card.title}</Typography>
                    <Typography variant="body2" color="text.secondary">{card.description}</Typography>
                    {card.link && <Chip label={card.link} size="small" sx={{ mt: 2, cursor: 'pointer' }} onClick={(e) => { e.stopPropagation(); window.open(card.link, '_blank'); }} />}
                </Paper>
            ))}
        </Box>
    );
};

export default CardScrollView;