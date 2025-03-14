import { Box, Typography } from '@mui/material';
import { TitledCard } from 'shared/ui/Card';

const ReportsCard = ({ reportsTitle, children, ...props }) => {
	return (
		<TitledCard
			{...props}
			minHeight="100%"
			circleSx={{
				background:
					'linear-gradient(15deg, var(--secondary), var(--bg-additional-color))',
				left: '-265px',
			}}
		>
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
		</TitledCard>
	);
};

export default ReportsCard;
