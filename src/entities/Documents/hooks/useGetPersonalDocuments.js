import { useQuery } from '@tanstack/react-query';
import { getPersonalDocuments } from '../api/getPersonalDocuments';

const useGetPersonalDocuments = () => {
	return useQuery({
		queryKey: ['documents', 'personal'],
		queryFn: getPersonalDocuments,
	});
};

export default useGetPersonalDocuments;
