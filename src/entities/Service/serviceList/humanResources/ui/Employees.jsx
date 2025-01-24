import { Skeleton, Typography } from '@mui/material';
import { Stack } from '@mui/system';

const Employees = () => {
	return (
		<>
			<Typography
				variant="M24"
				mb={4}
			>
				Сотрудники
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
					variant="rounded"
					height={60}
					animation={false}
				/>
				<Skeleton
					variant="rounded"
					height={60}
					animation={false}
				/>
				<Skeleton
					variant="rounded"
					height={60}
					animation={false}
				/>
			</Stack>
		</>
	);
};

export default Employees;
