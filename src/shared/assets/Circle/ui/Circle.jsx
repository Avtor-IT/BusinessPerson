import { Box } from '@mui/material';
import React from 'react';
import cls from './circle.module.scss';

const Circle = ({ variant = 'blue', ...otherProps }) => {
	const classNames = [
		cls.Circle,
		variant === 'blue' ? cls.blue : cls.purple,
	].join(' ');
	return (
		<Box
			className={classNames}
			{...otherProps}
		></Box>
	);
};

export default Circle;
