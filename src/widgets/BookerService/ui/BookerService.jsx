import React from 'react';
import { Grid } from '@mui/material';
import { TaxesInfographics, TaxesTable } from 'entities/Tax';

const BookerService = () => {
	return (
		<Grid
			container
			columns={5}
			columnSpacing={{ xl: '16px' }}
		>
			<Grid
				item
				xs={3}
			>
				<TaxesTable />
			</Grid>
			<Grid
				item
				xs={2}
			>
				<TaxesInfographics />
			</Grid>
		</Grid>
	);
};

export default BookerService;
