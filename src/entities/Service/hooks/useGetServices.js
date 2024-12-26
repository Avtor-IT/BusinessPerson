import { useQuery } from '@tanstack/react-query';
import { getServices } from 'entities/Service/api/getServices.js';

const useGetServices = () =>
	useQuery({
		queryKey: ['services'],
		queryFn: getServices,
		staleTime: Infinity,
		// enabled: false, // Чтобы ошибки глаза не мозолили
	});

export default useGetServices;
