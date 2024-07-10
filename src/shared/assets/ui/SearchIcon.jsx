import React from 'react';

const SearchIcon = ({width, height, fill, ...otherProps}) => {
    return (
        <svg xmlns={"http://www.w3.org/2000/svg"} width={width || "24"} height={height || "24"} viewBox={"0 0 24 24"}
             fill={fill || "none"} {...otherProps}>
            <path
                d={"M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"}
                stroke={"#6C6E87"} strokeWidth={"1.5"} strokeLinecap={"round"} strokeLinejoin={"round"}/>
            <path d={"M22 22L20 20"} stroke={"#6C6E87"} strokeWidth={"1.5"} strokeLinecap={"round"} strokeLinejoin={"round"}/>
        </svg>
    );
};

export default SearchIcon;