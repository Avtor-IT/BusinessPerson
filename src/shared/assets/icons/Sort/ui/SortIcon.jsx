const SortIcon = ({ width, height, fill, stroke, variant, ...otherProps }) => {
	function renderVariantPath(variant) {
		switch (variant) {
			case 'hover':
				return (
					<>
						<path
							opacity="0.4"
							d="M22 7.81V16.19C22 19.83 19.83 22 16.19 22H7.81C7.61 22 7.41 21.99 7.22 21.98C5.99 21.9 4.95 21.55 4.13 20.95C3.71 20.66 3.34 20.29 3.05 19.87C2.36 18.92 2 17.68 2 16.19V7.81C2 4.37 3.94 2.24 7.22 2.03C7.41 2.01 7.61 2 7.81 2H16.19C17.68 2 18.92 2.36 19.87 3.05C20.29 3.34 20.66 3.71 20.95 4.13C21.64 5.08 22 6.32 22 7.81Z"
							fill={fill || '#3D3F4C'}
						/>
						<path
							d="M8.16 6.6499H15.83C16.47 6.6499 16.99 7.1699 16.99 7.8099V9.0899C16.99 9.5599 16.7 10.1399 16.41 10.4299L13.91 12.6399C13.56 12.9299 13.33 13.5099 13.33 13.9799V16.4799C13.33 16.8299 13.1 17.2899 12.81 17.4699L12 17.9799C11.24 18.4499 10.2 17.9199 10.2 16.9899V13.9099C10.2 13.4999 9.97 12.9799 9.73 12.6899L7.52 10.3599C7.23 10.0799 7 9.5499 7 9.1999V7.8699C7 7.1699 7.52 6.6499 8.16 6.6499Z"
							fill={fill || '#3D3F4C'}
						/>
					</>
				);
			case 'active':
				return (
					<path
						d="M20.95 4.13C20.66 3.71 20.29 3.34 19.87 3.05C18.92 2.36 17.68 2 16.19 2H7.81C7.61 2 7.41 2.01 7.22 2.03C3.94 2.24 2 4.37 2 7.81V16.19C2 17.68 2.36 18.92 3.05 19.87C3.34 20.29 3.71 20.66 4.13 20.95C4.95 21.55 5.99 21.9 7.22 21.98C7.41 21.99 7.61 22 7.81 22H16.19C19.83 22 22 19.83 22 16.19V7.81C22 6.32 21.64 5.08 20.95 4.13ZM8.46 10.68L7.97 10.17C7.71 9.91 7.5 9.44 7.5 9.12V7.92C7.5 7.29 7.97 6.82 8.55 6.82H10.69C11.1 6.82 11.35 7.27 11.13 7.62L9.28 10.6C9.1 10.89 8.69 10.93 8.46 10.68ZM16.5 9.02C16.5 9.44 16.24 9.96 15.98 10.22L13.73 12.21C13.42 12.47 13.21 12.99 13.21 13.41V15.66C13.21 15.97 13 16.39 12.74 16.55L12 17.02C11.32 17.44 10.38 16.97 10.38 16.13V13.36C10.38 12.99 10.17 12.52 9.96 12.26L9.72 12C9.56 11.83 9.53 11.57 9.65 11.36L12.33 7.06C12.43 6.91 12.59 6.81 12.77 6.81H15.45C16.03 6.81 16.5 7.28 16.5 7.86V9.02Z"
						fill={fill || '#3D3F4C'}
					/>
				);
			default:
				return (
					<>
						<path
							d="M8.16 6.65039H15.83C16.47 6.65039 16.99 7.17039 16.99 7.81039V9.09039C16.99 9.56039 16.7 10.1404 16.41 10.4304L13.91 12.6404C13.56 12.9304 13.33 13.5104 13.33 13.9804V16.4804C13.33 16.8304 13.1 17.2904 12.81 17.4704L12 17.9804C11.24 18.4504 10.2 17.9204 10.2 16.9904V13.9104C10.2 13.5004 9.97 12.9804 9.73 12.6904L7.52 10.3604C7.23 10.0804 7 9.55039 7 9.20039V7.87039C7 7.17039 7.52 6.65039 8.16 6.65039Z"
							stroke={stroke || '#3D3F4C'}
							strokeWidth="1.5"
							strokeMiterlimit="10"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
							stroke={stroke || '#3D3F4C'}
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</>
				);
		}
	}

	return (
		<svg
			width={width || '24'}
			height={height || '24'}
			fill={fill || 'none'}
			{...otherProps}
		>
			{renderVariantPath(variant)}
		</svg>
	);
};

export default SortIcon;