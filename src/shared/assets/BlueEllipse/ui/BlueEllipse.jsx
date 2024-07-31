import { Box } from '@mui/material';
import React from 'react';
import cls from './BlueEllipse.module.scss';

const BlueEllipse = ({
    width,
    height,
    top,
    right,
    left,
    bottom,
    ...otherProps
}) => {
    return (
        <Box
            width={width || '445px'}
            height={height || '445px'}
            className={`${cls.BlueEllipse || ''}`}
            style={{ top: top, right: right, left: left, bottom: bottom }}
            {...otherProps}
        ></Box>
    );
};

export default BlueEllipse;
