import React, { useRef } from 'react';
import { Typography } from '@mui/material';

const AppealsPage = () => {
	const iframe = useRef(null);

	return (
		<div>
			<Typography component="h1">Appeals page</Typography>
			<iframe
				ref={iframe}
				src="https://avtorit24.ru/online/messanger-test"
				width="100%"
				height="780px"
			/>
		</div>
	);
};

export default AppealsPage;
