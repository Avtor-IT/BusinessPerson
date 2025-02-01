import { Typography } from '@mui/material';
import { Card } from 'shared/ui/Card';

const DocsToApprove = ({ ...props }) => {
	return (
		<Card
			{...props}
			position="relative"
		>
			<Typography variant="M24">Документы на&nbsp;утверждение</Typography>

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
				Документов нет
			</Typography>
		</Card>
	);
};

export default DocsToApprove;
