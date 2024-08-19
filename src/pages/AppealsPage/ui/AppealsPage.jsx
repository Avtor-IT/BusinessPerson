import React from 'react';
import { Typography } from '@mui/material';
import ChatList from 'widgets/ChatList';

const AppealsPage = () => {
	return (
		<div>
			<Typography component="h1">Appeals page</Typography>

			<ChatList />

			{/*<iframe
				src="https://avtorit24.ru/online/messanger-test"
				width="100%"
				height="780px"
			/>*/}
		</div>
	);
};

export default AppealsPage;
