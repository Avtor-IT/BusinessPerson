import { Box } from '@mui/system';

const ServiceWithIcon = ({ children, icon }) => {
	if (!icon) {
		return children;
	}

	return (
		<Box position="relative">
			<Box
				position="absolute"
				left={-37}
				top="50%"
				sx={{ transform: 'translate(-100%, -50%)' }}
			>
				{icon}
			</Box>
			{children}
		</Box>
	);
};

export default ServiceWithIcon;
