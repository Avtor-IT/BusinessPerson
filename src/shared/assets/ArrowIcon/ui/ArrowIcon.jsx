import React from 'react';

const ArrowIcon = ({ direction, width, height, fill, ...otherProps }) => {
    const d = { // переделать без изменения d, например с rotate
        right: "M8.94998 19.9201L15.47 13.4001C16.24 12.6301 16.24 11.3701 15.47 10.6001L8.94999 4.08008",
        left: "M15.05 19.92L8.53 13.4C7.76 12.63 7.76 11.37 8.53 10.6L15.05 4.08",
        up: "M19.92 15.05L13.4 8.53C12.63 7.76 11.37 7.76 10.6 8.53L4.08 15.05",
        down: "M4.08 8.95L10.6 15.47C11.37 16.24 12.63 16.24 13.4 15.47L19.92 8.95"
    }

    return (
        <svg
            width={width || "24"}
            height={height || "24"}
            fill={fill || "none"}
            {...otherProps}
        >
            <path
                d={d[direction] || d.right}
                stroke="#F9FEFF"
            />
        </svg>
    );
};

export default ArrowIcon;