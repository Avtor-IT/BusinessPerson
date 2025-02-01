import { Box } from '@mui/material';

const Circle = ({
	width,
	height,
	size,
	variant = 'blue',
	sx,
	className = '',
	...otherProps
}) => {
	const deafultSx = {
		position: 'absolute',
		zIndex: 1,
		borderRadius: '100%',
		transition: 'all 0.3s ease',
	};

	const variantSx = {
		purple: {
			backgroundColor: 'var(--primary)',
		},
		blue: {
			backgroundColor: 'rgb(81, 73, 150)',
		},
	};

	return (
		<Box
			width={width || size || '678px'}
			height={height || size || '678px'}
			className={className}
			sx={{ ...deafultSx, ...variantSx[variant], ...sx }}
			{...otherProps}
		></Box>
	);
};

export default Circle;
