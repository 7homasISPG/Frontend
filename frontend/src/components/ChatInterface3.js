// frontend/src/components/ChatInterface.js

import React, { useState, useRef, useEffect } from 'react';
import { Box, TextField, Paper, Typography, IconButton, Avatar, CircularProgress, Chip, Button, Grid } from '@mui/material';
import { Send, AttachFile, Mic, Article, Info, LocalOffer, LocationOn, ChevronLeft, ChevronRight, ArrowUpward } from '@mui/icons-material';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';

// Import View Components
import AnswerView from './AnswerView';
import TableView from './TableView';
import CardSelectionView from './CardSelectionView';

// --- Configuration ---
const API_ASK_URL = 'http://localhost:8000/api/ask';
const API_UPLOAD_URL = 'http://localhost:8000/api/upload';

const suggestionChips = [
    { label: 'Courses Information', icon: <Article fontSize="small" /> },
    { label: 'Know more about us', icon: <Info fontSize="small" /> },
    { label: 'Training Courses', icon: <Article fontSize="small" /> },
    { label: 'Offers', icon: <LocalOffer fontSize="small" /> },
    { label: 'Find Us', icon: <LocationOn fontSize="small" /> },
];

const faqGrid = [
    'Which license types do you offer?',
    'How do I switch from automatic to manual driving licence?',
    'What Light Motor Vehicle packages are available?',
];


