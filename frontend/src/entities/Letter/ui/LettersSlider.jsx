import { Box } from '@mui/system';
import { useState } from 'react';
import Slider from 'react-slick';
import LetterCard from './LetterCard';
import cls from './LetterSlider.module.scss';

const LettersSlider = () => {
	const [letters, setLetters] = useState(new Array(10).fill(null));

	const settings = {
		speed: 500,
		arrows: false,
		slidesToShow: 3,
		swipeToSlide: true,
		infinite: false,
	};

	return (
		<Box
			width="100%"
			className={cls.LettersSlider}
		>
			<Slider
				{...settings}
				style={{ overflow: 'visible' }}
			>
				{letters.map((letter, i) => (
					<LetterCard key={i} />
				))}
			</Slider>
		</Box>
	);
};

export default LettersSlider;
