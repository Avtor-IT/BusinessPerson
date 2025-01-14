import { Tooltip, Typography } from '@mui/material';
import { Grid } from '@mui/system';
import { DotsHorizontal } from 'shared/icons/DotsHorizontal';
import splitFilename from 'shared/lib/splitFilename';
import cls from './DocumentTitle.module.scss';

const DocumentTitle = ({ name, onClick }) => {
	const [title] = splitFilename(name);

	return (
		<Grid
			container
			onClick={onClick}
			sx={{ cursor: 'pointer' }}
			alignItems="start"
		>
			<Grid size="grow">
				<Tooltip
					title={name}
					placement="top-start"
					enterDelay={200}
					enterNextDelay={200}
				>
					<Typography
						variant="M24"
						className={cls.TitleContainer}
						maxHeight={84}
					>
						{title}
					</Typography>
				</Tooltip>
			</Grid>
			<Grid size={1}>
				<DotsHorizontal />
			</Grid>
		</Grid>
	);
};

export default DocumentTitle;
