import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import CheckCircleBtn from 'features/CheckCircleBtn/index.js';
import Slider from 'react-slick';
import cls from '../notifications.module.scss';

const SliderNotifications = ({
	navDots,
	refFunction,
	notifications,
	currentSlide,
}) => {
	const settings = {
		dots: false,
		arrows: false,
		swipeToSlide: true,
		waitForAnimate: false,
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
		<Box className={`${cls.sliderNotifications} slider-container`}>
			<Slider
				{...settings}
				asNavFor={navDots}
				ref={refFunction}
			>
				{notifications.map((notification, index) => (
					<Box
						key={index}
						className={`${cls.slideNotification} ${
							currentSlide === index ? cls.fadeIn : cls.fadeOut
						}`}
					>
						<Typography variant="R16">{notification}</Typography>
						<Box
							style={{
								position: 'absolute',
								right: '-2px',
								top: '-47px',
							}}
						>
							<CheckCircleBtn />
						</Box>
					</Box>
				))}
			</Slider>
		</Box>
	);
};

export default SliderNotifications;
