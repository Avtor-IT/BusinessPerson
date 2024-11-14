import React from 'react';
import Slider from 'react-slick';
import { Box, Typography } from '@mui/material';
import { useRecommendsQuery } from 'entities/Recommends/model/hooks';
import CheckCircleBtn from 'features/CheckCircleBtn';
import { Card } from 'shared/ui/Card';
import { Button } from 'shared/ui/Button';
import ArrowIcon from 'shared/assets/ArrowIcon';
import Circle from 'shared/assets/Circle';
import './MyRecommendsSlider.scss';
import cls from './MyRecommends.module.scss';

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
			className={
				'slick-prev slick-arrow' +
				(currentSlide === 0 ? ' slick-disabled' : '')
			}
			aria-hidden={true}
			aria-disabled={currentSlide === 0}
			type="button"
		>
			<ArrowIcon
				variant={'left'}
				width={32}
				height={32}
				strokeWidth={2}
			/>
		</Button>
	);
};

const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
	<Button
		variant="unStyled"
		{...props}
		className={
			'slick-next slick-arrow' +
			(currentSlide === slideCount - 1 ? ' slick-disabled' : '')
		}
		aria-hidden="true"
		aria-disabled={currentSlide === slideCount - 1}
		type="button"
	>
		<ArrowIcon
			variant={'right'}
			width={32}
			height={32}
			strokeWidth={2}
		/>
	</Button>
);

export const MyRecommends = ({ ...props }) => {
	const settings = {
		dots: false,
		slidesToShow: 2,
		swipeToSlide: true,
		focusOnSelect: true,
		infinite: false,
		variableWidth: true,
		navButtonsAlwaysVisible: true,
		prevArrow: <SlickArrowLeft />,
		nextArrow: <SlickArrowRight />,
	};

	const [hovered, setHovered] = React.useState(false); // для анимации при наведении

	const { isLoading, error, data } = useRecommendsQuery();

	if (isLoading) return 'Loading...';

	if (error) return 'Error';

	return (
		<Card
			className={cls.MyRecommends}
			onMouseOver={() => setHovered(true)}
			onMouseOut={() => setHovered(false)}
			{...props}
		>
			<Circle
				width={hovered ? 560 : 522}
				height={522}
				right={hovered ? -130 : -185}
				bottom={hovered ? -145 : -159}
				variant={'purple'}
			/>
			<Box
				width="100%"
				height="289px"
				position="relative"
			>
				<Box className={`${cls.sliderRecommends} slider-container`}>
					<Typography variant="M24">
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
