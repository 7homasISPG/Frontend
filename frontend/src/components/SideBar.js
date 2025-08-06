import React from 'react';
import { Drawer, List, ListItem, ListItemButton, ListItemIcon, Tooltip, Avatar } from '@mui/material';
import { 
    WidgetsOutlined, 
    QuestionAnswerOutlined,
    CalendarTodayOutlined,
    PeopleAltOutlined
} from '@mui/icons-material';

const drawerWidth = 80;

// The menu items now have a unique 'id' to identify them.
const menuItems = [
    { id: 'explore', text: 'Explore', icon: <WidgetsOutlined /> },
    { id: 'chat', text: 'Messages', icon: <QuestionAnswerOutlined /> },
    // Add other views if you have them
    // { id: 'activities', text: 'Activities', icon: <CalendarTodayOutlined /> },
    // { id: 'interactions', text: 'Interactions', icon: <PeopleAltOutlined /> },
];

// --- THIS IS THE KEY CHANGE ---
// The component now takes props to control its state from the outside.
const SideBar = ({ activeView, onViewChange }) => {
    return (
        <Drawer
            variant="permanent"
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { 
                    width: drawerWidth, 
                    boxSizing: 'border-box', 
                    borderRight: 'none',
                    bgcolor: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    py: 2
                },
            }}
        >
            <Tooltip title="Your Profile" placement="right">
                <Avatar sx={{ width: 56, height: 56, mb: 4, bgcolor: '#ede7f6', color: '#5e35b1', fontSize: '1.5rem' }}>A</Avatar>
            </Tooltip>
            
            <List>
                {menuItems.map((item) => (
                    <Tooltip title={item.text} placement="right" key={item.id}>
                        <ListItem disablePadding sx={{ display: 'block', my: 1 }}>
                            <ListItemButton
                                // The 'selected' prop is now driven by the activeView prop
                                selected={activeView === item.id}
                                // When clicked, it calls the function passed down from the parent
                                onClick={() => onViewChange(item.id)}
                                sx={{
                                    minHeight: 48,
                                    justifyContent: 'center',
                                    px: 2.5,
                                    borderRadius: '12px',
                                    '&.Mui-selected': {
                                        color: 'primary.main',
                                        bgcolor: 'rgba(63, 81, 181, 0.08)',
                                    },
                                    '&:hover': {
                                        bgcolor: 'rgba(0, 0, 0, 0.04)',
                                    },
                                    color: 'grey.600'
                                }}
                            >
                                <ListItemIcon sx={{ minWidth: 0, justifyContent: 'center', color: 'inherit' }}>
                                    {item.icon}
                                </ListItemIcon>
                            </ListItemButton>
                        </ListItem>
                    </Tooltip>
                ))}
            </List>
        </Drawer>
    );
};

export default SideBar;