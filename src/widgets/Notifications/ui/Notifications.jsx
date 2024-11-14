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
		'Необходимо предоставить документы вновь принятого сотрудника до 16:00 текущего дня. В противном случае датой приема будет следующий день.',
		'Тестовое уведомление тестовое тестовое тестовое тестовое уведомление. ',
		'Тестовое уведомление тестовое тестовое тестовое уведомление. ',
		// 'Тестовое уведомление тестовое тестовое уведомление. ',
	];

	const [currentSlide, setCurrentSlide] = React.useState(0); // Состояние для хранения текущего слайда

	const settings = {
		customPaging: function (i) {
			return (
				<div
					style={{
						width: '8px',
						height: '8px',
						borderRadius: '50%',
						backgroundColor:
							i === currentSlide ? '#A43270' : '#7B7F9F',
					}}
				></div>
			);
		},
		dots: true,
		dotsClass: `${cls.slickDots} slick-dots slick-thumb`,
		arrows: false,
		fade: true,
		infinite: true,
		slidesToShow: 1,
		swipeToSlide: true,
		waitForAnimate: false,
		beforeChange: (current, next) => setCurrentSlide(next),
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
						<Typography variant="R16">Нет уведомлений</Typography>
					)}
				</Box>
			</Box>
		</Card>
	);
};
