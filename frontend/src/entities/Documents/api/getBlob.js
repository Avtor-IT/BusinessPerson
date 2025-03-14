import Api from 'shared/api/base';

const getBlobUrl = async (url) => {
	try {
		const api = new Api();

		return await api.GetBlob(url);
	} catch (e) {
		throw Error(e.message);
	}
};
export default getBlobUrl;
