import { Box, Typography } from '@mui/material';
import { useRecommendsQuery } from 'entities/Recommends';
import CheckCircleBtn from 'features/CheckCircleBtn';
import React from 'react';
import Slider from 'react-slick';
import { ArrowInCircle } from 'shared/icons/ArrowInCircle';
import { Button } from 'shared/ui/Button';
import { Card, TitledCard } from 'shared/ui/Card';
import cls from './MyRecommends.module.scss';
import './MyRecommendsSlider.scss';

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
		<TitledCard
			className={cls.MyRecommends}
			onMouseOver={() => setHovered(true)}
			onMouseOut={() => setHovered(false)}
			sx={{
				background: 'linear-gradient(to left, #FFF 0%, #4C5385 240%)',
			}}
			circleSx={{
				height: '813px',
				width: '813px',
				background:
					'linear-gradient(15deg, var(--secondary) 0%, #FFF 100%) !important',
				right: '-350px',
				top: '-732px',
				left: 'auto',
			}}
			{...props}
		>
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
		</TitledCard>
	);
};
