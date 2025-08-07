# AI Chat Assistant - Restructured Frontend

This is a completely restructured React application based on the original monolithic ChatInterface component. The application has been rebuilt with modern React architecture, clean component separation, and professional styling that matches the provided design.

## 🏗️ Architecture Improvements

### Component Structure
The original single large component has been broken down into focused, reusable components:

```
src/
├── components/
│   ├── ChatInterface.jsx      # Main container component
│   ├── InitialView.jsx        # Welcome screen
│   ├── ChatView.jsx           # Chat conversation container
│   ├── SuggestionChips.jsx    # Horizontal suggestion chips
│   ├── FAQGrid.jsx            # FAQ cards grid
│   ├── MessageList.jsx        # Message container
│   ├── Message.jsx            # Message dispatcher
│   ├── UserMessage.jsx        # User message bubble
│   ├── AssistantMessage.jsx   # Assistant message with avatar
│   ├── SystemMessage.jsx      # System notifications
│   ├── LoadingIndicator.jsx   # Loading spinner
│   ├── ChatInput.jsx          # Input field with controls
│   ├── TableView.jsx          # Table data display
│   ├── AnswerView.jsx         # Answer with citations
│   └── CardSelectionView.jsx  # Card selection interface
└── App.jsx                    # Main app component
```

### Key Improvements

1. **Separation of Concerns**: Each component has a single responsibility
2. **Reusability**: Components can be easily reused and tested independently
3. **Maintainability**: Code is easier to understand and modify
4. **Modern Styling**: Uses Tailwind CSS and shadcn/ui components
5. **Clean Architecture**: Clear data flow and state management
6. **Responsive Design**: Works well on desktop and mobile devices

## 🎨 Design Features

- **Clean, modern interface** matching the provided design
- **Smooth animations** using Framer Motion
- **Professional typography** and spacing
- **Consistent color scheme** with blue accents
- **Interactive elements** with hover states
- **Responsive grid layout** for FAQ cards
- **Proper message bubbles** with avatars

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- pnpm (preferred) or npm

### Installation & Running

1. Navigate to the project directory:
   ```bash
   cd chat-interface-app
   ```

2. Install dependencies (already done):
   ```bash
   pnpm install
   ```

3. Start the development server:
   ```bash
   pnpm run dev --host
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
pnpm run build
```

## 🔧 Configuration

The application is configured to work with a backend API at `http://localhost:8000`. You can modify the API endpoints in `src/components/ChatInterface.jsx`:

```javascript
const API_ASK_URL = 'http://localhost:8000/api/ask';
const API_UPLOAD_URL = 'http://localhost:8000/api/upload';
```

## 📱 Features

- **Initial Welcome Screen**: Clean interface with FAQ grid and suggestion chips
- **Chat Interface**: Smooth transition to conversation view
- **Message Types**: Support for text, tables, cards, and answers with citations
- **File Upload**: Drag and drop or click to upload files
- **Responsive Design**: Works on all screen sizes
- **Error Handling**: Graceful error messages when backend is unavailable
- **Loading States**: Visual feedback during API calls

## 🛠️ Technologies Used

- **React 19** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality UI components
- **Framer Motion** - Smooth animations
- **Lucide Icons** - Beautiful, consistent icons
- **Axios** - HTTP client for API calls

## 📝 Component Details

### ChatInterface
Main container that manages state and coordinates between child components.

### InitialView
Welcome screen with the "What can I help with?" heading, suggestion chips, and FAQ grid.

### MessageList
Handles the display of all messages with proper scrolling and animations.

### ChatInput
Input field with attach button, microphone icon, and send functionality.

### Message Components
- `UserMessage`: Blue bubble on the right
- `AssistantMessage`: White bubble with avatar on the left
- `SystemMessage`: Centered gray notification

This restructured application provides a solid foundation for further development and is much easier to maintain and extend than the original monolithic component.

