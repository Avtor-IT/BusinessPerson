import React from 'react';
import {ChatBot} from 'features/ChatBot';
import {Auth} from 'features/Auth';
import {useAuth, UserBlock} from 'entities/User';
import cls from './Header.module.scss';

export const Header = ({className, ...props}) => {
    const {isAuth} = useAuth();

    return (
        <header
            className={`${cls.Header} ${className}`}
            {...props}
        >
            <div className={`container ${cls.headerContainer}`}>
                <div>
                    <div style={{alignSelf: 'center'}}>
                        <ChatBot style={{minWidth: 782}}/>
                    </div>
                </div>
                <div style={{alignSelf: 'center'}}>
                    {isAuth ? <UserBlock/> : <Auth/>}
                </div>
            </div>
        </header>
    );
};
