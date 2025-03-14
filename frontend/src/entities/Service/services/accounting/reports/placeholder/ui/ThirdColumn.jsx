import { Skeleton, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { Card } from 'shared/ui/Card';

const ThirdColumn = ({ ...props }) => {
	return (
		<Card {...props}>
			<Typography
				variant="M24"
				mb={4}
			>
				Отчёт 3
			</Typography>
			<Stack spacing={2}>
				<Skeleton
					variant="text"
					sx={{ fontSize: '1rem' }}
					animation={false}
				/>
				<Skeleton
					variant="rounded"
					height={60}
					animation={false}
				/>
				<Skeleton
					variant="text"
					sx={{ fontSize: '1rem' }}
					animation={false}
				/>
				<Skeleton
					variant="rounded"
					height={60}
					animation={false}
				/>
			</Stack>
		</Card>
	);
};

export default ThirdColumn;
