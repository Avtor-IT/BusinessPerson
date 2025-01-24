import Api from 'shared/api/base';

const getBlobUrl = async (url, params) => {
	try {
		const api = new Api();

		return await api.GetBlob(url, params);
	} catch (e) {
		throw Error(e.message);
	}
};
export default getBlobUrl;
