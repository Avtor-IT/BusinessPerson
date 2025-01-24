import { Grid } from '@mui/system';
import { Card } from 'shared/ui/Card';
import AccountingReports from './AccountingReports';
import DocsToApprove from './DocsToApprove';
import Taxes from './Taxes';
import DocsEcp from './DocsECP';

const Accounting = () => {
	return (
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
	);
};

export default Accounting;
