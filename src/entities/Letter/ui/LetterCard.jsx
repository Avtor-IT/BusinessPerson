import { Box, Card, CardContent, Typography } from '@mui/material';

const LetterCard = () => {
	return (
		<Box p={1}>
			<Card>
				<CardContent>
					<Typography variant="M20">№123/А</Typography>
				</CardContent>
			</Card>
		</Box>
		// <Box p={1}>
		// 	<Card sx={{ color: 'tertiary.dark' }}>
		// 		<Stack
		// 			direction="row"
		// 			justifyContent="space-between"
		// 		>
		// 			<Typography variant="M20">№123/А</Typography>
		// 			<Typography variant="M20">28.11.2024</Typography>
		// 		</Stack>

		// 		<Stack
		// 			mt={2}
		// 			direction="row"
		// 			justifyContent="space-between"
		// 		>
		// 			<Typography variant="R16">Тема:</Typography>
		// 			<Typography variant="M16">О подписании договора</Typography>
		// 		</Stack>

		// 		<Stack
		// 			mt={1}
		// 			direction="row"
		// 			justifyContent="space-between"
		// 		>
		// 			<Typography variant="R16">Адресат:</Typography>
		// 			<Typography variant="M16">ООО "Пример"</Typography>
		// 		</Stack>

		// 		<Stack
		// 			mt={3}
		// 			direction="row"
		// 			justifyContent="space-between"
		// 		>
		// 			<Stack
		// 				direction="row"
		// 				gap={1}
		// 			>
		// 				<ImportIcon />
		// 				<ExportIcon />
		// 			</Stack>
		// 			<Typography variant="M20">Отправлено</Typography>
		// 		</Stack>
		// 	</Card>
		// </Box>
	);
};

export default LetterCard;
