import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Card } from './Card';
import Circle from './Circle';

const TitledCard = ({ children, circleSx, title, ...props }) => {
	return (
		<Card
			{...props}
			position="relative"
		>
			<Circle
				sx={{
					background: 'var(--primary)',
					left: -220,
					top: -594,
					...circleSx,
				}}
			/>
			{title ? (
				<Box position="relative">
					<Typography
						zIndex={1}
						position={'absolute'}
						variant="M24"
						color="#fff"
						display="inline-block"
						width="100%"
					>
						{title}
					</Typography>
				</Box>
			) : null}
			{children}
		</Card>
	);
};

export default TitledCard;
