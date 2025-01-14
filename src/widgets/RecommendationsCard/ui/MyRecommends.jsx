import React from 'react';
import Slider from 'react-slick';
import { Box, Typography } from '@mui/material';
import { useRecommendsQuery } from 'entities/Recommends';
import CheckCircleBtn from 'features/CheckCircleBtn';
import { Card } from 'shared/ui/Card';
import { Button } from 'shared/ui/Button';
import Circle from 'shared/icons/Circle';
import './MyRecommendsSlider.scss';
import cls from './MyRecommends.module.scss';
import { ArrowInCircle } from 'shared/icons/ArrowInCircle';

/*
 * Отсюда брал
 * https://stackoverflow.com/questions/63638782/how-to-solve-warning-react-does-not-recognize-the-currentslide-slidecount
 *
 * Исправлял так как в консоли были ошибки, связанные с пропсами
 * aria-disabled | aria-hidden.
 *
 * Так как это более правильное решение, мб получится
 * реализовать дисейбленную кнопку иначе (если нужно)
 *
 * */

const SlickArrowLeft = ({ currentSlide, ...props }) => {
	// eslint-disable-next-line no-unused-vars
	const { slideCount, ...otherProps } = props;

	return (
		<Button
			variant="unStyled"
			{...otherProps}
			aria-hidden={true}
			aria-disabled={currentSlide === 0}
			type="button"
		>
			<ArrowInCircle
				variant={'left'}
				width={32}
				height={32}
				strokeWidth={2}
				color={currentSlide === 0 ? 'dark-gray' : 'white'}
			/>
		</Button>
	);
};

const SlickArrowRight = ({
	currentSlide,
	slideCount,
	slidesToShow,
	...props
}) => (
	<Button
		variant="unStyled"
		{...props}
		aria-hidden="true"
		aria-disabled={currentSlide === slideCount - slidesToShow}
		type="button"
	>
		<ArrowInCircle
			variant={'right'}
			width={32}
			height={32}
			strokeWidth={2}
			color={
				currentSlide === slideCount - slidesToShow
					? 'dark-gray'
					: 'white'
			}
		/>
	</Button>
);

export const MyRecommends = ({ ...props }) => {
	const slidesToShow = 2;
	const settings = {
		dots: false,
		slidesToShow,
		swipeToSlide: true,
		focusOnSelect: true,
		infinite: false,
		slidesToScroll: 2,
		variableWidth: true,
		navButtonsAlwaysVisible: true,
		prevArrow: <SlickArrowLeft />,
		nextArrow: <SlickArrowRight slidesToShow={slidesToShow} />,
	};

	// eslint-disable-next-line no-unused-vars
	const [hovered, setHovered] = React.useState(false); // для анимации при наведении

	const { isLoading, error, data } = useRecommendsQuery();

	if (isLoading) return 'Loading...';

	if (error) return 'Error';

	return (
		<Card
			className={cls.MyRecommends}
			onMouseOver={() => setHovered(true)}
			onMouseOut={() => setHovered(false)}
			style={{
				height: '337px',
				background: 'linear-gradient(to left, #FFF 0%, #4C5385 240%)',
			}}
			{...props}
		>
			<Circle
				width={813}
				height={813}
				right={-350}
				bottom={260}
				bg={'linear-gradient(22deg, #514996 0%, #FFF 100%)'}
			/>
			<Box position="relative">
				<Box className={`${cls.sliderRecommends} slider-container`}>
					<Typography
						variant="M24"
						color="#FFF"
						sx={{
							textShadow: '0 2px 4px rgba(0,0,0,0.5)',
						}}
					>
						Актуальные изменения в законодательстве
					</Typography>
					<Slider {...settings}>
						{data.map((item, index) => (
							<Card
								className={cls.recommendItem}
								key={index}
							>
								<Box
									style={{
										display: 'flex',
										alignItems: 'baseline',
										justifyContent: 'space-between',
									}}
								>
									<Typography
										variant="M20"
										// width={'219px'}
									>
										{item.title}
									</Typography>
									<CheckCircleBtn />
								</Box>
								<Typography variant="R16">
									{item.description}
								</Typography>
							</Card>
						))}
					</Slider>
				</Box>
			</Box>
		</Card>
	);
};
