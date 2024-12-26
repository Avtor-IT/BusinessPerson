import { CircularProgress, Typography } from '@mui/material';
import { Grid, Stack } from '@mui/system';
import { useDownloadMutation } from 'entities/Documents';
import humanFileSize from 'entities/Documents/lib/humanFileSize';
import ImportIcon from 'shared/assets/icons/Import';
import splitFilename from 'shared/lib/splitFilename';
import { Button } from 'shared/ui/Button';
import { Card } from 'shared/ui/Card';

const renderDocumentName = (name) => {
	const [title, extension] = splitFilename(name);

	return extension ? (
		<Stack
			direction="row"
			justifyContent="space-between"
			alignItems="start"
			spacing={2}
		>
			<Typography variant="M24">{title}</Typography>
			<Typography
				variant="M24"
				fontStyle="300"
				color="var(--tertiary)"
			>
				{extension}
			</Typography>
		</Stack>
	) : (
		<Typography variant="M24">{title}</Typography>
	);
};

const DocumentCard = ({ document, ...props }) => {
	const { mutate: download, isPending: isDownloading } = useDownloadMutation(
		document.ID
	);
	return (
		<Grid {...props}>
			<Card height="100%">
				<Stack
					height="100%"
					justifyContent="space-between"
				>
					{renderDocumentName(document.NAME)}
					<Stack
						direction="row"
						spacing={2}
						alignItems="center"
						marginTop={4}
					>
						<Typography variant="R16">
							{humanFileSize(document.SIZE)}
						</Typography>
						<Button
							disabled={isDownloading}
							variant="unStyled"
							onClick={() =>
								download &&
								download({
									url: document.DOWNLOAD_URL,
									params: {
										filename: document.NAME,
									},
								})
							}
						>
							<Stack
								direction="row"
								alignItems="center"
								spacing={1}
								height={'1rem'}
							>
								{isDownloading ? (
									<CircularProgress
										color="inherit"
										size="1rem"
									/>
								) : (
									<ImportIcon variant="R16" />
								)}
							</Stack>
						</Button>
					</Stack>
				</Stack>
			</Card>
		</Grid>
	);
};

export default DocumentCard;
