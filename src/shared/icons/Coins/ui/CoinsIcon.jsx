const CoinsIcon = ({ width, height, stroke, strokeWidth, ...otherProps }) => {
	return (
		<svg
			width={width || '428'}
			height={height || '337'}
			viewBox="0 0 428 337"
			fill="none"
			{...otherProps}
		>
			<path
				d="M234.833 22.1667C234.833 45.1785 183.533 63.8333 120.25 63.8333C56.9673 63.8333 5.66663 45.1785 5.66663 22.1667M234.833 22.1667C234.833 -0.845196 183.533 -19.5 120.25 -19.5C56.9673 -19.5 5.66663 -0.845196 5.66663 22.1667M234.833 22.1667V53.4167M5.66663 22.1667V272.167C5.66663 295.179 56.9673 313.833 120.25 313.833M120.25 147.167C116.739 147.167 113.264 147.109 109.833 146.997C51.4322 145.083 5.66663 127.235 5.66663 105.5M120.25 230.5C56.9673 230.5 5.66663 211.845 5.66663 188.833M422.333 157.583C422.333 180.595 371.033 199.25 307.75 199.25C244.467 199.25 193.167 180.595 193.167 157.583M422.333 157.583C422.333 134.571 371.033 115.917 307.75 115.917C244.467 115.917 193.167 134.571 193.167 157.583M422.333 157.583V313.833C422.333 336.845 371.033 355.5 307.75 355.5C244.467 355.5 193.167 336.845 193.167 313.833V157.583M422.333 235.708C422.333 258.72 371.033 277.375 307.75 277.375C244.467 277.375 193.167 258.72 193.167 235.708"
				stroke={stroke || 'white'}
				strokeWidth={strokeWidth || '10'}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export default CoinsIcon;
