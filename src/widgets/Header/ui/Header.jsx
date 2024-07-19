import React from 'react';
import { ChatBot } from 'features/ChatBot';
import { ProfileBlock } from 'entities/User';
import cls from './Header.module.scss';

export const Header = ({ className, ...props }) => {
    return (
        <header
            className={`${cls.Header} ${className}`}
            {...props}
        >
            <div className={`container ${cls.headerContainer}`}>
                <div style={{ alignSelf: 'center', height: '100%' }}>
                    <ChatBot />
                </div>
                <div style={{ alignSelf: 'center' }}>
                    <ProfileBlock />
                </div>
            </div>
        </header>
    );
};
