import { CircularProgress } from '@mui/material';
import { Stack } from '@mui/system';
import ImportIcon from 'shared/icons/Import';
import { Button } from 'shared/ui/Button';
import useDownloadMutation from '../hooks/useDownloadMutation';

const DownloadDocumentButton = ({ icon, document, style }) => {
	const { mutate: download, isPending: isDownloading } = useDownloadMutation(
		document.ID
	);

	return (
		<Button
			disabled={isDownloading}
			variant="unStyled"
			onClick={() =>
				download({
					url: document.DOWNLOAD_URL,
					params: {
						filename: document.NAME,
					},
				})
			}
			style={style}
		>
			<Stack
				direction="row"
				alignItems="center"
				spacing={1}
				height="1rem"
				minWidth="24px"
			>
				{isDownloading ? (
					<CircularProgress
						color="inherit"
						size="1rem"
					/>
				) : (
					icon || <ImportIcon strokeWidth="1.5" />
				)}
			</Stack>
		</Button>
	);
};

export default DownloadDocumentButton;
