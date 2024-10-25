import { useQuery } from '@tanstack/react-query';
import { getCompanies } from '../api/getCompanies.js';

export const useCompanies = () =>
	useQuery({
		queryKey: ['companies'],
		queryFn: getCompanies,
		staleTime: Infinity,
	});
