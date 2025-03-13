import { Typography } from '@mui/material';
import { Grid, Stack } from '@mui/system';
import { LettersSlider } from 'entities/Letter';
import { Card } from 'shared/ui/Card';

const LetterPage = () => {
	return (
		<Grid
			container
			columns={5}
		>
			<Grid size={3}>
				<Card>
					<Stack
						direction="row"
						alignItems="start"
						gap={4}
					>
						<Typography variant="M24">
							Ваши последние
							<br />
							письма
						</Typography>
						<LettersSlider />
					</Stack>
				</Card>
			</Grid>
			<Grid size={2}>
				<Typography variant="M40">Конструктор письма</Typography>
			</Grid>
		</Grid>
	);
};

export default LetterPage;
