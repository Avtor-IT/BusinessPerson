import React from 'react';
import SearchIcon from 'shared/assets/SearchIcon';
import { Input } from 'shared/ui/Input';
import cls from './ChatBot.module.scss';

export const ChatBot = ({ ...inputProps }) => {
    return (
        <Input
            beforePlaceholder={
                <SearchIcon
                    gradient={
                        <>
                            <linearGradient id="linear-gradient">
                                <stop
                                    offset="0%"
                                    stopColor="var(--primary)"
                                />
                                <stop
                                    offset="100%"
                                    stopColor="var(--secondary-light)"
                                />
                            </linearGradient>
                        </>
                    }
                />
            }
            className={cls.ChatBot}
            placeholder="Чат бот"
            {...inputProps}
        />
    );
};
