import { CircularProgress, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useGetFolderChildren } from 'entities/Documents';
import { AnimatePresence } from 'motion/react';
import * as motion from 'motion/react-client';
import { useEffect, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router';
import { AppRoutes, RoutePath } from 'shared/router';
import FilesList from '../file/FIlesList';
import { folderVariants } from '../model/animations';

const OpenedFolder = ({ path, folder, ...props }) => {
	const { companyTitle } = useParams();
	const navigate = useNavigate();

	const {
		data: files,
		isLoading,
		error,
	} = useGetFolderChildren(folder['DOWNLOAD_URL']);

	const nextFolder = useMemo(() => {
		if (!files || !path.length) return undefined;
		const nextFolder = files.find(
			(file) => file['NAME'] === path[0] && file['TYPE'] === 'folder'
		);

		return nextFolder;
	}, [path, files]);

	useEffect(() => {
		if (!nextFolder && path.length) {
			navigate(
				`${RoutePath[AppRoutes.COMPANY]}/${companyTitle}/documents`,
				{
					replace: true,
				}
			);
		}
	}, [nextFolder, path]);

	if (error) {
		return (
			<Box
				{...props}
				textAlign="center"
			>
				<Typography variant="R20">
					Ошибка при загрузке файлов.
				</Typography>
			</Box>
		);
	}

	if (isLoading) {
		return (
			<Box
				{...props}
				textAlign="center"
			>
				<CircularProgress color="secondary" />
			</Box>
		);
	}

	if (!files?.length) {
		return (
			<Box
				{...props}
				textAlign="center"
			>
				<Typography variant="R20">Папка пуста.</Typography>
			</Box>
		);
	}

	if (nextFolder) {
		return (
			<OpenedFolder
				path={path.slice(1)}
				folder={nextFolder}
				{...props}
			/>
		);
	}

	return (
		<AnimatePresence>
			<motion.div
				variants={folderVariants}
				initial="hidden"
				animate="visible"
				exit="hidden"
				transition={{ duration: 0.1 }}
			>
				<FilesList files={files} />
			</motion.div>
		</AnimatePresence>
	);
};

export default OpenedFolder;
