import { Typography } from '@mui/material';
import { Box, Grid } from '@mui/system';
import { useGetCompanyDocuments } from 'entities/Documents';
import DocumentCard from './DocumentCard';

const DocumentList = ({ company, ...otherProps }) => {
	const { data: documents, isLoading, error } = useGetCompanyDocuments();

	if (!company) {
		return (
			<Box {...otherProps}>
				<Typography variant="M24">Компания не выбрана</Typography>
			</Box>
		);
	}

	if (isLoading) {
		return (
			<Box {...otherProps}>
				<Typography variant="M20">Загрузка документов...</Typography>
			</Box>
		);
	}

	if (error) {
		return (
			<Box {...otherProps}>
				<Typography variant="M20">
					Ошибка загрузки документов.
				</Typography>
			</Box>
		);
	}

	if (!documents.length) {
		return (
			<Box {...otherProps}>
				<Typography variant="M20">Документы не найдены.</Typography>
			</Box>
		);
	}

	return (
		<Box {...otherProps}>
			<Grid
				container
				spacing={2}
			>
				{documents.map((document) => (
					<DocumentCard
						key={document.ID}
						document={document}
						size={3}
						alignItems="stretch"
					/>
				))}
			</Grid>
		</Box>
	);
};

export default DocumentList;
