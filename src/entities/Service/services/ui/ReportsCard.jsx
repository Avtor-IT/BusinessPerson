import { Box, Typography } from '@mui/material';
import Circle from 'shared/icons/Circle';
import { Card } from 'shared/ui/Card';

const ReportsCard = ({ reportsTitle, children, ...props }) => {
	return (
		<Card
			{...props}
			minHeight="100%"
		>
			<Circle
				position="absolute"
				top="-580px"
				left="-265px"
				sx={{
					background:
						'linear-gradient(15deg, var(--secondary), var(--bg-additional-color))',
				}}
			/>
			<Typography
				variant="M24"
				mb={4}
				position="relative"
				zIndex={2}
				color="var(--color-light-secondary)"
			>
				{reportsTitle || 'Отчеты'}
			</Typography>
			<Box pt={2}>{children}</Box>
		</Card>
	);
};

export default ReportsCard;
