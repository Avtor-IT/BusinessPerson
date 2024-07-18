import React from 'react';
import { SearchIcon } from 'shared/assets/SearchIcon';
import { Input } from 'shared/ui/Input';
import cls from './ChatBot.module.scss';

export const ChatBot = ({ ...inputProps }) => {
    return (
        <Input
            beforePlaceholder={<SearchIcon />}
            className={cls.ChatBot}
            placeholder="Чат бот"
            {...inputProps}
        />
    );
};
