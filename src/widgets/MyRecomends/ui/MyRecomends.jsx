import React from 'react';
import { Box, Typography } from '@mui/material';
import { Card } from 'shared/ui/Card';
import { useRecomendsQuery } from 'entities/Recomends/model/hooks';
import Circle from 'shared/assets/Circle';
import Slider from 'react-slick';
import CheckCircleBtn from 'features/CheckCircleBtn';
import cls from './MyRecomends.module.scss';
import './myRecomends.scss';
import ArrowIcon from 'shared/assets/ArrowIcon/ui/ArrowIcon';

export const MyRecomends = ({ ...props }) => {
	const settings = {
		dots: false,
		accessibility: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		focusOnSelect: true,
		infinite: false,
		variableWidth: true,
		navButtonsAlwaysVisible: true,
	};

	const [hovered, setHovered] = React.useState(false); // для анимации при наведении

	const { isLoading, error, data } = useRecomendsQuery();

	if (isLoading) return 'Loading...';

	if (error) return 'Error';

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
				right={hovered ? -113 : -185}
				bottom={hovered ? -145 : -159}
				variant={'purple'}
			/>
			<Typography variant="M24">Рекомендации</Typography>
			<Box
				className={`${cls.sliderRecomends} slider-container`}
				width="923px"
			>
				<Slider
					{...settings}
					style={{ width: '923px' }}
					prevArrow={
						<ArrowIcon
							variant={'left'}
							width={32}
							height={32}
							strokeWidth={2}
						/>
					}
					nextArrow={
						<ArrowIcon
							variant={'right'}
							width={32}
							height={32}
							strokeWidth={2}
						/>
					}
				>
					{data.map((item, index) => (
						<Card
							className={cls.recomendItem}
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
									width={'219px'}
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
		</Card>
	);
};
