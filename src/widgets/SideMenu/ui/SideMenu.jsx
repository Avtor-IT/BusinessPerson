import React from 'react';
import cls from './SideMenu.module.scss';

export const SideMenu = ({ children }) => {
    return <aside className={cls.SideMenu}>{children}</aside>;
};
