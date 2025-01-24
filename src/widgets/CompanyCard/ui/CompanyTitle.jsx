import { Tooltip, Typography } from '@mui/material';

const CompanyTitle = ({ title }) => {
	if (!title) {
		console.error(`Company title is not defined`);
		return null;
	}

	return title.length < 15 ? (
		<Typography
			variant="M24"
			color="#fff"
			zIndex={1}
		>
			{title}
		</Typography>
	) : (
		<Tooltip
			title={title}
			placement="top-start"
		>
			<Typography
				variant="M24"
				color="#fff"
				zIndex={1}
			>
				{title.slice(0, 15) + '...'}
			</Typography>
		</Tooltip>
	);
};

export default CompanyTitle;
