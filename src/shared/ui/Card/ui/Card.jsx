import React from 'react';
import cls from './Card.module.scss';

export const Card = ({ children, className, ...props }) => {
    return (
        <div
            className={`${cls.Card} ${className || ''}`}
            {...props}
        >
            {children}
        </div>
    );
}