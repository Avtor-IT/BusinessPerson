import { Typography } from '@mui/material';
import { Grid, Stack } from '@mui/system';
import { Card } from 'shared/ui/Card';

const FolderCard = ({ folder, ...props }) => {
	return (
		<Grid
			{...props}
			minHeight={200}
		>
			<Card height="100%">
				<Stack
					height="100%"
					justifyContent="space-between"
					gap={2}
				>
					<Typography
						variant="M24"
						color="var(--secondary)"
					>
						{folder.NAME}
					</Typography>
				</Stack>
			</Card>
		</Grid>
	);
};

export default FolderCard;
