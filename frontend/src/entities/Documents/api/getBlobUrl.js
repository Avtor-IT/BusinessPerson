import Api from 'shared/api/base';

const getBlobUrl = async (url, params) => {
	try {
		const api = new Api();

		const blob = await api.GetBlob(url, params);

		return URL.createObjectURL(blob);
	} catch (e) {
		throw Error(e.message);
	}
};
export default getBlobUrl;
