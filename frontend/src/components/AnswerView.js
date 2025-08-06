import React from 'react';
import { Box, Chip, Typography, Divider, Link as MuiLink } from '@mui/material';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

// --- SUB-COMPONENT for rendering the list of citations/sources ---
const CitationList = ({ citations = [] }) => {
  // If there are no citations, don't render anything.
  if (!citations || citations.length === 0) {
    return null;
  }
  
  // Helper to extract a clean, readable hostname from a URL
  const getHostname = (url) => {
    try {
      return new URL(url).hostname;
    } catch (error) {
      // Fallback for invalid URLs
      return url;
    }
  };

  return (
    <>
      <Divider sx={{ my: 2 }} />
      <Box>
        <Typography variant="subtitle2" sx={{ mb: 1, color: 'text.secondary' }}>
          Sources:
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          {citations.map((citation, index) => (
            <MuiLink
              key={index}
              href={citation.source}
              target="_blank"
              rel="noopener noreferrer"
              variant="body2"
              underline="hover"
              sx={{ display: 'inline-flex', alignItems: 'center', gap: 1 }}
            >
              <Chip label={index + 1} size="small" component="span" />
              <span>{getHostname(citation.source)}</span>
            </MuiLink>
          ))}
        </Box>
      </Box>
    </>
  );
};

// --- SUB-COMPONENT for rendering follow-up questions (Unchanged) ---
const FollowUpQuestions = ({ followUps, onFollowUpClick }) => {
  if (!followUps || followUps.length === 0) {
    return null;
  }

  return (
    <>
      <Divider sx={{ my: 2 }} />
      <Box>
        <Typography variant="subtitle2" sx={{ mb: 1, color: 'text.secondary' }}>
          Next steps:
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {followUps.map((followUp, index) => (
            <Chip
              key={index}
              label={followUp}
              onClick={() => onFollowUpClick(followUp)}
              clickable
              variant="outlined"
              size="small"
            />
          ))}
        </Box>
      </Box>
    </>
  );
};

// --- MAIN AnswerView Component (Revised) ---
const AnswerView = ({ text, citations, followUps, onFollowUpClick }) => {
  return (
    <Box sx={{ p: 2, overflowX: 'hidden' }}>
      {/* 1. Render the main answer text */}
      <Typography component="div" variant="body1">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{text}</ReactMarkdown>
      </Typography>

      {/* 2. Render the list of sources below the text */}
      <CitationList citations={citations} />

      {/* 3. Render the follow-up questions */}
      <FollowUpQuestions followUps={followUps} onFollowUpClick={onFollowUpClick} />
    </Box>
  );
};

export default AnswerView;