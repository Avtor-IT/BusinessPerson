import {
	Button,
	Card,
	CardActions,
	CardContent,
	CardHeader,
	Typography,
} from '@mui/material';

import { Box, Stack } from '@mui/system';
import { DownloadFile } from 'shared/icons/DownloadFile';

const BillActionCard = ({ status }) => {
	if (status === 'needToPay') {
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
	}

	return (
		<Card>
			<CardHeader
				title="Услуга завершена"
				titleTypographyProps={{
					color: 'tertiary.main',
					variant: 'M24',
				}}
			/>
			<CardContent>
				<Box
					sx={{
						paddingLeft: 1,
						borderLeft: '2px solid',
						borderColor: 'tertiary.main',
					}}
				>
					Благодарим за сотрудничество!
					<br />
					<br />
					Все этапы успешно завершены. Вы можете скачать документы или
					оставить отзыв о нашей работе.
				</Box>
			</CardContent>
			<CardActions>
				<Button
					fullWidth
					color="secondary"
					variant="card"
					startIcon={
						<Stack
							sx={(theme) => ({
								'& svg': {
									stroke: theme.palette.secondary.main, // Используем secondary.main из темы
								},
							})}
						>
							<DownloadFile />
						</Stack>
					}
				>
					<Typography
						variant="M20"
						color="inherit"
					>
						Оставить отзыв
					</Typography>
				</Button>
			</CardActions>
		</Card>
	);
};

export default BillActionCard;
