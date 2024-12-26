const AddSquareIcon = ({
	width,
	height,
	color,
	status,
	theme,
	...otherProps
}) => {
	const themeColors =
		theme === 'dark'
			? {
					defaultStroke: 'white',
					hover: 'white',
					active: 'white',
			  }
			: {
					defaultStroke: '#3D3F4C',
					hover: '#3D3F4C',
					active: '#3D3F4C',
			  };

	const getStatusPaths = (status) => {
		switch (status) {
			case 'hover':
				return (
					<>
						<path
							opacity="0.4"
							d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z"
							fill={color || themeColors.hover}
							stroke="none"
						/>
						<path
							d="M16 11.25H12.75V8C12.75 7.59 12.41 7.25 12 7.25C11.59 7.25 11.25 7.59 11.25 8V11.25H8C7.59 11.25 7.25 11.59 7.25 12C7.25 12.41 7.59 12.75 8 12.75H11.25V16C11.25 16.41 11.59 16.75 12 16.75C12.41 16.75 12.75 16.41 12.75 16V12.75H16C16.41 12.75 16.75 12.41 16.75 12C16.75 11.59 16.41 11.25 16 11.25Z"
							fill={color || themeColors.hover}
							stroke="none"
						/>
					</>
				);
			case 'active':
				return (
					<path
						d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM16 12.75H12.75V16C12.75 16.41 12.41 16.75 12 16.75C11.59 16.75 11.25 16.41 11.25 16V12.75H8C7.59 12.75 7.25 12.41 7.25 12C7.25 11.59 7.59 11.25 8 11.25H11.25V8C11.25 7.59 11.59 7.25 12 7.25C12.41 7.25 12.75 7.59 12.75 8V11.25H16C16.41 11.25 16.75 11.59 16.75 12C16.75 12.41 16.41 12.75 16 12.75Z"
						fill={color || themeColors.active}
						stroke="none"
					/>
				);
			default:
				return (
					<>
						<path
							d="M8 12H16"
							stroke={color || themeColors.defaultStroke}
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M12 16V8"
							stroke={color || themeColors.defaultStroke}
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
							stroke={color || themeColors.defaultStroke}
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</>
				);
		}
	};

	return (
		<svg
			width={width || '24'}
			height={height || '24'}
			fill="none"
			viewBox="0 0 24 24"
			{...otherProps}
		>
			{getStatusPaths(status)}
		</svg>
	);
};

export default AddSquareIcon;
