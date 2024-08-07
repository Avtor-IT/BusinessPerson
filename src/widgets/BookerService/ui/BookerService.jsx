import React from 'react';
import { Grid } from '@mui/material';
import { TaxesInfographics, TaxesTable } from 'entities/Tax';

const BookerService = () => {
	return (
		<Grid
			container
			columns={5}
			spacing={{ xs: '16px' }}
		>
			<Grid
				item
				xs={5}
				xl={3}
			>
				<TaxesTable />
			</Grid>
			<Grid
				item
				xs={5}
				xl={2}
			>
				<TaxesInfographics />
			</Grid>
		</Grid>
	);
};

export default BookerService;
