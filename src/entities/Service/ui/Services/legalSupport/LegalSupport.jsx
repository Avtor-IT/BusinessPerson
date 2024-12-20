import { Grid } from '@mui/system';
import { Card } from 'shared/ui/Card/index.js';
import ServiceBlock from 'entities/Service/ui/ServiceBlock.jsx';
import LegalSupportReports from 'entities/Service/ui/Services/legalSupport/LegalSupportReports.jsx';
import Docs from 'entities/Service/ui/Services/legalSupport/Docs.jsx';

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
