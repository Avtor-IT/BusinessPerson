import { useQuery } from '@tanstack/react-query';
import getFolderChildren from '../api/getFolderChildren';

const useGetFolderChildren = (url) => {
	return useQuery({
		queryKey: ['documents', 'folder', url],
		queryFn: async () => await getFolderChildren(url),
		select: (data) => data.documents,
		staleTime: 5 * 1000,
		retry: false,
	});
};

export default useGetFolderChildren;
