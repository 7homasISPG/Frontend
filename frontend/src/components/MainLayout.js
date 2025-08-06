import React, { useState } from 'react';
import { Box } from '@mui/material';

// Import your components
import SideBar from './SideBar';
import ChatInterface from './ChatInterface';

const MainLayout = () => {
    // State to manage the current view. 'explore' is the default.
    const [activeView, setActiveView] = useState('explore');

    // This function will be passed to the SideBar
    const handleViewChange = (viewId) => {
        setActiveView(viewId);
    };

    return (
        <Box sx={{ display: 'flex', height: '100vh', bgcolor: '#f5f5f5' }}>
            <SideBar activeView={activeView} onViewChange={handleViewChange} />
            
            <Box component="main" sx={{ flexGrow: 1, p: 3, overflowY: 'auto' }}>
                {/* --- CONDITIONAL RENDERING --- */}
                {/* Here we decide which component to show based on the activeView state */}
                
                {/* If the active view is 'explore' or 'chat', we show the ChatInterface.
                    We pass a prop to tell ChatInterface whether to start in conversation mode or not.
                */}
                {(activeView === 'explore' || activeView === 'chat') && (
                    <ChatInterface
                        // The `key` prop is a powerful React trick. When the key changes, React will
                        // completely re-mount the component, resetting its internal state.
                        // This is exactly what we want when switching from an active chat back to the explore page.
                        key={activeView}
                        // We tell the ChatInterface to start in "conversation" mode only if the view is 'chat'.
                        startInConversation={activeView === 'chat'}
                    />
                )}

                {/* You can add other views here later */}
                {/* {activeView === 'activities' && <ActivitiesPage />} */}
            </Box>
        </Box>
    );
};

export default MainLayout;