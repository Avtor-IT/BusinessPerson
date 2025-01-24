import { useQuery } from '@tanstack/react-query';
import getCompanies from '../api/getCompanies';

const useCompanies = () =>
	useQuery({
		queryKey: ['companies'],
		queryFn: getCompanies,
		staleTime: Infinity,
		// enabled: false, // Чтобы ошибки глаза не мозолили
	});

export default useCompanies;
