import { Grid } from '@mui/system';
import FirstColumn from './FirstColumn';
import SecondColumn from './SecondColumn';
import ThirdColumn from './ThirdColumn';

const ReportPlaceholder = () => {
	return (
		<Grid
			container
			columns={4}
			spacing={2}
			direction="row"
			alignItems="stretch"
			height="100%"
		>
			<Grid size={2}>
				<FirstColumn height="100%" />
			</Grid>
			<Grid size={1}>
				<SecondColumn height="100%" />
			</Grid>
			<Grid size={1}>
				<ThirdColumn height="100%" />
			</Grid>
		</Grid>
	);
};

export default ReportPlaceholder;
