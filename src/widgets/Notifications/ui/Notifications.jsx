import React from 'react';
import Slider from 'react-slick';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import CheckCircleBtn from 'features/CheckCircleBtn';
import { Card } from 'shared/ui/Card';
import cls from './notifications.module.scss';

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

	const notifications = [
		'1. Необходимо предоставить документы вновь принятого сотрудника до 16:00 текущего дня. В противном случае датой приема будет следующий день.',
		'2. Тестовое уведомление тестовое тестовое тестовое тестовое уведомление. ',
		'3. Тестовое уведомление тестовое тестовое тестовое уведомление. ',
		'4. Тестовое уведомление тестовое тестовое уведомление. ',
		'5. Тестовое уведомление все еще тест. ',
		'6. Тестовое уведомление и здесь тест. ',
		'7. Тестовое уведомление здесь тоже тест. ',
	];

	const [currentSlide, setCurrentSlide] = React.useState(0); // Состояние для хранения текущего слайда

	const sizePaging = (i) => {
		if (i === currentSlide) {
			return '8px';
		} else if (i === currentSlide + 1 || i === currentSlide - 1) {
			return '6px';
		} else if (i === currentSlide + 2 || i === currentSlide - 2) {
			return '4px';
		}
	};

	const bgPaging = (i) => {
		if (i === currentSlide) {
			return '#A43270';
		} else if (i === currentSlide + 1 || i === currentSlide - 1) {
			return 'rgb(123, 127, 159, 0.5)';
		} else if (i === currentSlide + 2 || i === currentSlide - 2) {
			return 'rgb(123, 127, 159, 0.2)';
		}
	};

	const settings = {
		customPaging: function (i) {
			if (notifications.length < 3) {
				return (
					<div
						style={{
							width: '8px',
							height: '8px',
							borderRadius: '50%',
							backgroundColor: bgPaging(i),
						}}
					></div>
				);
			} else if (notifications.length === 3) {
				return (
					<div
						style={{
							width: sizePaging(i),
							height: sizePaging(i),
							borderRadius: '50%',
							backgroundColor: bgPaging(i),
						}}
					></div>
				);
			} else if (notifications.length > 3) {
				return (
					<div
						style={{
							width: sizePaging(i),
							height: sizePaging(i),
							borderRadius: '50%',
							backgroundColor: bgPaging(i),
						}}
					></div>
				);
			}
		},
		dots: true,
		dotsClass: `${cls.slickDots} slick-dots slick-thumb`,
		arrows: false,
		fade: true,
		slidesToShow: 1,
		swipeToSlide: true,
		waitForAnimate: false,
		beforeChange: (current, next) => setCurrentSlide(next),
		// после добавления адаптива в макете дописать
		// responsive: [
		// 	{
		// 		breakpoint: 600,
		// 		settings: {
		// 			slidesToShow: 1,
		// 		},
		// 	},
		// 	{
		// 		breakpoint: 1024,
		// 		settings: {
		// 			slidesToShow: 1,
		// 		},
		// 	},
		// ],
	};

	return (
		<Card className={cls.notificationsCard}>
			<Box
				width="100%"
				position="relative"
			>
				<Box className={`${cls.sliderNotifications} slider-container`}>
					{notifications?.length > 0 ? (
						<Slider {...settings}>
							{notifications.map((notification, index) => (
								<div
									key={index}
									className={cls.slideNotification}
								>
									<Typography
										variant="M24"
										className={cls.notificationsTitle}
									>
										Внимание!
									</Typography>
									<Typography variant="R16">
										{notification}
									</Typography>
									<div
										style={{
											position: 'absolute',
											right: '0',
										}}
									>
										<CheckCircleBtn />
									</div>
								</div>
							))}
						</Slider>
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
