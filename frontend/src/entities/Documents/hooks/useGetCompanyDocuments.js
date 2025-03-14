import { useQuery } from '@tanstack/react-query';
import getCompanyDocuments from '../api/getCompanyDocuments';

const useGetCompanyDocuments = () =>
	useQuery({
		queryKey: ['documents', 'company'],
		queryFn: getCompanyDocuments,
		select: (data) => data.documents,
		retry: false,
	});

export default useGetCompanyDocuments;
