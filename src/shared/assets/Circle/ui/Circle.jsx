import { Box } from '@mui/material';
import React from 'react';
import cls from './circle.module.scss';

const Circle = ({
	top,
	right,
	left,
	bottom,
	bg,
	width,
	height,
	transition,
	variant = 'blue',
	...otherProps
}) => {
	const classNames = [
		cls.Circle,
		variant === 'blue' ? cls.blue : cls.purple,
	].join(' ');
	return (
		<Box
			width={width || '445px'}
			height={height || '445px'}
			className={`${cls.Circle || ''} ${classNames}`}
			style={{
				top: top,
				right: right,
				left: left,
				bottom: bottom,
				backgroundColor: bg,
				transition: transition || 'all .6s var(--quick-animation)', // НУЖНАЯ АНИМАЦИЯ!!!!!!!! вручную подбирал
				// блин
			}}
			{...otherProps}
		></Box>
	);
};

export default Circle;
