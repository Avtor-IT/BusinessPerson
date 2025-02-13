import { Typography } from '@mui/material';
import { Box, Stack } from '@mui/system';
import { useGetCompanyDocuments } from 'entities/Documents';
import {
	FilterDocuments,
	useDocumentsFilterStore,
} from 'features/Documents/DocumentsFilter';
import { useEffect, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router';
import { AppRoutes, RoutePath } from 'shared/router';
import { Card } from 'shared/ui/Card';
import FilesList from './file/FilesList';
import Folder from './folder/Folder';

const DocumentList = ({ company, ...otherProps }) => {
	const { companyTitle, '*': urlPath } = useParams();
	const navigate = useNavigate();
	const { data: documents, isLoading, error } = useGetCompanyDocuments();
	const { search } = useDocumentsFilterStore.use.filters();

	const foldersList = useMemo(() => {
		if (!documents) return [];
		return documents.filter((doc) => doc['TYPE'] === 'folder');
	}, [documents]);

	const pathArray = useMemo(() => {
		if (urlPath) {
			return urlPath.split('/');
		}
		return [];
	}, [urlPath]);

	useEffect(() => {
		if (foldersList && pathArray) {
			const folder = pathArray[0];
			if (!foldersList.map((folder) => folder.NAME).includes(folder)) {
				navigate(
					`${RoutePath[AppRoutes.COMPANY]}/${companyTitle}/documents`,
					{ replace: true }
				);
			}
		}
	}, [foldersList, pathArray]);

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
						open={pathArray[0] === folder['NAME']}
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
			</Stack>
		</Box>
	);
};

export default DocumentList;
