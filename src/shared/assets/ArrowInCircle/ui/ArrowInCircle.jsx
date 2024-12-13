import cls from './ArrowInCircle.module.scss';

const ArrowInCircle = ({
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
			width={width || '32'}
			height={height || '32'}
			fill={fill || 'none'}
			viewBox="0 0 32 32"
			className={`${cls[variant]} ${className}`}
			{...otherProps}
		>
			<rect
				x="1"
				y="1"
				width="30"
				height="30"
				rx="15"
				stroke="white"
				strokeWidth="2"
			/>
			<path
				d="M13 22L19 16L13 10"
				stroke={strokeColor()}
				strokeWidth={strokeWidth}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export default ArrowInCircle;
