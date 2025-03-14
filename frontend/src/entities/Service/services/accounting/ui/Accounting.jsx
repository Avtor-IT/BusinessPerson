import { Grid } from '@mui/system';
import AccountingReports from './AccountingReports';
import { ReportPlaceholder } from '../reports';
import useAccountingReportStore from '../model/accountingReportStore';

const getReportComponent = ({ report }) => {
	if (!report?.component) return <ReportPlaceholder />;

	return <report.component />;
};

const Accounting = () => {
	const report = useAccountingReportStore.use.report();

	return (
		<Grid
			container
			spacing={2}
			columns={5}
			alignItems="stretch"
		>
			<Grid size={1}>
				<AccountingReports />
			</Grid>
			<Grid size="grow">{getReportComponent({ report })}</Grid>
		</Grid>
	);
};

export default Accounting;
