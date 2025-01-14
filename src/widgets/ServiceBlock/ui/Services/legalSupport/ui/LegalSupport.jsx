import { Grid } from '@mui/system';
import { Card } from 'shared/ui/Card';
import ServiceBlock from '../../../ServiceBlock';
import LegalSupportReports from './LegalSupportReports';
import Docs from './Docs';

const LegalSupport = () => {
	return (
		<ServiceBlock serviceTitle="Юридическая поддержка">
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
		</ServiceBlock>
	);
};

export default LegalSupport;
