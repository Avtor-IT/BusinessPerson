import { useQuery } from '@tanstack/react-query';
import getManager from '../api/getManager';

export const useManager = () =>
	useQuery({
		queryKey: ['manager'],
		queryFn: getManager,
		staleTime: Infinity,
		// enabled: false, // Чтобы ошибки глаза не мозолили
	});
