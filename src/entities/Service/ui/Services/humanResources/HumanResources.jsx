import { Grid } from '@mui/system';
import { Card } from 'shared/ui/Card/index.js';
import ServiceBlock from 'entities/Service/ui/ServiceBlock.jsx';
import HumanResourcesReports from 'entities/Service/ui/Services/humanResources/HumanResourcesReports.jsx';
import Employees from 'entities/Service/ui/Services/humanResources/Employees.jsx';

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
