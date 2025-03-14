import { Typography } from '@mui/material';

const MarketPage = () => {
	// `ws://intizar.pythonanywhere.com/ws/chat/${chatRoomId}/`

	// apiCaller('CHAT_ROOM', 'GET', null, { urlParams: { b24_user_id: 7 } });

	// axios
	// 	.get('https://intizar.pythonanywhere.com/chat/api/chat/7', {
	// 		headers: {
	// 			Authorization: `Bearer ${sessionStorage.getItem('access')}`,
	// 		},
	// 	})
	// 	.catch((e) => {
	// 		console.log(e);
	// 	});

	return (
		<>
			<Typography variant="M40">Маркетплейс</Typography>
		</>
	);
};

export default MarketPage;
