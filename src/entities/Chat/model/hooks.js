import { useQuery } from '@tanstack/react-query';
import getChatIdByCRM from '../api/getChatIdByCRM';
import { contactId } from 'shared/model';
import getChatById from 'entities/Chat/api/getChatById';

export const useChatIds = () => {
	return useQuery({
		queryKey: ['contact', 'chatIds'],
		queryFn: () => getChatIdByCRM('contact', contactId),
		staleTime: 1000 * 5 * 60,
	});
};

export const useChat = (id) => {
	return useQuery({
		queryKey: ['contact', 'chat', id],
		queryFn: () => getChatById(id),
		staleTime: 1000 * 5,
	});
};
