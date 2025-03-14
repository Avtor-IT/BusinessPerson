import { Card, CardContent, CardHeader, Typography } from '@mui/material';

const BillCard = () => {
	return (
		<Card>
			<CardHeader
				title="Название услуги"
				action={
					<Typography
						variant="M20"
						color="tertiary.main"
					>
						Бухгалтерия
					</Typography>
				}
			/>
			<CardContent>Название услуги</CardContent>
		</Card>
	);
};

export default BillCard;
