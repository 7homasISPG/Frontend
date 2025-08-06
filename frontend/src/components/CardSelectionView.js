// frontend/src/components/CardSelectionView.js
import React from 'react';
import { Box, Grid, Paper, Typography, Chip, SvgIcon } from '@mui/material';
import { DirectionsCar, TwoWheeler, DirectionsBus, LocalShipping, Forklift } from '@mui/icons-material';

// A helper function to map icon names from the backend to actual MUI icons
const getIcon = (iconName) => {
    // ... (rest of the function is correct)
    switch (iconName?.toLowerCase()) {
        case 'car':
            return <DirectionsCar />;
        case 'motorcycle':
            return <TwoWheeler />;
        case 'bus':
            return <DirectionsBus />;
        case 'truck':
            return <LocalShipping />;
        case 'forklift':
            return <Forklift />;
        default:
            return null;
    }
};

const CardSelectionView = ({ data, onCardClick }) => {
    if (!data || data.length === 0) return null;

    return (
        <Grid container spacing={2} sx={{ p: 2 }}>
            {data.map((item, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                    <Paper
                        elevation={3}
                        // --- THIS IS THE FIX ---
                        onClick={() => onCardClick(`Tell me more about ${item.title}`)}
                        // --- END OF FIX ---
                        sx={{
                            p: 2.5,
                            borderRadius: '16px',
                            height: '100%',
                            cursor: 'pointer',
                            transition: 'transform 0.2s, box-shadow 0.2s',
                            '&:hover': {
                                transform: 'translateY(-4px)',
                                boxShadow: 6
                            }
                        }}
                    >
                        {/* ... The rest of your component remains the same ... */}
                        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                            {getIcon(item.icon_name) && (
                                <SvgIcon component="div" sx={{ fontSize: '2.5rem', mb: 2, color: 'text.secondary' }}>
                                    {getIcon(item.icon_name)}
                                </SvgIcon>
                            )}
                            <Typography variant="h6" fontWeight="bold" gutterBottom>{item.title}</Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ flexGrow: 1 }}>{item.description}</Typography>
                            {item.link && (
                                <Chip label={item.link} size="small" sx={{ mt: 2, alignSelf: 'flex-start' }} />
                            )}
                        </Box>
                    </Paper>
                </Grid>
            ))}
        </Grid>
    );
};

export default CardSelectionView;