import cls from 'widgets/Notifications/ui/notifications.module.scss';
import Slider from 'react-slick';
import { Box } from '@mui/system';

const SliderDots = ({
	navSlider,
	refFunction,
	notifications,
	beforeChange,
	currentSlide,
}) => {
	const settingsDots = {
		dots: false,
		arrows: false,
		centerMode: true,
		focusOnSelect: true,
		centerPadding: '20%',
		slidesToShow: 3,
		beforeChange: beforeChange,
	};

	const dotClass = (i) => {
		switch (i) {
			case currentSlide:
				return cls.current;
			case currentSlide + 1:
			case currentSlide - 1:
				return cls.neighbor;
			case currentSlide + 2:
			case currentSlide - 2:
				return cls.far;
			default:
				return cls.invisible;
		}
	};

	return (
		<Box className={`${cls.sliderDots} slider-container`}>
			<Slider
				{...settingsDots}
				asNavFor={navSlider}
				ref={refFunction}
			>
				{notifications.map((note, index) => (
					<Box
						key={index}
						sx={{
							height: '8px',
							width: '100%',
							display: 'flex !important',
							alignItems: 'center !important',
							justifyContent: 'center !important',
						}}
					>
						<Box className={`${cls.dot} ${dotClass(index)}`}></Box>
					</Box>
				))}
			</Slider>
		</Box>
	);
};

export default SliderDots;
