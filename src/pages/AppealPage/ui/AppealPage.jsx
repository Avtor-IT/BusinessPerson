import { useParams } from 'react-router';
import { useChat } from 'entities/Chat';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import Input from 'shared/ui/Input';
import { Button } from 'shared/ui/Button';

const AppealPage = () => {
	const params = useParams();
	const { data, isLoading } = useChat(params.chatId);

	if (isLoading) return <Box>is loading</Box>;

	return (
		<Box marginY="8px">
			{data.result.messages
				.filter((m) => m.author_id !== 0)
				.reverse()
				.map((message) => (
					<Box
						marginY="16px"
						key={message.id}
					>
						<Typography
							variant="L20"
							component="div"
						>
							{message.text}
						</Typography>
						<Typography variant="L16">
							{new Date(message.date).toLocaleDateString(
								'ru-RU',
								{
									day: 'numeric',
									month: 'long',
									hour: 'numeric',
									minute: 'numeric',
								}
							)}
						</Typography>
						<Typography variant="L16">
							{' '}
							- {message.author_id}
						</Typography>
					</Box>
				))}
			<Box marginY="16px">
				<Input afterPlaceholder={<Button>Отправить</Button>} />
			</Box>
		</Box>
	);
};

export default AppealPage;
