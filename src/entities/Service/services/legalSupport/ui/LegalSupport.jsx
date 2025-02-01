import { Grid } from '@mui/system';
import { Card } from 'shared/ui/Card';
import LegalSupportReports from './LegalSupportReports';
import Docs from './Docs';

const LegalSupport = () => {
	return (
		<Grid
			container
			spacing={2}
			columns={5}
			flexGrow={1}
		>
			<Grid size={1}>
				<Card height="100%">
					<LegalSupportReports />
				</Card>
			</Grid>
			<Grid size={4}>
				<Card height="100%">
					<Docs />
				</Card>
			</Grid>
		</Grid>
	);
};

export default LegalSupport;
