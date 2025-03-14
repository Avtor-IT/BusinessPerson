import { Grid } from '@mui/system';
import HumanResourcesReports from './HumanResourcesReports';
import Employees from './Employees';
import DocsToApprove from './DocsToApprove';

const HumanResources = () => {
	return (
		<Grid
			container
			spacing={2}
			columns={5}
			flexGrow={1}
		>
			<Grid size={1}>
				<HumanResourcesReports />
			</Grid>
			<Grid size={3}>
				<Employees height="100%" />
			</Grid>
			<Grid size={1}>
				<DocsToApprove height="100%" />
			</Grid>
		</Grid>
	);
};

export default HumanResources;