const ChatInterface = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [conversationStarted, setConversationStarted] = useState(false);
    const fileInputRef = useRef(null);
    const messagesEndRef = useRef(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    // --- LIVE HANDLE SEND MESSAGE FUNCTION ---
    const handleSendMessage = async (query) => {
        if (!query.trim() || isLoading) return;
        if (!conversationStarted) setConversationStarted(true);

        const userMessage = { role: 'user', content: { text: query } };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        try {
            // No more mocking. Every query goes directly to the backend.
            console.log("Sending query to backend:", query);
            const response = await axios.post(API_ASK_URL, { query });
            const responseData = response.data;
            console.log("Received response from backend:", responseData);

            const assistantMessage = { role: 'assistant', content: responseData };
            setMessages(prev => [...prev, assistantMessage]);
        } catch (error) {
            console.error('Error fetching response:', error);
            const errorMessage = { role: 'assistant', content: { type: 'answer', text: 'Sorry, I encountered an error connecting to the backend. Please make sure it is running and there are no errors.' } };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleFileUpload = async (event) => { /* ... same as before ... */ };

    // --- RENDER DISPATCHER ---
    const renderMessageContent = (msg) => {
        if (msg.role === 'user' || msg.role === 'system') {
            return <Typography sx={{ p: 1.5, color: msg.role === 'user' ? 'white' : 'inherit' }}>{msg.content.text}</Typography>;
        }
        
        switch (msg.content?.type) {
          case 'table':
            return <TableView data={msg.content.data} />;
          case 'card_selection':
            return (
              <Box>
                <Typography variant="body1" sx={{ px: 2, pt: 2, pb: 1 }}>{msg.content.text}</Typography>
                <CardSelectionView cards={msg.content.data} onCardClick={handleSendMessage} />
              </Box>
            );
          case 'answer':
            return (
              <AnswerView
                content={msg.content}
                onCardClick={handleSendMessage}
              />
            );
          default:
            return <Typography sx={{ p: 1.5 }}>{msg.content?.text || 'Response format not recognized.'}</Typography>;
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        handleSendMessage(input);
    };

    // --- RENDER JSX ---
    return (
        <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <AnimatePresence mode="wait">
                {!conversationStarted ? (
                    <Box key="initial-wrapper" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', maxWidth: '768px', mx: 'auto' }}>
                        <motion.div key="initial-view" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} style={{ width: '100%' }}>
                            <Typography variant="h4" align="center" sx={{ my: 4 }}>What can I help with?</Typography>
                            
                            <Paper component="form" onSubmit={handleFormSubmit} elevation={2} sx={{ p: 1, border: '1px solid #e0e0e0', borderRadius: '20px', display: 'flex', flexDirection: 'column', mb: 4 }}>
                                <TextField fullWidth multiline rows={2} variant="standard" placeholder="Ask Anything" value={input} onChange={(e) => setInput(e.target.value)} InputProps={{ disableUnderline: true, sx: { padding: '10px' } }} />
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 1 }}>
                                    <Button startIcon={<AttachFile />} onClick={() => fileInputRef.current.click()} sx={{ borderRadius: '20px', textTransform: 'none', color: 'grey.700', bgcolor: '#f5f5f5' }}>Attach</Button>
                                    <input type="file" ref={fileInputRef} onChange={handleFileUpload} style={{ display: 'none' }} />
                                    <IconButton type="submit" sx={{ background: 'linear-gradient(45deg, #673ab7, #3f51b5)', color: 'white', '&:hover': { background: 'linear-gradient(45deg, #5e35b1, #3949ab)' } }} disabled={isLoading || !input.trim()}>
                                        {input.trim() ? <ArrowUpward /> : <Mic />}
                                    </IconButton>
                                </Box>
                            </Paper>
                            
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, mb: 4, flexWrap: 'nowrap' }}>
                                <IconButton size="small" disabled><ChevronLeft /></IconButton>
                                {suggestionChips.map(chip => <Chip key={chip.label} label={chip.label} icon={chip.icon} onClick={() => handleSendMessage(chip.label)} clickable sx={{ bgcolor: chip.label === 'Courses Information' ? 'rgba(63, 81, 181, 0.08)' : 'default' }} />)}
                                <IconButton size="small"><ChevronRight /></IconButton>
                            </Box>
                            <Grid container spacing={2}>
                                {faqGrid.map(question => <Grid item xs={12} sm={6} md={4} key={question}><Paper elevation={1} sx={{ p: 2, height: '100%', cursor: 'pointer', borderRadius: '12px', '&:hover': { boxShadow: 4 } }} onClick={() => handleSendMessage(question)}><Typography>{question}</Typography></Paper></Grid>)}
                            </Grid>
                        </motion.div>
                    </Box>
                ) : (
                    <motion.div key="chat-view" initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
                        <Box sx={{ flexGrow: 1, overflowY: 'auto', p: 2, width: '100%', maxWidth: '900px', mx: 'auto' }}>
                            {messages.map((msg, index) => (
                                <motion.div key={index} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                                    <Box sx={{ mb: 2, display: 'flex', justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start', alignItems: 'flex-start' }}>
                                        {msg.role === 'assistant' && <Avatar sx={{ mr: 1.5, bgcolor: '#4a4a8c' }}>A</Avatar>}
                                        <Paper
                                            elevation={0}
                                            sx={{
                                                p: msg.role === 'user' ? '10px 20px' : 0,
                                                borderRadius: '20px',
                                                maxWidth: msg.role === 'user' ? 'fit-content' : '100%',
                                                bgcolor: msg.role === 'user' ? '#3f51b5' : 'white',
                                                color: msg.role === 'user' ? 'white' : 'black',
                                                border: msg.role === 'assistant' ? '1px solid #e0e0e0' : 'none'
                                            }}
                                        >
                                            {renderMessageContent(msg)}
                                        </Paper>
                                    </Box>
                                </motion.div>
                            ))}
                            {isLoading && (
                                <Box sx={{ display: 'flex', justifyContent: 'flex-start', mb: 2 }}>
                                    <Avatar sx={{ mr: 1.5, bgcolor: '#4a4a8c' }}>A</Avatar>
                                    <Paper elevation={1} sx={{ p: 1.5, borderRadius: '15px' }}><CircularProgress size={20} /></Paper>
                                </Box>
                            )}
                            <div ref={messagesEndRef} />
                        </Box>
                        <Box sx={{ width: '100%', maxWidth: '900px', mx: 'auto', p: 2, pt: 1 }}>
                            <Paper component="form" onSubmit={handleFormSubmit} elevation={4} sx={{ p: '8px 16px', borderRadius: '15px', display: 'flex', alignItems: 'center' }}>
                                <Button startIcon={<AttachFile />} onClick={() => fileInputRef.current.click()} sx={{ mr: 1, textTransform: 'none', color: 'grey.700' }}>Attach</Button>
                                <TextField fullWidth variant="standard" placeholder="Ask another question..." value={input} onChange={(e) => setInput(e.target.value)} InputProps={{ disableUnderline: true }} />
                                <IconButton color="primary" type="submit" disabled={isLoading || !input.trim()}><Send /></IconButton>
                            </Paper>
                        </Box>
                    </motion.div>
                )}
            </AnimatePresence>
        </Box>
    );
};

export default ChatInterface;