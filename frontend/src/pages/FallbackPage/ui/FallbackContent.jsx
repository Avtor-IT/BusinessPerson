import { Skeleton } from '@mui/material';
import { Box, Grid } from '@mui/system';

const ContentFallback = () => {
	return (
		<Box>
			<Grid
				container
				spacing={2}
				columns={5}
			>
				<Grid size={2}>
					<Skeleton
						variant="rounded"
						height="200px"
					/>
				</Grid>
				<Grid size={2}>
					<Skeleton
						variant="rounded"
						height="200px"
					/>
				</Grid>
				<Grid size={1}>
					<Skeleton
						variant="rounded"
						height="200px"
					/>
				</Grid>

				<Grid size={3}>
					<Skeleton
						variant="rounded"
						height="337px"
					/>
				</Grid>
				<Grid size={2}>
					<Skeleton
						variant="rounded"
						height="337px"
					/>
				</Grid>

				<Grid
					size={12}
					marginTop={5}
				>
					<Skeleton
						variant="text"
						sx={{ fontSize: '5rem' }}
					/>
				</Grid>
				<Grid size={12}>
					<Skeleton
						variant="text"
						sx={{ fontSize: '2rem' }}
					/>
				</Grid>
			</Grid>
		</Box>
	);
};

export default ContentFallback;
