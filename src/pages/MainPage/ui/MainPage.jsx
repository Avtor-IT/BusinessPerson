import { Grid } from '@mui/system';
import { CompanyCard } from 'widgets/CompanyCard';
import { Notifications } from 'widgets/Notifications';
import { MyManager } from 'widgets/ManagerCard';
import { MyRecommends } from 'widgets/RecommendationsCard';
import { Stack } from '@mui/material';
import { ServiceSection } from 'widgets/ServiceSection';

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
						<CompanyCard />
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
						<MyRecommends />
					</Grid>
				</Grid>
			</Stack>
			<ServiceSection marginTop={4} />
		</>
	);
};

export default MainPage;
