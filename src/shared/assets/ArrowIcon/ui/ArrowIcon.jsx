import cls from './arrowIcon.module.scss';

const ArrowIcon = ({
	variant = 'right',
	width,
	height,
	fill,
	color = 'black',
	strokeWidth = '1',
	className = '',
	...otherProps
}) => {
	const strokeColor = () => {
		switch (color) {
			case 'black':
				return '#3D3F4C';
			case 'white':
				return '#FFFFFF';
			case 'gray':
				return '#7B7F9F';
			case 'blue':
				return '#514996';
			case 'purple':
				return '#A43270';
			default:
				return '#3D3F4C';
		}
	};

	return (
		<svg
			width={width || '24'}
			height={height || '24'}
			fill={fill || 'none'}
			viewBox="0 0 24 24"
			className={`${cls[variant]} ${className}`}
			{...otherProps}
		>
			<path
				d="M8.94998 19.9201L15.47 13.4001C16.24 12.6301 16.24 11.3701 15.47 10.6001L8.94999 4.08008"
				stroke={strokeColor()}
				strokeWidth={strokeWidth}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export default ArrowIcon;
