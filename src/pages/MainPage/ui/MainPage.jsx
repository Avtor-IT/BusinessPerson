import { Grid } from '@mui/system';
import { MyCompany } from 'widgets/MyCompany';
import { Notifications } from 'widgets/Notifications';
import { MyManager } from 'widgets/MyManager';
// import { MyDocuments } from 'widgets/MyDocuments';
import { MyRecommends } from 'widgets/MyRecommends';
import ServiceSection from 'widgets/ServiceBlock';
import { Stack } from '@mui/material';

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
							xs: 3,
						}}
					>
						<MyCompany />
					</Grid>
					<Grid size={1}>
						<Notifications />
					</Grid>
					<Grid
						size={{
							xl: 2,
							xs: 5,
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
