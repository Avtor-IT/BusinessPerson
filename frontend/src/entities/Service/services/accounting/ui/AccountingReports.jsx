import { Stack } from '@mui/system';
import { useEffect } from 'react';
import ReportsCard from '../../ui/ReportsCard';
import ReportsList from '../../ui/ReportsList';
import ReportsUnloading from '../../ui/ReportUnloading';
import {
	accountingReferences,
	accountingReports,
} from '../model/accountingReports';
import useAccountingReportStore from '../model/accountingReportStore';

const AccountingReports = () => {
	const report = useAccountingReportStore.use.report();
	const setReport = useAccountingReportStore.use.setReport();

	useEffect(() => {
		setReport(accountingReports[0].reports[0]);
	}, []);

	return (
		<ReportsCard>
			<Stack gap={2}>
				{accountingReports.map((reportGroup, i) => (
					<ReportsList
						key={i}
						listTitle={reportGroup.title}
						listItems={reportGroup.reports}
						onItemClick={(item) => setReport(item)}
						active={(item) => {
							return item?.title === report?.title;
						}}
					/>
				))}
				{accountingReferences.map((reference, i) => (
					<ReportsUnloading
						key={i}
						title={reference.title}
					/>
				))}
			</Stack>
		</ReportsCard>
	);
};

export default AccountingReports;
