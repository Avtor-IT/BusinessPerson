import { useMemo } from 'react';
import { Typography } from '@mui/material';
import { Box, Stack } from '@mui/system';
import { useGetCompanyDocuments } from 'entities/Documents';
import Folder from './folder/Folder';
import { Card } from 'shared/ui/Card';
import FilesList from './file/FilesList';
import {
	FilterDocuments,
	useDocumentsFilterStore,
} from 'features/Documents/DocumentsFilter';

const DocumentList = ({ company, ...otherProps }) => {
	const { data: documents, isLoading, error } = useGetCompanyDocuments();
	const { search } = useDocumentsFilterStore.use.filters();

	const foldersList = useMemo(() => {
		if (!documents) return [];
		return documents.filter((doc) => doc['TYPE'] === 'folder');
	}, [documents]);

	// @TODO: Система поиска поменяется
	const filteredDocuments = useMemo(() => {
		if (!documents) return [];
		const files = documents.filter((doc) => doc['TYPE'] === 'file');
		if (search) {
			return files.filter((doc) =>
				doc['NAME'].toLowerCase().includes(search.toLowerCase())
			);
		}
		return files;
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
			<Stack
				gap={2}
				paddingBottom={2}
			>
				{foldersList.map((folder) => (
					<Folder
						key={folder.ID}
						folder={folder}
					/>
				))}

				{filteredDocuments.length ? (
					<Card
						minHeight={76}
						variant="no-shadow"
						sx={{ padding: '0 !important' }}
					>
						<FilesList files={filteredDocuments} />
					</Card>
				) : null}

				{filteredDocuments.length === 0 && (
					<Typography variant="M20">Документы не найдены.</Typography>
				)}
			</Stack>
		</Box>
	);
};

export default DocumentList;
