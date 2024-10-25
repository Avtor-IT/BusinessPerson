import { Grid } from '@mui/material';
import { MyManager } from 'widgets/MyManager';
import { MyDocuments } from 'widgets/MyDocuments';
import { MyRecomends } from 'widgets/MyRecomends';
import { MyCompany } from 'widgets/MyCompany';
import ServiceSection from 'widgets/ServiceBlock';

const MainPage = () => {
	return (
		<>
			<Grid
				container
				columns={5}
				columnSpacing={'19px'}
				rowSpacing={'16px'}
			>
				<Grid
					item
					xl={2}
				>
					<MyCompany />
					{/*<MyCompanyAccounts
					 LeftComponent={MyCompany}
					 RightComponent={MyAccounts}
					 />*/}
				</Grid>
				<Grid
					item
					xl={1}
				>
					Уедомления
				</Grid>
				<Grid
					item
					xl={2}
					xs={5}
				>
					<MyManager />
				</Grid>

				<Grid
					item
					xl={2}
					xs={5}
				>
					<MyDocuments />
				</Grid>
				<Grid
					item
					xl={3}
					xs={5}
				>
					<MyRecomends />
				</Grid>
			</Grid>
			<ServiceSection mt="72px" />
		</>
	);
};

export default MainPage;
