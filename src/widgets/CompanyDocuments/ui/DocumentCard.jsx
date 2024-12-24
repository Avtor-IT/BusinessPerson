import { Typography } from '@mui/material';
import { Grid, Stack } from '@mui/system';
import humanFileSize from 'entities/Documents/lib/humanFileSize';
import ImportIcon from 'shared/assets/icons/Import';
import { Button } from 'shared/ui/Button';
import { Card } from 'shared/ui/Card';

const documentName = (name) => {
	const nameArray = name.split('.');

	const title = nameArray.slice(0, -1).join('.');
	const extension = nameArray.at(-1);

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

const DocumentCard = ({ document, download, ...props }) => {
	return (
		<Grid {...props}>
			<Card height="100%">
				<Stack
					height="100%"
					justifyContent="space-between"
				>
					{documentName(document.NAME)}
					<Stack
						direction="row"
						spacing={2}
						alignItems="center"
						marginTop={4}
					>
						<Typography variant="M16">
							{humanFileSize(document.SIZE)}
						</Typography>
						<Button
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
							<ImportIcon />
						</Button>
					</Stack>
				</Stack>
			</Card>
		</Grid>
	);
};

export default DocumentCard;
