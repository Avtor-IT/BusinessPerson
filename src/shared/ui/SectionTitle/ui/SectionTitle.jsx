import { Typography } from '@mui/material';

const SectionTitle = ({ children }) => {
	return (
		<Typography
			variant="M40"
			sx={{ mb: '54px' }}
		>
			{children}
		</Typography>
	);
};

export default SectionTitle;
