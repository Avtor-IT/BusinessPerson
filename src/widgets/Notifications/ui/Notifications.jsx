import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect } from 'react';
import { Card } from 'shared/ui/Card';
import cls from './notifications.module.scss';
import SliderDots from './slider/SliderDots';
import SliderNotifications from './slider/SliderNotifications';

export const Notifications = () => {
	// const { data: companies, isError, isLoading } = useCompanies();

	// const [selectedCompany, setSelectedCompany] = React.useState();

	// useEffect(() => {
	// 	if (companies) {
	// 		setSelectedCompany(companies[0]);
	// 	}
	// }, [companies]);

	// if (isLoading) {
	// 	return (
	// 		<Skeleton
	// 			variant="rectangular"
	// 			height="100%"
	// 			sx={{ borderRadius: '16px', minHeight: '192px' }}
	// 		/>
	// 	);
	// }

	// if (isError) {
	// 	return (
	// 		<Card style={{ height: '100%' }}>
	// 			<Typography variant="M24">
	// 				Ошибка при загрузке компаний
	// 			</Typography>
	// 		</Card>
	// 	);
	// }

	const [currentSlide, setCurrentSlide] = React.useState(0); // Состояние для хранения текущего слайда

	const [navSlider, setNavSlider] = React.useState(null);
	const [navDots, setNavDots] = React.useState(null);
	let refSlider = React.useRef(null);
	let refDots = React.useRef(null);

	useEffect(() => {
		setNavSlider(refSlider);
		setNavDots(refDots);
	}, []);

	const notifications = [
		'1. Необходимо предоставить документы вновь принятого сотрудника до 16:00 текущего дня. В противном случае датой приема будет следующий день.',
		'2. Тестовое уведомление тестовое тестовое тестовое тестовое уведомление. ',
		'3. Тестовое уведомление тестовое тестовое тестовое уведомление. ',
		'4. Тестовое уведомление тестовое тестовое уведомление. ',
		'5. Тестовое уведомление все еще тест. ',
		'6. Тестовое уведомление и здесь тест. ',
		'7. Тестовое уведомление здесь тоже тест. ',
	];

	return (
		<Card className={cls.notificationsCard}>
			<Box
				width="100%"
				position="relative"
			>
				<Box>
					{notifications?.length > 0 ? (
						<>
							<Typography
								variant="M24"
								color="#A43270"
							>
								Внимание!
							</Typography>

							<SliderNotifications
								navDots={navDots}
								currentSlide={currentSlide}
								notifications={notifications}
								refFunction={(slider) => (refSlider = slider)}
							/>

							<SliderDots
								navSlider={navSlider}
								refFunction={(slider) => (refDots = slider)}
								notifications={notifications}
								beforeChange={(_, next) =>
									setCurrentSlide(next)
								}
								currentSlide={currentSlide}
							/>
						</>
					) : (
						<Box
							style={{
								display: 'flex',
								flexDirection: 'column',
								gap: '16px',
							}}
						>
							<Typography
								variant="M24"
								style={{ color: '#7B7F9F' }}
							>
								Ничего срочного!
							</Typography>
							<Typography
								variant="R16"
								style={{ color: '#7B7F9F' }}
							>
								Если у вас возникли трудности, обратитесь к
								менеджеру.
							</Typography>
						</Box>
					)}
				</Box>
			</Box>
		</Card>
	);
};
