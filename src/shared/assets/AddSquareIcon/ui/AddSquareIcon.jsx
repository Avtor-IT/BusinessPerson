import React from 'react';

const AddSquareIcon = ({ width, height, fill, ...otherProps }) => {
    return (
        <svg
            width={width || '24'}
            height={height || '24'}
            fill={fill || 'none'}
            {...otherProps}
        >
            <path
                d="M8 12H16"
                stroke="#3D3F4C"
            />
            <path
                d="M12 16V8"
                stroke="#3D3F4C"
            />
            <path
                d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                stroke="#3D3F4C"
            />
        </svg>
    );
};

export default AddSquareIcon;
