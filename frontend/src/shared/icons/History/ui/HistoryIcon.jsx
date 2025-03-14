const HistoryIcon = ({ width, height, stroke, strokeWidth, ...otherProps }) => {
	return (
		<svg
			width={width || '24'}
			height={height || '24'}
			viewBox="0 0 24 24"
			{...otherProps}
			fill="none"
		>
			<path
				d="M22.7 13.5L20.7005 11.5L18.7 13.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C15.3019 3 18.1885 4.77814 19.7545 7.42909M12 7V12L15 14"
				stroke={stroke || 'white'}
				strokeWidth={strokeWidth || '1.5'}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export default HistoryIcon;
