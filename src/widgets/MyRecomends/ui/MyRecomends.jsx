import React from 'react';
import { Box, Typography } from '@mui/material';
import { getArrayRecomends } from 'entities/ArrayRecomends';
import { Card } from 'shared/ui/Card';
import Circle from 'shared/assets/Circle';
import Slider from 'react-slick';
import cls from './MyRecomends.module.scss';
import './myRecomends.scss';

export const MyRecomends = ({ ...props }) => {
	const testArrayRecomends = getArrayRecomends();

	const settings = {
		dots: false,
		accessibility: false,
		arrows: false,
		slidesToShow: 3,
		slidesToScroll: 2,
		focusOnSelect: true,
		infinite: false,
	};

	const [hovered, setHovered] = React.useState(false); // для анимации при наведении

	return (
		<Card
			className={`${cls.MyRecomends}`}
			onMouseOver={() => setHovered(true)}
			onMouseOut={() => setHovered(false)}
			{...props}
		>
			<Circle
				width={522}
				height={522}
				right={hovered ? -146 : -222}
				bottom={hovered ? -141 : -216}
				bg={'#A43270'}
				transition={true}
			/>
			<Typography variant="M24">Рекомендации</Typography>
			<Box className={`${cls.sliderRecomends}`}>
				<Slider
					{...settings}
					style={{ width: '923px' }}
				>
					{testArrayRecomends.map((item, index) => (
						<Card
							className={cls.recomendItem}
							key={index}
						>
							<Typography variant="M20">{item.title}</Typography>
							<Typography variant="R16">
								{item.description}
							</Typography>
						</Card>
					))}
				</Slider>
			</Box>
		</Card>
	);
};
