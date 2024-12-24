import Api from 'shared/api/base';

const downloadFile = async (url, params) => {
	try {
		const api = new Api();

		return await api.DownloadFile(url, params);
	} catch (e) {
		throw Error(e.message);
	}
};
export default downloadFile;
