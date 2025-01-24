import { Tooltip, Typography } from '@mui/material';
import { Box } from '@mui/system';
import splitFilename from 'shared/lib/splitFilename';
import cls from './DocumentTitle.module.scss';

const DocumentTitle = ({ name, onClick }) => {
	const [title] = splitFilename(name);

	return (
		<Box
			size="grow"
			onClick={onClick}
			sx={{ cursor: 'pointer' }}
		>
			<Tooltip
				title={name}
				placement="top-start"
				enterDelay={200}
				enterNextDelay={200}
			>
				<Typography
					variant="M20"
					component={'div'}
					className={cls.TitleContainer}
					maxHeight={84}
				>
					{title}
				</Typography>
			</Tooltip>
		</Box>
	);
};

export default DocumentTitle;
