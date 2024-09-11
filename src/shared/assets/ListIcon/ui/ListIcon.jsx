const ListIcon = ({ width, height, fill, ...otherProps }) => {
	return (
		<svg
			width={width || '24'}
			height={height || '24'}
			viewBox={'0 0 24 24'}
			fill={fill || 'none'}
			{...otherProps}
		>
			<path
				d="M12.37 8.87988H17.62"
				stroke="inherit"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M6.38 8.87988L7.13 9.62988L9.38 7.37988"
				stroke="inherit"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M12.37 15.8799H17.62"
				stroke="inherit"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M6.38 15.8799L7.13 16.6299L9.38 14.3799"
				stroke="inherit"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
				stroke="inherit"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export default ListIcon;
