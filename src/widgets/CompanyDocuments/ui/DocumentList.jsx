import { Typography } from '@mui/material';
import { Box, Grid } from '@mui/system';
import { useGetCompanyDocuments } from 'entities/Documents';
import DocumentCard from './DocumentCard';
import {
	FilterDocuments,
	searchSelector,
	useDocumentsFilterStore,
} from 'features/DocumentsFilter';
import { useMemo } from 'react';
import FolderCard from './FolderCard';

const DocumentList = ({ company, ...otherProps }) => {
	const { data: documents, isLoading, error } = useGetCompanyDocuments();
	const search = useDocumentsFilterStore(searchSelector);

	const foldersList = useMemo(() => {
		if (!documents) return [];
		return Array.from(
			new Set(documents.filter((doc) => doc['TYPE'] === 'folder'))
		);
	}, [documents]);

	const filteredDocuments = useMemo(() => {
		if (search) {
			return documents.filter((doc) =>
				doc['NAME'].toLowerCase().includes(search.toLowerCase())
			);
		}
		return documents;
	}, [documents, search]);

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
			<FilterDocuments />
			<Typography
				variant="M24"
				color="var(--secondary)"
				mt={4}
				mb={3}
			>
				{company['TITLE']}
			</Typography>
			<Grid
				container
				spacing={2}
				columns={3}
			>
				{filteredDocuments.map((document) => (
					<DocumentCard
						key={document.ID}
						document={document}
						alignItems="stretch"
						size={1}
					/>
				))}
				{filteredDocuments.length === 0 && (
					<Typography variant="M20">Документы не найдены.</Typography>
				)}

				{foldersList.map((folder) => (
					<FolderCard
						key={folder.ID}
						folder={folder}
						size={3}
					/>
				))}
			</Grid>
		</Box>
	);
};

export default DocumentList;
