import Api from 'shared/api/base';

const downloadFile = async (url, params) => {
	try {
		const api = new Api();

		const blob = await api.GetBlob(url, params);
		const objectUrl = URL.createObjectURL(blob);

		const link = document.createElement('a');
		link.href = objectUrl;
		link.download = `${params.filename || 'file'}`; // Имя файла
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);

		return;
	} catch (e) {
		throw Error(e.message);
	}
};
export default downloadFile;
