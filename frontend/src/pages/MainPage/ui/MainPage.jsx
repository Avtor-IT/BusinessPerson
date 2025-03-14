import { Stack } from '@mui/material';
import { Grid } from '@mui/system';
import { CompanyCard } from 'widgets/CompanyCard';
import { MyManager } from 'widgets/ManagerCard';
import { Notifications } from 'widgets/Notifications';
import { MyRecommends } from 'widgets/RecommendationsCard';
import ServiceSection from './../../../widgets/ServiceSection/ui/ServiceSection';

const MainPage = () => {
	return (
		<>
			<Stack spacing={2}>
				<Grid
					container
					columns={5}
					spacing={2}
				>
					<Grid
						size={{
							xl: 2,
							xs: 5,
						}}
					>
						<CompanyCard height="100%" />
					</Grid>
					<Grid size={1}>
						<Notifications />
					</Grid>
					<Grid
						size={{
							xl: 2,
							xs: 4,
						}}
					>
						<MyManager />
					</Grid>
				</Grid>
				<Grid
					container
					columns={5}
					columnSpacing={2}
					rowSpacing={2}
				>
					<Grid size={5}>
						<MyRecommends minHeight="337px" />
					</Grid>
				</Grid>
			</Stack>
			<ServiceSection marginTop={4} />
		</>
	);
};

export default MainPage;
