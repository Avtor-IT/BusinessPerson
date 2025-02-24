import { Box, CircularProgress, Modal, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { useEffect, useState } from 'react';
import useGetBlob from '../hooks/useGetBlob';
import DownloadDocumentButton from './DownloadDocumentButton';
import RenderFile from './RenderFile';

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 800,
	maxHeight: '100%',
	bgcolor: 'background.paper',
	boxShadow: 24,
	outline: 'none',
	borderRadius: '8px',
	overflow: 'hidden',
};

const DocumentModal = ({ open, onClose, document }) => {
	const { data: blob, isError } = useGetBlob(document.DOWNLOAD_URL);
	const [content, setContent] = useState(null);
	const [fetching, setFetching] = useState(true);

	useEffect(() => {
		if (blob) {
			const blobType = blob.type.split(';')[0];
			const reader = new FileReader();
			reader.onload = () => {
				setContent(reader.result);
				setFetching(false);
			};

			if (blobType === 'text/plain') {
				reader.readAsText(blob);
			} else if (
				blobType.startsWith('image/') ||
				blobType === 'application/pdf'
			) {
				reader.readAsDataURL(blob);
			} else {
				// Неподдерживаемый формат
				setFetching(false);
			}
		}
	}, [blob]);

	if (isError) {
		return (
			<Modal
				open={open}
				onClose={onClose}
			>
				<Box sx={style}>
					<Box p={2}>
						<Typography
							variant="M24"
							maxWidth="calc(100% - 2rem)"
							overflow="hidden"
							textOverflow="ellipsis"
						>
							Произошла ошибка при загрузке документа.
						</Typography>
					</Box>
				</Box>
			</Modal>
		);
	}

	return (
		<Modal
			open={open}
			onClose={onClose}
		>
			<Box sx={style}>
				<Box p={2}>
					<Stack
						direction="row"
						gap={1}
						alignItems="center"
					>
						<Typography
							variant="M24"
							maxWidth="calc(100% - 2rem)"
							overflow="hidden"
							textOverflow="ellipsis"
						>
							{document.NAME}
						</Typography>

						<DownloadDocumentButton
							document={document}
							style={{ height: '1rem' }}
						/>
					</Stack>
				</Box>
				{fetching ? (
					<Stack
						alignItems="center"
						justifyContent="center"
						p={4}
						color="var(--primary)"
					>
						<CircularProgress color="inherit" />
					</Stack>
				) : (
					<Box>
						<RenderFile
							content={content}
							type={blob.type.split(';')[0]}
						/>
					</Box>
				)}
			</Box>
		</Modal>
	);
};

export default DocumentModal;
