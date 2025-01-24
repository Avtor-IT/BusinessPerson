import { AnimatePresence } from 'motion/react';
import * as motion from 'motion/react-client';
import { useGetFolderChildren } from 'entities/Documents';
import { useMemo } from 'react';
import FolderCard from './FolderCard';
import FilesList from '../file/FIlesList';
import { CircularProgress } from '@mui/material';
import { Stack } from '@mui/system';
import { useLocation, useNavigate, useParams } from 'react-router';
import OpenedFolder from './OpenedFolder';
import { folderVariants } from '../model/animations';
import FolderTitle from './folderTitle';

const Folder = ({ folder }) => {
	const { companyTitle, '*': urlPath } = useParams();
	const location = useLocation();
	const navigate = useNavigate();

	const pathArray = urlPath ? urlPath.split('/') : [];
	const { data: files, isLoading } = useGetFolderChildren(
		folder['DOWNLOAD_URL']
	);

	const open = useMemo(() => {
		return pathArray[0] === folder['NAME'];
	}, [location]);

	if (isLoading) {
		return (
			<FolderCard
				title={
					<Stack
						direction="row"
						alignItems="center"
						gap={1}
					>
						{folder.NAME}
						<CircularProgress
							size="1.5rem"
							color="inherit"
						/>
					</Stack>
				}
				sx={{
					opacity: '0.8',
				}}
			/>
		);
	}

	if (pathArray[0] === folder['NAME']) {
		return (
			<FolderCard
				title={<FolderTitle pathArray={pathArray} />}
				// onTitleClick={() =>
				// 	navigate(
				// 		`${
				// 			RoutePath[AppRoutes.COMPANY]
				// 		}/${companyTitle}/documents`
				// 	)
				// }
				open={open}
				sx={{}}
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
							{/* <FilesList files={files} /> */}
							<OpenedFolder
								padding="16px 24px"
								path={pathArray.slice(1)}
								folder={folder}
								open={open}
							/>
						</motion.div>
					)}
				</AnimatePresence>
			</FolderCard>
		);
	}

	return (
		<FolderCard
			title={folder.NAME}
			onTitleClick={() =>
				navigate(`/company/${companyTitle}/documents/${folder['NAME']}`)
			}
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
