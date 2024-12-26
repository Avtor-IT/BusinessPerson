import { Grid } from '@mui/material';
import { TaxesInfographics, TaxesTable } from 'entities/TaxService';

const BookerService = () => {
	return (
		<Grid
			container
			columns={5}
			spacing={{ xs: '16px' }}
		>
			<Grid
				item
				xl={2}
			>
				<TaxesInfographics />
			</Grid>
			<Grid
				item
				xl={2}
			>
				<TaxesTable />
			</Grid>
		</Grid>
	);
};

export default BookerService;
