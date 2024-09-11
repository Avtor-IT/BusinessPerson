import React from 'react';
import { useChat } from 'entities/Chat';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useNavigate } from 'react-router-dom';

const ChatItem = ({ id }) => {
	const { data, isLoading } = useChat(id);

	const navigate = useNavigate();

	if (isLoading) return <Box>Загрузка чата...</Box>;

	return (
		<Box
			marginY="16px"
			onClick={() => navigate(id)}
			sx={{ cursor: 'pointer' }}
		>
			<Typography variant="M24">{data.result.users[0].name}</Typography>
			<Typography variant="L16">
				{data.result.messages[0].text}
			</Typography>
		</Box>
	);
};

export default ChatItem;
