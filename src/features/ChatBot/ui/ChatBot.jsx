import React from 'react';
import { Input } from 'shared/ui/Input';

export const ChatBot = ({ ...inputProps }) => {
    return (
        <Input
            placeholder="Чат бот"
            {...inputProps}
        />
    );
};
