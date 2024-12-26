import { useQuery } from '@tanstack/react-query';
import getUserServices from 'entities/Service/api/getUserServices.js';

const useGetUserServices = () =>
	useQuery({
		queryKey: ['user_services'],
		queryFn: getUserServices,
		// enabled: false, // Чтобы ошибки глаза не мозолили
	});

export default useGetUserServices;
