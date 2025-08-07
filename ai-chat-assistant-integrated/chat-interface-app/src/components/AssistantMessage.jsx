import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import TableView from './TableView';
import AnswerView from './AnswerView';
import CardSelectionView from './CardSelectionView';

const AssistantMessage = ({ message, onSendMessage }) => {
    const renderMessageContent = () => {
        const { content } = message;
        
        switch (content?.type) {
            case 'table': {
                console.log("TableData:", content.data);
                const rawData = content.data;

                // Extract unique headers excluding "Source"
                const headers = Array.from(
                    new Set(rawData.flatMap(obj => Object.keys(obj).filter(key => key !== 'Source')))
                );

                // Format rows by excluding "Source" values
                const rows = rawData.map(obj =>
                    headers.map(header => obj[header] || '')
                );

                // Collect all unique sources into one list
                const citations = rawData
                    .flatMap(obj => obj["Source"]?.split(',') || [])
                    .map(src => src.trim())
                    .filter(Boolean)
                    .map(url => ({ url })); // structure compatible with SourceDisplay

                // Send extracted sources to the SourceDisplay panel
                if (citations.length > 0) {
                    // If you have a prop or context to set sources, call it here:
                    if (onSendMessage && typeof onSendMessage === 'function') {
                        onSendMessage({ type: '__setSources', data: citations });
                    }
                }

                return <TableView data={{ headers, rows }} />;
            }        
            case 'card_selection':
                return (
                    <div className="p-2">
                        <p className="px-4 pt-2 mb-2 text-sm text-gray-800">
                            {content.text}
                        </p>
                        <CardSelectionView data={content.data} onCardClick={onSendMessage} />
                    </div>
                );
            case 'answer':
                return (
                    <AnswerView
                        text={content.text}
                        citations={content.citations}
                        followUps={content.follow_ups}
                        onFollowUpClick={onSendMessage}
                    />
                );
            default:
                return (
                    <div className="p-4">
                        <p className="whitespace-pre-wrap text-sm leading-relaxed text-gray-800">
                            {content?.text || 'Response format not recognized.'}
                        </p>
                    </div>
                );
        }
    };

    return (
        <div className="flex justify-start mb-4">
            <div className="flex items-start space-x-3 max-w-[85%]">
                <Avatar className="w-8 h-8 bg-blue-600 flex-shrink-0">
                    <AvatarFallback className="text-black text-sm font-medium">
                        A
                    </AvatarFallback>
                </Avatar>
                <Card className="bg-white border border-gray-200 shadow-sm">
                    <CardContent className="p-0">
                        {renderMessageContent()}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default AssistantMessage;

