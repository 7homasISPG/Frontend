import React, { useState } from 'react';
import TopBar from './TopBar';
import SideBar from './SideBar';
import ChatInterface from './ChatInterface';

const MainLayout = () => {
    const [activeView, setActiveView] = useState('explore');

    const handleViewChange = (viewId) => {
        setActiveView(viewId);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <TopBar />
            <SideBar activeView={activeView} onViewChange={handleViewChange} />
            
            <main className="ml-20 pt-16 min-h-screen">
                <div className="p-6">
                    {(activeView === 'explore' || activeView === 'chat') && (
                        <ChatInterface
                            key={activeView}
                            startInConversation={activeView === 'chat'}
                        />
                    )}
                    
                    {activeView === 'activities' && (
                        <div className="flex items-center justify-center h-96">
                            <div className="text-center">
                                <h2 className="text-2xl font-semibold text-gray-900 mb-2">Activities</h2>
                                <p className="text-gray-600">Activities view coming soon...</p>
                            </div>
                        </div>
                    )}
                    
                    {activeView === 'interactions' && (
                        <div className="flex items-center justify-center h-96">
                            <div className="text-center">
                                <h2 className="text-2xl font-semibold text-gray-900 mb-2">Interactions</h2>
                                <p className="text-gray-600">Interactions view coming soon...</p>
                            </div>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
};

export default MainLayout;

