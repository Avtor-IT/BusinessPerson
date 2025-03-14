import { Typography } from '@mui/material';
import { Box, Stack } from '@mui/system';
import { Link, useLocation } from 'react-router-dom';
import { FolderIcon } from 'shared/icons/Folder';

const FolderItem = ({ folder, ...props }) => {
	const location = useLocation();

	return (
		<Link to={`${location.pathname}/${folder.NAME}`}>
			<Box
				minHeight="91px"
				{...props}
			>
				<Stack
					direction="row"
					alignSelf="center"
					gap={2}
				>
					<FolderIcon />
					<Typography variant="M20">{folder.NAME}</Typography>
				</Stack>
			</Box>
		</Link>
	);
};

export default FolderItem;
