const ExportIcon = ({ width, height, fill, ...otherProps }) => {
	return (
		<svg
			width={width || '24'}
			height={height || '24'}
			fill={fill || 'none'}
			{...otherProps}
		>
			<path
				d="M16.44 8.90039C20.04 9.21039 21.51 11.0604 21.51 15.1104V15.2404C21.51 19.7104 19.72 21.5004 15.25 21.5004H8.73998C4.26998 21.5004 2.47998 19.7104 2.47998 15.2404V15.1104C2.47998 11.0904 3.92998 9.24039 7.46998 8.91039"
				stroke="white"
			/>
			<path
				d="M12 15.0001V3.62012"
				stroke="white"
			/>
			<path
				d="M15.35 5.85L12 2.5L8.65002 5.85"
				stroke="white"
			/>
		</svg>
	);
};

export default ExportIcon;
