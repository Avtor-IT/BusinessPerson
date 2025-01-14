/**
 * Format a date in ISO format to 'DD.MM.YYYY'
 * @param {String} isoDateString - date in ISO format
 * @returns {String} formatted date
 */
const formatDate = (isoDateString) => {
	const date = new Date(isoDateString);

	const day = String(date.getDate()).padStart(2, '0'); // Добавляем ведущий ноль, если день меньше 10
	const month = String(date.getMonth() + 1).padStart(2, '0');
	const year = date.getFullYear();

	return `${day}.${month}.${year}`;
};

export default formatDate;
