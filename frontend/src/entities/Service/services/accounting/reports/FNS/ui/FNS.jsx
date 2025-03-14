import { Grid } from '@mui/system';
import Taxes from './Taxes';
import DocsEcp from './DocsECP';
import DocsToApprove from './DocsToApprove';

const FNS = () => {
	return (
		<Grid
			container
			columns={4}
			spacing={2}
			direction="row"
			alignItems="stretch"
			height="100%"
		>
			<Grid size={2}>
				<Taxes height="100%" />
			</Grid>
			<Grid size={1}>
				<DocsEcp height="100%" />
			</Grid>
			<Grid size={1}>
				<DocsToApprove height="100%" />
			</Grid>
		</Grid>
	);
};

export default FNS;
