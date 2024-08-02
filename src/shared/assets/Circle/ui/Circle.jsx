import { Box } from '@mui/material';
import React from 'react';
import cls from './circle.module.scss';

const Circle = ({
	width,
	height,
	top,
	right,
	left,
	bottom,
	bg = '#514996',
	transition = true,
	...otherProps
}) => {
	return (
		<Box
			width={width || '445px'}
			height={height || '445px'}
			className={`${cls.Circle || ''}`}
			style={{
				top: top,
				right: right,
				left: left,
				bottom: bottom,
				backgroundColor: bg,
				transition: transition ? 'all .3s ease' : null,
			}}
			{...otherProps}
		></Box>
	);
};

export default Circle;
