import { Tooltip } from '@mui/material';
import { Box } from '@mui/system';

const CompanyTitle = ({ title }) => {
	if (!title) {
		console.error(`Company title is not defined`);
		return null;
	}

	return title.length < 15 ? (
		{ title }
	) : (
		<Tooltip
			title={title}
			placement="top-start"
		>
			<Box>{title.slice(0, 15) + '...'}</Box>
		</Tooltip>
	);
};

export default CompanyTitle;
