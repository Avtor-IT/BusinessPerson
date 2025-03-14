import cls from './ArrowIcon.module.scss';

const ArrowIcon = ({
	variant = 'right',
	width,
	height,
	fill,
	strokeColor = 'black',
	strokeWidth = '1',
	className = '',
	...otherProps
}) => {
	return (
		<svg
			width={width || '24'}
			height={height || '24'}
			fill={fill || 'none'}
			viewBox={`0 0 24 24`}
			className={`${cls[variant]} ${className}`}
			{...otherProps}
		>
			<path
				d="M8.94998 19.9201L15.47 13.4001C16.24 12.6301 16.24 11.3701 15.47 10.6001L8.94999 4.08008"
				stroke={strokeColor}
				strokeWidth={strokeWidth}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export default ArrowIcon;
