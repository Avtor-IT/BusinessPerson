import { Box } from '@mui/material';

const Circle = ({ width, height, size, sx, ...otherProps }) => {
	return (
		<Box
			width={width || size || '678px'}
			height={height || size || '678px'}
			sx={{
				position: 'absolute',
				zIndex: 1,
				borderRadius: '100%',
				transition: 'all 0.3s ease',
				background: 'var(--primary)',
				...sx,
			}}
			{...otherProps}
		></Box>
	);
};

export default Circle;
