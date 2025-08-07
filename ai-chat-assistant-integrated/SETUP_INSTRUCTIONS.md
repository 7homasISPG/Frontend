# AI Chat Assistant - Complete Setup Instructions

This document provides step-by-step instructions to set up and run the integrated AI Chat Assistant with TopBar, SideBar, MainLayout, and source display functionality.

## 🏗️ Project Overview

The application now includes:
- **TopBar**: Navigation header with logo and menu items
- **SideBar**: Left navigation panel with Explore, Messages, Activities, and Interactions
- **MainLayout**: Container that manages the overall layout and view switching
- **ChatInterface**: Enhanced chat interface with source display panel
- **SourceDisplay**: Right panel showing sources and citations when available

## 📋 Prerequisites

Before starting, ensure you have:
- **Node.js** (version 18 or higher)
- **pnpm** (preferred) or npm
- A modern web browser (Chrome, Firefox, Safari, Edge)

## 🚀 Step-by-Step Setup

### Step 1: Navigate to Project Directory
```bash
cd chat-interface-app
```

### Step 2: Install Dependencies
The following dependencies are already installed, but if you need to reinstall:
```bash
pnpm install
```

**Key Dependencies Included:**
- React 19 with modern hooks
- Tailwind CSS for styling
- shadcn/ui components
- Framer Motion for animations
- Lucide React icons
- Axios for API calls
- Material-UI components (for legacy compatibility)

### Step 3: Start Development Server
```bash
pnpm run dev --host
```

This will start the development server on `http://localhost:5173`

### Step 4: Open in Browser
Navigate to `http://localhost:5173` in your web browser.

## 🎯 Application Features

### Navigation
- **TopBar**: Contains logo and navigation links (AI Assistance, All Courses, etc.)
- **SideBar**: Four main sections:
  - **Explore** (🧭): Main chat interface with FAQ grid
  - **Messages** (💬): Direct chat mode
  - **Activities** (📅): Placeholder for future features
  - **Interactions** (👥): Placeholder for future features

### Chat Interface
- **Initial View**: "What can I help with?" screen with suggestion chips and FAQ cards
- **Chat View**: Conversation interface with message bubbles
- **Source Display**: Right panel showing sources when citations are available

### Message Types Supported
- **Text Messages**: Basic user and assistant messages
- **Answer with Citations**: Responses with source references
- **Table Data**: Structured data display
- **Card Selection**: Interactive card grids
- **Follow-up Questions**: Clickable suggested questions

## 🔧 Configuration

### API Endpoints
The application is configured to connect to a backend API. Update these URLs in `src/components/ChatInterface.jsx`:

```javascript
const API_ASK_URL = 'http://localhost:8000/api/ask';
const API_UPLOAD_URL = 'http://localhost:8000/api/upload';
```

### Backend Requirements
For full functionality, you need a backend that provides:

1. **POST /api/ask** - Chat endpoint that accepts:
   ```json
   {
     "query": "user question"
   }
   ```
   
   And returns structured responses like:
   ```json
   {
     "type": "answer",
     "text": "Response text",
     "citations": [
       {
         "source": "https://example.com",
         "title": "Source Title",
         "snippet": "Relevant excerpt"
       }
     ],
     "follow_ups": ["Related question 1", "Related question 2"]
   }
   ```

2. **POST /api/upload** - File upload endpoint

## 🎨 Customization

### Styling
- **Colors**: Modify the color scheme in `src/App.css`
- **Layout**: Adjust spacing and sizing in component files
- **Icons**: Replace Lucide icons with your preferred icon library

### Components
- **TopBar**: Update logo and navigation items in `src/components/TopBar.jsx`
- **SideBar**: Modify navigation items in `src/components/SideBar.jsx`
- **FAQ Questions**: Update the question list in `src/components/FAQGrid.jsx`
- **Suggestion Chips**: Modify suggestions in `src/components/SuggestionChips.jsx`

## 🧪 Testing

### Manual Testing Checklist
- [ ] TopBar displays correctly with all navigation items
- [ ] SideBar navigation works (Explore, Messages, Activities, Interactions)
- [ ] Initial view shows FAQ grid and suggestion chips
- [ ] Clicking FAQ cards transitions to chat view
- [ ] Source display panel appears when in chat mode
- [ ] Input field accepts text and triggers API calls
- [ ] Error handling works when backend is unavailable
- [ ] Responsive design works on different screen sizes

### Browser Testing
Test the application in:
- Chrome (recommended)
- Firefox
- Safari
- Edge

## 🚀 Production Build

### Build for Production
```bash
pnpm run build
```

### Preview Production Build
```bash
pnpm run preview
```

### Deploy
The built files will be in the `dist/` directory. You can deploy these to any static hosting service like:
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

## 🔍 Troubleshooting

### Common Issues

1. **Port Already in Use**
   ```bash
   # Kill process on port 5173
   lsof -ti:5173 | xargs kill -9
   ```

2. **Dependencies Not Installing**
   ```bash
   # Clear cache and reinstall
   pnpm store prune
   rm -rf node_modules pnpm-lock.yaml
   pnpm install
   ```

3. **Build Errors**
   ```bash
   # Check for TypeScript/ESLint errors
   pnpm run lint
   ```

4. **API Connection Issues**
   - Verify backend is running on the correct port
   - Check CORS settings on your backend
   - Verify API endpoint URLs in the code

### Development Tips

1. **Hot Reload**: The dev server automatically reloads when you save files
2. **Console Logs**: Check browser developer tools for debugging information
3. **Network Tab**: Monitor API calls in browser dev tools
4. **React DevTools**: Install React Developer Tools browser extension

## 📁 Project Structure

```
chat-interface-app/
├── public/                 # Static assets
├── src/
│   ├── components/
│   │   ├── TopBar.jsx     # Navigation header
│   │   ├── SideBar.jsx    # Left navigation panel
│   │   ├── MainLayout.jsx # Main layout container
│   │   ├── ChatInterface.jsx # Enhanced chat interface
│   │   ├── SourceDisplay.jsx # Source panel
│   │   ├── InitialView.jsx    # Welcome screen
│   │   ├── ChatView.jsx       # Chat conversation view
│   │   ├── MessageList.jsx    # Message container
│   │   ├── Message.jsx        # Message dispatcher
│   │   ├── UserMessage.jsx    # User message bubble
│   │   ├── AssistantMessage.jsx # Assistant message
│   │   ├── SystemMessage.jsx   # System notifications
│   │   ├── LoadingIndicator.jsx # Loading spinner
│   │   ├── ChatInput.jsx      # Input field
│   │   ├── SuggestionChips.jsx # Suggestion buttons
│   │   ├── FAQGrid.jsx        # FAQ cards
│   │   ├── TableView.jsx      # Table display
│   │   ├── AnswerView.jsx     # Answer with citations
│   │   ├── CardSelectionView.jsx # Card selection
│   │   └── ui/            # shadcn/ui components
│   ├── App.jsx            # Main app component
│   ├── App.css            # Global styles
│   └── main.jsx           # Entry point
├── package.json           # Dependencies and scripts
└── vite.config.js         # Vite configuration
```

## 🎉 Success!

If you've followed all steps correctly, you should now have:
- ✅ A fully functional AI chat interface
- ✅ Professional TopBar with navigation
- ✅ Interactive SideBar with view switching
- ✅ Source display panel for citations
- ✅ Responsive design that works on all devices
- ✅ Modern React architecture with clean component separation

The application is now ready for development, testing, and deployment!

