import { Fragment } from 'react';
import * as motion from 'motion/react-client';
import FileItem from './FileItem';
import { Box } from '@mui/system';
import FolderItem from '../folder/FolderItem';

const FilesList = ({ files }) => {
	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0 },
	};

	return files.map((file, i) => (
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
				{i < files.length - 1 && (
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
