import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useDocumentsFilterStore } from 'features/Documents/DocumentsFilter';
import * as motion from 'motion/react-client';
import { Fragment, useMemo } from 'react';
import FolderItem from '../folder/FolderItem';
import FileItem from './FileItem';

const FilesList = ({ files }) => {
	const itemVariants = {
		hidden: { opacity: 0, y: 10 },
		visible: { opacity: 1, y: 0 },
	};

	const { search } = useDocumentsFilterStore.use.filters();

	const filteredFiles = useMemo(
		() =>
			files.filter((file) =>
				file.NAME.toLowerCase().includes(search.toLowerCase())
			),
		[search, files]
	);

	if (!filteredFiles.length) {
		return (
			<Fragment>
				<motion.div
					variants={itemVariants}
					initial="hidden"
					animate="visible"
					transition={{
						duration: 0.2,
					}}
				>
					<Box padding="16px 24px">
						<Typography variant="R20">
							Документы не найдены
						</Typography>
					</Box>
				</motion.div>
			</Fragment>
		);
	}

	return filteredFiles.map((file, i) => (
		<Fragment key={file.ID}>
			<motion.div
				variants={itemVariants}
				initial="hidden"
				animate="visible"
				transition={{
					duration: 0.2,
					delay: i * 0.1,
				}}
			>
				{file['TYPE'] === 'file' ? (
					<FileItem
						document={file}
						alignItems="stretch"
						padding="16px 24px"
					/>
				) : (
					<FolderItem
						folder={file}
						alignItems="stretch"
						padding="16px 24px"
					/>
				)}
				{i < filteredFiles.length - 1 && (
					<Box
						height="1px"
						bgcolor="var(--gray-light)"
					/>
				)}
			</motion.div>
		</Fragment>
	));
};

export default FilesList;
