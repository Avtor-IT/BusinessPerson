const UsersIcon = ({ width, height, stroke, ...otherProps }) => {
	return (
		<svg
			width={width || '434'}
			height={height || '337'}
			viewBox="0 0 434 337"
			{...otherProps}
			fill="none"
		>
			<path
				d="M345.232 232.567C376.296 248.21 402.929 273.314 422.368 304.706C426.218 310.922 428.143 314.031 428.808 318.335C430.161 327.082 424.194 337.835 416.068 341.297C412.069 343 407.57 343 398.573 343M302.56 140.495C334.174 124.745 355.9 92.0412 355.9 54.25C355.9 16.4588 334.174 -16.2454 302.56 -31.9951M259.887 54.25C259.887 107.407 216.9 150.5 163.873 150.5C110.846 150.5 67.8596 107.407 67.8596 54.25C67.8596 1.09259 110.846 -42 163.873 -42C216.9 -42 259.887 1.09259 259.887 54.25ZM15.7825 298.903C49.7992 247.703 103.478 214.667 163.873 214.667C224.268 214.667 277.947 247.703 311.964 298.903C319.416 310.12 323.142 315.728 322.713 322.893C322.379 328.471 318.731 335.3 314.285 338.671C308.575 343 300.721 343 285.013 343H42.733C27.0255 343 19.1717 343 13.4612 338.671C9.01495 335.3 5.36729 328.471 5.03328 322.893C4.6043 315.728 8.33035 310.12 15.7825 298.903Z"
				stroke={stroke || 'white'}
				strokeWidth="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export default UsersIcon;
