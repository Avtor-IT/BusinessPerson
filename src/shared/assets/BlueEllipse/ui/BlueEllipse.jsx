import React from 'react';

const BlueEllipse = ({ width, height, fill, ...otherProps }) => {
    return (
        <svg
            width={width || '348'}
            height={height || '202.5'}
            fill={fill || 'none'}
            {...otherProps}
        >
            <ellipse
                cx="236.5"
                cy="2"
                rx="236.5"
                ry="237"
                fill="#514996"
            />
        </svg>
    );
};

export default BlueEllipse;
