import React from 'react';
import cls from './Input.module.scss';

export const Input = (props) => {
    return (
        <input
            {...props}
            className={cls.Input}
        />
    );
};
