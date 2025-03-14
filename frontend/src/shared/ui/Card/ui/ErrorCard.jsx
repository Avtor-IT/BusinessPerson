import { Stack } from '@mui/system';
import { Typography } from '@mui/material';
import { Card } from 'shared/ui/Card/index.js';

const ErrorCard = ({ text }) => {
	return (
		<Card style={{ height: '100%', padding: '24px' }}>
			<Stack
				alignItems="center"
				height="100%"
				justifyContent="center"
			>
				<Typography variant="M24">{text || 'Ошибка'}</Typography>
			</Stack>
		</Card>
	);
};

export default ErrorCard;
