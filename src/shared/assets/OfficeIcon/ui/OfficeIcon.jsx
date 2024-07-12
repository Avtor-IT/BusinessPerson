import React from 'react';

const OfficeIcon = ({ width, height, fill, ...otherProps }) => {
    return (
        <svg
            width={width || '24'}
            height={height || '24'}
            viewBox={'0 0 24 24'}
            fill={fill || 'none'}
            {...otherProps}
        >
            <path
                d="M21.47 19V5C21.47 3 20.47 2 18.47 2H14.47C12.47 2 11.47 3 11.47 5V19C11.47 21 12.47 22 14.47 22H18.47C20.47 22 21.47 21 21.47 19Z"
                stroke="inherit"
                strokeLinecap="round"
            />
            <path
                d="M11.47 6H16.47"
                stroke="inherit"
                strokeLinecap="round"
            />
            <path
                d="M11.47 18H15.47"
                stroke="inherit"
                strokeLinecap="round"
            />
            <path
                d="M11.47 13.9502L16.47 14.0002"
                stroke="inherit"
                strokeLinecap="round"
            />
            <path
                d="M11.47 10H14.47"
                stroke="inherit"
                strokeLinecap="round"
            />
            <path
                d="M5.49 2C3.86 2 2.53 3.33 2.53 4.95V17.91C2.53 18.36 2.72 19.04 2.95 19.43L3.77 20.79C4.71 22.36 6.26 22.36 7.2 20.79L8.02 19.43C8.25 19.04 8.44 18.36 8.44 17.91V4.95C8.44 3.33 7.11 2 5.49 2Z"
                stroke="inherit"
                strokeLinecap="round"
            />
            <path
                d="M8.44 7H2.53"
                stroke="inherit"
                strokeLinecap="round"
            />
        </svg>
    );
};

export default OfficeIcon;