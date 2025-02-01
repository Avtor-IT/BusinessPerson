import { Stack } from '@mui/system';
import ReportsCard from '../../ui/ReportsCard';
import {
	humanResoursesReferences,
	humanResoursesReports,
} from '../model/actions';
import ReportsList from '../../ui/ReportsList';
import ReportsUnloading from '../../ui/ReportUnloading';

const HumanResourcesReports = () => {
	return (
		<ReportsCard>
			<Stack spacing={2}>
				{humanResoursesReports.map((reportGroup, i) => (
					<ReportsList
						key={i}
						listTitle={reportGroup.title}
						listItems={reportGroup.reports}
						onItemClick={(item) => console.log(item)}
					/>
				))}

				{humanResoursesReferences.map((reference, i) => (
					<ReportsUnloading
						key={i}
						title={reference.title}
					/>
				))}
			</Stack>
		</ReportsCard>
	);
};

export default HumanResourcesReports;
