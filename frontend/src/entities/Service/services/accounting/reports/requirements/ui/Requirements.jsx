import { Typography } from '@mui/material';
import { Card } from 'shared/ui/Card';

const Requirements = ({ ...props }) => {
	return (
		<Card
			{...props}
			position="relative"
			height="100%"
		>
			<Typography variant="M24">Требования</Typography>

			<Typography
				color="var(--tertiary)"
				variant="R20"
				display="block"
				position="absolute"
				top="50%"
				left="50%"
				sx={{ transform: 'translate(-50%, -50%)' }}
				width="100%"
				textAlign="center"
			>
				Требований нет
			</Typography>
		</Card>
	);
};

export default Requirements;
