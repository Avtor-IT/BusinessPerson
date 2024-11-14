import Grid2 from '@mui/material/Unstable_Grid2';
import { MyCompany } from 'widgets/MyCompany';
import { Notifications } from 'widgets/Notifications';
import { MyManager } from 'widgets/MyManager';
// import { MyDocuments } from 'widgets/MyDocuments';
import { MyRecommends } from 'widgets/MyRecommends';
import ServiceSection from 'widgets/ServiceBlock';

const MainPage = () => {
	return (
		<>
			<Grid2
				container
				columns={5}
				columnSpacing={'16px'}
				rowSpacing={'16px'}
			>
				<Grid2
					item
					xl={2}
					xs={3}
				>
					<MyCompany />
				</Grid2>
				<Grid2
					item
					xl
					xs={2}
				>
					<Notifications />
				</Grid2>
				<Grid2
					item
					xl={2}
					xs={5}
				>
					<MyManager />
				</Grid2>
			</Grid2>
			<Grid2
				container
				columns={5}
				columnSpacing={'16px'}
				rowSpacing={'16px'}
			>
				{/* <Grid2
					item
					xl={2}
					xs={5}
				>
					<MyDocuments />
				</Grid2> */}
				<Grid2
					item
					xl={5}
					xs={5}
				>
					<MyRecommends />
				</Grid2>
			</Grid2>
			<ServiceSection mt="72px" />
		</>
	);
};

export default MainPage;
