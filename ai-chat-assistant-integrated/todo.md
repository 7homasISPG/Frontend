## Todo List

### Phase 1: Analyze new code and requirements ✅
- [x] Understand the purpose and structure of `TopBar.js`, `SideBar.js`, `MainLayout.js`, `ChatInterface2.js`, `TableView.js`, `CardSelectionView.js`, `CardScrollView.js`, `AnswerView.js`, and `App.js`.
- [x] Identify how these new components are intended to integrate with the existing `chat-interface-app`.
- [x] Determine the changes needed in the existing `chat-interface-app` to accommodate the new layout and source display functionality.

### Phase 2: Integrate MainLayout, TopBar, and SideBar components
- [ ] Modify `App.jsx` to use `MainLayout` as the primary wrapper.
- [ ] Integrate `TopBar` into `MainLayout` or `App.jsx` as appropriate.
- [ ] Integrate `SideBar` into `MainLayout`.
- [ ] Ensure `ChatInterface` (or `ChatInterface2`) is rendered within `MainLayout` based on the `activeView` state.

### Phase 3: Implement source display functionality on the right side
- [ ] Create a new component for displaying sources (e.g., `SourceDisplay.jsx`).
- [ ] Modify `ChatInterface` to manage and pass source data to `SourceDisplay`.
- [ ] Integrate `SourceDisplay` into the layout, likely alongside the chat view.
- [ ] Ensure `AnswerView` correctly passes citation data to `ChatInterface`.

### Phase 4: Test and refine the integrated application
- [ ] Run the application locally.
- [ ] Verify the new layout (TopBar, SideBar, ChatInterface, SourceDisplay).
- [ ] Test chat functionality, including message sending, initial view, and different message types.
- [ ] Verify source display functionality: ensure sources appear correctly on the right side when an answer with citations is received.
- [ ] Check responsiveness and overall UI/UX.
- [ ] Debug and fix any issues.

### Phase 5: Provide step-by-step setup and running instructions
- [ ] Document the complete setup procedure.
- [ ] Explain how to run the integrated application.
- [ ] Provide instructions for any necessary backend setup (if applicable).
- [ ] Package the updated code for delivery.

