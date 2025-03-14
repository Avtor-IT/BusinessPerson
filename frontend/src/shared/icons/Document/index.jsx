const Document = ({ size, width, height, ...props }) => {
	return (
		<svg
			width={width || size || '22'}
			height={height || size || '22'}
			viewBox="0 0 22 22"
			fill="none"
			{...props}
		>
			<path
				d="M19.25 6.41659V15.5833C19.25 18.3333 17.875 20.1666 14.6667 20.1666H7.33333C4.125 20.1666 2.75 18.3333 2.75 15.5833V6.41659C2.75 3.66659 4.125 1.83325 7.33333 1.83325H14.6667C17.875 1.83325 19.25 3.66659 19.25 6.41659Z"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M13.292 4.125V5.95833C13.292 6.96667 14.117 7.79167 15.1253 7.79167H16.9587"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M7.33301 11.9167H10.9997"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M7.33301 15.5833H14.6663"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export default Document;
