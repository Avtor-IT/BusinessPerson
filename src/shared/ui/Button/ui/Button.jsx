import React from 'react';
import cls from './Button.module.scss';

export const Button = ({ children, className, variant, ...otherProps }) => {
    return (
        <button
            className={`${cls.Button} ${variant ? cls[variant] : ''} ${
                className || ''
            }`}
            {...otherProps}
        >
            {children}
        </button>
    );
};
