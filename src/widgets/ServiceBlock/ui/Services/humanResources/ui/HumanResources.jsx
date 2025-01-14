import { Grid } from '@mui/system';
import { Card } from 'shared/ui/Card';
import ServiceBlock from '../../../ServiceBlock';
import HumanResourcesReports from './HumanResourcesReports';
import Employees from './Employees';

const HumanResources = () => {
	return (
		<ServiceBlock serviceTitle="Кадровое дело">
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
		</ServiceBlock>
	);
};

export default HumanResources;
