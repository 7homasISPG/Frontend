// frontend/src/App.js
import React from 'react';
import { Box, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import TopBar from './components/TopBar';
import SideBar from './components/SideBar';
import ChatInterface from './components/ChatInterface2'; // Import the new main component

const theme = createTheme({
    palette: {
        background: {
            default: '#f7f9fc'
        },
        primary: {
            main: '#3f51b5',
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    borderRadius: '8px',
                }
            }
        }
    }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <TopBar />
        <SideBar />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            bgcolor: 'background.default',
            p: 3,
            mt: 8, // Margin top to be below the AppBar
          }}
        >
          <ChatInterface />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;