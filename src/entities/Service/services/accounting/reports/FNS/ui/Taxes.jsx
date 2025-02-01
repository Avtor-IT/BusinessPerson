import { Typography } from '@mui/material';
import { Card } from 'shared/ui/Card';

const Taxes = ({ ...props }) => {
	return (
		<Card
			{...props}
			position="relative"
		>
			<Typography variant="M24">Налоги и&nbsp;взносы</Typography>

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
				Пока налоговой отчётности нет
			</Typography>
		</Card>
	);
};

export default Taxes;
