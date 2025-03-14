import { CircularProgress, Typography } from '@mui/material';
import { Stack } from '@mui/system';

const FallbackPage = ({ text }) => {
	return (
		<Stack
			minHeight="100vh"
			alignItems="center"
			justifyContent="center"
			color="var(--primary)"
		>
			<Typography variant="M40">{text}</Typography>
			<CircularProgress
				color="inherit"
				size={'5rem'}
			/>
		</Stack>
	);
};

export default FallbackPage;
