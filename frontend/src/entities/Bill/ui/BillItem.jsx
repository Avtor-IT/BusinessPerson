import { Grid } from '@mui/system';
import BillActionCard from './BillActionCard';
import BillCard from './BillCard';

const BillItem = () => {
	return (
		<Grid
			container
			columns={4}
			spacing={2}
		>
			<Grid size={3}>
				<BillCard />
			</Grid>
			<Grid size={1}>
				<BillActionCard />
			</Grid>
		</Grid>
	);
};

export default BillItem;
