import { Grid } from '@mui/system';
import { Card } from 'shared/ui/Card/index.js';
import ServiceBlock from 'widgets/ServiceBlock/ui/ServiceBlock.jsx';
import AccountingReports from 'widgets/ServiceBlock/ui/Services/accounting/AccountingReports.jsx';
import Taxes from 'widgets/ServiceBlock/ui/Services/accounting/Taxes.jsx';
import DocsECP from 'widgets/ServiceBlock/ui/Services/accounting/DocsECP.jsx';
import DocsToApprove from 'widgets/ServiceBlock/ui/Services/accounting/DocsToApprove.jsx';

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
						<DocsECP />
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
