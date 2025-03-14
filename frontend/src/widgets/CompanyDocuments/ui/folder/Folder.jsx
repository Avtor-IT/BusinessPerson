import { CircularProgress } from '@mui/material';
import { Stack } from '@mui/system';
import { useGetFolderChildren } from 'entities/Documents';
import { AnimatePresence } from 'motion/react';
import * as motion from 'motion/react-client';
import { useNavigate, useParams } from 'react-router';
import FilesList from '../file/FilesList';
import { folderVariants } from '../model/animations';
import FolderCard from './FolderCard';
import FolderTitle from './FolderTitle';
import OpenedFolder from './OpenedFolder';

const Folder = ({ folder, open }) => {
	const { companyTitle, '*': urlPath } = useParams();
	const navigate = useNavigate();

	const pathArray = urlPath ? urlPath.split('/') : [];
	const { data: files, isLoading } = useGetFolderChildren(
		folder['DOWNLOAD_URL']
	);

	if (isLoading) {
		return (
			<FolderCard
				title={
					<Stack
						direction="row"
						alignItems="center"
						color="var(--secondary)"
						gap={1}
					>
						{folder.NAME}
						<CircularProgress
							size="1.5rem"
							color="secondary"
						/>
					</Stack>
				}
				sx={{
					opacity: '0.8',
				}}
			/>
		);
	}

	if (open) {
		return (
			<FolderCard
				title={<FolderTitle pathArray={pathArray} />}
				onTitleClick={(e) => {
					e.stopPropagation();
					navigate(`/company/${companyTitle}/documents/`);
				}}
				open={open}
			>
				<AnimatePresence>
					<motion.div
						variants={folderVariants}
						initial="hidden"
						animate="visible"
						exit="hidden"
						transition={{ duration: 0.1 }}
					>
						<OpenedFolder
							padding="16px 24px"
							path={pathArray.slice(1)}
							folder={folder}
						/>
					</motion.div>
				</AnimatePresence>
			</FolderCard>
		);
	}

	return (
		<FolderCard
			title={folder.NAME}
			onTitleClick={() => {
				navigate(
					`/company/${companyTitle}/documents/${folder['NAME']}`
				);
			}}
			open={open}
			sx={{
				cursor: 'pointer',
			}}
		>
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
		</FolderCard>
	);
};

export default Folder;
