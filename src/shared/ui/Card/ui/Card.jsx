import React from 'react';
import cls from './Card.module.scss';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';

export const Card = ({
	children,
	className,
	variant,
	serviceColor,
	serviceTitle,
	style,
	...props
}) => {
	const colorStyle = {
		'--service-color': serviceColor || 'var(--secondary)',
	};
	const resultStyles = Object.assign({}, style, colorStyle);

	return (
		<Box
			className={`${cls.Card} ${variant ? cls[variant] : ''} ${
				className || ''
			}`}
			style={resultStyles}
			{...props}
		>
			{serviceTitle ? (
				<Typography
					variant="M24"
					sx={{ mb: '24px' }}
				>
					{serviceTitle}
				</Typography>
			) : (
				''
			)}
			{children}
		</Box>
	);
};
