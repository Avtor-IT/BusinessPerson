import React from 'react';

export const Logo = ({ height, width, fill, ...props }) => {
    return (
        <svg
            width={width || '48'}
            height={height || '54'}
            viewBox="0 0 48 54"
            fill={fill || 'none'}
            {...props}
        >
            <path
                d="M24 27V34.8M24 27L30.6398 23.247M24 27L17.3602 23.247M47 14L40.3602 17.7529M47 14V21.8M47 14L40.3602 10.2471M7.63978 36.247L1 40M1 40L7.63978 43.753M1 40V32.2M1 14L7.63978 17.7529M1 14L7.63978 10.2471M1 14V21.8M40.3602 36.247L47 40M47 40L40.3602 43.753M47 40V32.2M24 1V8.8M24 1L17.36 4.75293M24 1L30.6401 4.75293M24 45.2V53M24 53L30.6398 49.247M24 53L17.3602 49.247"
                stroke="#A43270"
                strokeWidth="1.25"
                strokeLinecap="round"
            />
        </svg>
    );
};
