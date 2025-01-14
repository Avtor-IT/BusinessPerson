/**
 * Splits a filename into a title and an extension.
 *
 * @param {string} filename
 * @returns {[string, string]} An array with two elements: the title and the extension.
 *
 * @example
 * splitFilename('example.txt') // ['example', 'txt']
 */
const splitFilename = (filename) => {
	if (!filename) return;

	const nameArray = filename.split('.');
	const title = nameArray.slice(0, -1).join('.');
	const extension = nameArray.at(-1);

	return [title, extension];
};

export default splitFilename;
