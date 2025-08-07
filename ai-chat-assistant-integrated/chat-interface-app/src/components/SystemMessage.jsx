import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const SystemMessage = ({ message }) => {
    return (
        <div className="flex justify-center mb-4">
            <Card className="bg-gray-100 border border-gray-200 max-w-md">
                <CardContent className="p-3">
                    <p className="text-sm text-gray-600 text-center">
                        {message.content?.text}
                    </p>
                </CardContent>
            </Card>
        </div>
    );
};

export default SystemMessage;

