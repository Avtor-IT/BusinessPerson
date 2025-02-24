import { Typography } from '@mui/material';
import { Stack } from '@mui/system';
import {
	DocumentModal,
	DownloadDocumentButton,
	ExportDocumentButton,
} from 'entities/Documents';
import { useState } from 'react';
import { formatDate } from 'shared/lib';
import DocumentTitle from './DocumentTitle';

const FileItem = ({ document, ...props }) => {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<>
			<DocumentModal
				open={open}
				onClose={handleClose}
				document={document}
			/>
			<Stack
				height="100%"
				justifyContent="space-between"
				{...props}
			>
				<DocumentTitle
					name={document.NAME}
					onClick={handleOpen}
				/>
				<Stack
					direction="row"
					justifyContent="space-between"
					alignItems="end"
					mt={2}
				>
					<Stack
						alignItems="end"
						gap={1}
					>
						{document.UPDATE_TIME !== document.CREATE_TIME && (
							<Typography
								variant="L16"
								color="var(--tertiary)"
							>
								Обновлено: {formatDate(document.UPDATE_TIME)}
							</Typography>
						)}
						<Typography
							variant="L16"
							color="var(--tertiary)"
						>
							Загружено: {formatDate(document.CREATE_TIME)}
						</Typography>
					</Stack>

					<Stack
						direction="row"
						alignItems="center"
						gap={1}
					>
						<ExportDocumentButton />
						<DownloadDocumentButton document={document} />
					</Stack>
				</Stack>
			</Stack>
		</>
	);
};

export default FileItem;
