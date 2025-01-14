import { Grid, Stack } from '@mui/system';
import {
	DocumentModal,
	DownloadDocumentButton,
	ExportDocumentButton,
} from 'entities/Documents';
import { Card } from 'shared/ui/Card';
import DocumentTitle from './DocumentTitle';
import { useState } from 'react';
import { Typography } from '@mui/material';
import { formatDate } from 'shared/lib';

const DocumentCard = ({ document, ...props }) => {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	if (document.TYPE !== 'file') {
		return null;
	}

	return (
		<Grid
			{...props}
			minHeight={200}
		>
			<DocumentModal
				open={open}
				onClose={handleClose}
				document={document}
			/>
			<Card height="100%">
				<Stack
					height="100%"
					justifyContent="space-between"
					gap={2}
				>
					<DocumentTitle
						name={document.NAME}
						onClick={handleOpen}
					/>
					<Stack
						direction="row"
						justifyContent="space-between"
						alignItems="end"
					>
						<Stack
							direction="row"
							spacing={1}
							alignItems="center"
							marginTop={4}
						>
							<ExportDocumentButton />
							<DownloadDocumentButton document={document} />
						</Stack>
						<Stack
							alignItems="end"
							gap={1}
						>
							{document.UPDATE_TIME !== document.CREATE_TIME && (
								<Typography
									variant="L16"
									color="var(--tertiary)"
								>
									Обновлено:{' '}
									{formatDate(document.UPDATE_TIME)}
								</Typography>
							)}
							<Typography
								variant="L16"
								color="var(--tertiary)"
							>
								Загружено: {formatDate(document.CREATE_TIME)}
							</Typography>
						</Stack>
					</Stack>
				</Stack>
			</Card>
		</Grid>
	);
};

export default DocumentCard;
