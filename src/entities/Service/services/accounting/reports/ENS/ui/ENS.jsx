import { Typography } from '@mui/material';
import { Card } from 'shared/ui/Card';

const ENS = ({ ...props }) => {
	return (
		<Card
			{...props}
			position="relative"
			height="100%"
		>
			<Typography variant="M24">Сальдо ЕНС</Typography>

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
				Сальдо нет
			</Typography>
		</Card>
	);
};

export default ENS;
