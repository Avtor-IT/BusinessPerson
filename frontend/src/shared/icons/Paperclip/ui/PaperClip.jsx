const PaperClip = ({ width, height, size, fill, stroke, ...otherProps }) => {
	return (
		<svg
			width={width || size || '24'}
			height={height || size || '24'}
			viewBox="0 0 24 24"
			fill={fill || 'none'}
			{...otherProps}
		>
			<path
				d="M21.1518 10.8995L12.1361 19.9151C10.0859 21.9653 6.76177 21.9653 4.71152 19.9151C2.66126 17.8648 2.66127 14.5407 4.71152 12.4904L13.7271 3.47483C15.094 2.108 17.31 2.108 18.6769 3.47483C20.0437 4.84167 20.0437 7.05775 18.6769 8.42458L10.0148 17.0866C9.3314 17.7701 8.22336 17.7701 7.53994 17.0866C6.85653 16.4032 6.85653 15.2952 7.53994 14.6118L15.1413 7.01037"
				stroke={stroke || '#3D3F4C'}
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export default PaperClip;
