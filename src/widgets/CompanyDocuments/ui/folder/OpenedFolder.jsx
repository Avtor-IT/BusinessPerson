import { useMemo } from 'react';
import { AnimatePresence } from 'motion/react';
import * as motion from 'motion/react-client';
import { CircularProgress, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useGetFolderChildren } from 'entities/Documents';
import { folderVariants } from '../model/animations';
import FilesList from '../file/FIlesList';

const OpenedFolder = ({ path, open, folder, ...props }) => {
	const {
		data: files,
		isLoading,
		error,
	} = useGetFolderChildren(folder['DOWNLOAD_URL']);

	const nextFolder = useMemo(() => {
		if (!files || !path.length) return undefined;
		return files.find(
			(file) => file['NAME'] === path[0] && file['TYPE'] === 'folder'
		);
	}, [path, files]);

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
				<CircularProgress />
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
				open={open}
				folder={nextFolder}
				{...props}
			/>
		);
	}

	return (
		<AnimatePresence>
			{open && (
				<motion.div
					variants={folderVariants}
					initial="hidden"
					animate="visible"
					exit="hidden"
					transition={{ duration: 0.1 }}
				>
					<FilesList files={files} />
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default OpenedFolder;
