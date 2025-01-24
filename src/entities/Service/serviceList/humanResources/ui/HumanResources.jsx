import { Grid } from '@mui/system';
import { Card } from 'shared/ui/Card';
import HumanResourcesReports from './HumanResourcesReports';
import Employees from './Employees';

const HumanResources = () => {
	return (
		<Grid
			container
			spacing={2}
			columns={5}
			flexGrow={1}
		>
			<Grid size={1}>
				<Card height="100%">
					<HumanResourcesReports />
				</Card>
			</Grid>
			<Grid size={4}>
				<Card height="100%">
					<Employees />
				</Card>
			</Grid>
		</Grid>
	);
};

export default HumanResources;
