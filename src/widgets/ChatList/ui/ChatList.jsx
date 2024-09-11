import ChatItem, { useChatIds } from 'entities/Chat';

const ChatList = () => {
	const { data, isLoading } = useChatIds();

	if (isLoading) {
		return <div>Загрузка чатов...</div>;
	}

	return (
		<div>
			{data.result.map((chat) => (
				<ChatItem
					key={chat.CHAT_ID}
					id={chat.CHAT_ID}
				/>
			))}
		</div>
	);
};

export default ChatList;
