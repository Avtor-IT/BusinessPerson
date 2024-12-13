const MessageIcon = ({
	width,
	height,
	fill,
	variant = 'dark',
	...otherProps
}) => {
	const stroke = variant === 'dark' ? '#3d3f4c' : '#F9FEFF';
	return (
		<svg
			width={width || '24'}
			height={height || '24'}
			fill={fill || 'none'}
			{...otherProps}
		>
			<path
				d="M16 2H8C4 2 2 4 2 8V21C2 21.55 2.45 22 3 22H16C20 22 22 20 22 16V8C22 4 20 2 16 2Z"
				stroke={stroke}
			/>
			<path
				d="M7 9.5H17"
				stroke={stroke}
			/>
			<path
				d="M7 14.5H14"
				stroke={stroke}
			/>
		</svg>
	);
};

export default MessageIcon;
