import React from 'react';
import cls from './Badge.module.scss';

const Badge = ({ children, color }) => {
    const colorStyle = {
        '--badge-color': color || '#FD3528',
    };

    return (
        <div className={cls.BadgeContainer}>
            {children}
            <span
                className={cls.Badge}
                style={colorStyle}
            ></span>
        </div>
    );
};

export default Badge;
