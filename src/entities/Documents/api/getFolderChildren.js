import Api from 'shared/api/base';

const getFolderChildren = async (url) => {
	try {
		const api = new Api();

		return await api.Get(url);
	} catch (e) {
		throw Error(e.message);
	}
};
export default getFolderChildren;
