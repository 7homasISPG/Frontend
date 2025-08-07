import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const UserMessage = ({ message }) => {
    return (
        <div className="flex justify-end mb-4">
            <Card className="bg-white border border-gray-200 shadow-sm">
                <CardContent className="p-4">
                    <p className="whitespace-pre-wrap text-sm leading-relaxed">
                        {message.content?.text}
                    </p>
                </CardContent>
            </Card>
        </div>
    );
};

export default UserMessage;

