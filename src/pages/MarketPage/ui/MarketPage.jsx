import { Typography } from '@mui/material';
import axios from 'axios';

const MarketPage = () => {
	// `ws://intizar.pythonanywhere.com/ws/chat/${chatRoomId}/`

	axios.post(
		'https://jsonplaceholder.typicode.com/posts',
		{
			id: 1,
		},
		{ params: { id: 1 } }
	);

	return (
		<>
			<Typography variant="M40">Маркетплейс</Typography>
		</>
	);
};

export default MarketPage;
