import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { CompanyDocuments } from 'widgets/CompanyDocuments';

const DocumentsPage = () => {
	return (
		<Box>
			<Typography variant="M40">Документы компании</Typography>
			<CompanyDocuments />
		</Box>
	);
};

export default DocumentsPage;
