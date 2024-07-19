import React from 'react';

const MessageIcon = ({ width, height, fill, ...otherProps }) => {
    return (
        <svg
            width={width || '24'}
            height={height || '24'}
            fill={fill || 'none'}
            {...otherProps}
        >
            <path
                d="M16 2H8C4 2 2 4 2 8V21C2 21.55 2.45 22 3 22H16C20 22 22 20 22 16V8C22 4 20 2 16 2Z"
                stroke="#F9FEFF"
            />
            <path
                d="M7 9.5H17"
                stroke="#F9FEFF"
            />
            <path
                d="M7 14.5H14"
                stroke="#F9FEFF"
            />
        </svg>
    );
};

export default MessageIcon;
