import React from 'react';
import {Input} from 'shared/ui/Input';
import {SearchIcon} from "shared/assets";
import cls from './ChatBot.module.scss'

export const ChatBot = ({...inputProps}) => {
    return (
        <Input
            beforePlaceholder={<SearchIcon/>}
            className={cls.ChatBot}
            placeholder="Чат бот"
        />
    );
};
