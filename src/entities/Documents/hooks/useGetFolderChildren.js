import { useQuery } from '@tanstack/react-query';
import getFolderChildren from '../api/getFolderChildren';

const useGetFolderChildren = (folderId) => {
	return useQuery({
		queryKey: ['folder', 'children', folderId],
		queryFn: async ({ url }) => await getFolderChildren(url),
	});
};

export default useGetFolderChildren;
