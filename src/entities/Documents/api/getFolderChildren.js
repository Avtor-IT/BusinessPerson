import Api from 'shared/api/base';

const getFolderChildren = async (url) => {
	const api = new Api();

	return await api.Get(url);
};
export default getFolderChildren;
