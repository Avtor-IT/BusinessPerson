import { Grid } from '@mui/system';
import { Card } from 'shared/ui/Card';
import ServiceBlock from '../../../ServiceBlock';
import AccountingReports from './AccountingReports';
import DocsToApprove from './DocsToApprove';
import Taxes from './Taxes';
import DocsEcp from './DocsECP';

const Accounting = () => {
	return (
		<ServiceBlock serviceTitle="Бухгалтерское обслуживание">
			<Grid
				container
				spacing={2}
				columns={5}
				flexGrow={1}
			>
				<Grid size={1}>
					<Card height="100%">
						<AccountingReports />
					</Card>
				</Grid>
				<Grid size={2}>
					<Card height="100%">
						<Taxes />
					</Card>
				</Grid>
				<Grid size={1}>
					<Card height="100%">
						<DocsEcp />
					</Card>
				</Grid>
				<Grid size={1}>
					<Card height="100%">
						<DocsToApprove />
					</Card>
				</Grid>
			</Grid>
		</ServiceBlock>
	);
};

export default Accounting;
