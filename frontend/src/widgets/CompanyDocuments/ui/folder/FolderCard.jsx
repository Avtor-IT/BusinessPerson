import { Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import ArrowIcon from 'shared/icons/Arrow';
import { Card } from 'shared/ui/Card';

const FolderCard = ({ children, title, onTitleClick, open, sx, ...props }) => {
	return (
		<Card
			sx={{ ...sx, padding: '0 !important', minHeight: '76px' }}
			variant="no-shadow"
			{...props}
		>
			<Box
				p={3}
				sx={{
					transition: 'border .2s ease',
					borderBottomColor: open
						? 'var(--gray-light)'
						: 'transparent',
					borderBottomWidth: 1,
					borderBottomStyle: 'solid',
				}}
				onClick={onTitleClick}
			>
				<Stack
					direction="row"
					gap={2}
				>
					<Typography
						variant="M24"
						color="var(--secondary)"
					>
						{title}
					</Typography>
					<ArrowIcon
						strokeWidth={2}
						strokeColor="var(--secondary)"
						style={{
							transition: 'transform .1s ease-in-out',
							transform: open ? 'rotate(90deg)' : '',
						}}
					/>
				</Stack>
			</Box>

			{children}
		</Card>
	);
};

export default FolderCard;
