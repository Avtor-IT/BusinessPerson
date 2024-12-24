import { useMutation } from '@tanstack/react-query';
import downloadFile from '../api/downloadFile';

const useDownloadMutation = () =>
	useMutation({
		mutationFn: async ({ url, params }) => await downloadFile(url, params),
	});

export default useDownloadMutation;
