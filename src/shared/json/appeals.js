/*
 * Страница обращений
 *
 * Список обращений клиента.
 * Поля:
 * - название чата,
 * - ссылка на страницу с чатом в б24 (создаётся менеджером, заполняется вручную)
 * - ИД чата
 * - ИД сессии
 * Последние два необходимыы для получения последнего сообщения в чате,
 * а также благодаря этому можно будет узнавать, есть ли непрочитанные сообщения для клиента.
 * */

// eslint-disable-next-line no-unused-vars
const appeals = [
	{
		name: 'Чат обратной связи',
		chatLink: 'https://avtorit24.ru/online/messanger-test',
		chatId: 2020, // Например
		sessionId: 500, // Например
	},
	{
		name: 'Менеджер',
		chatLink: 'https://avtorit24.ru/online/client-manager',
		chatId: 2020,
		sessionId: 500,
	},
	{
		name: 'Отдел бухгалтерии',
		chatLink: 'https://avtorit24.ru/online/client-department', // Мб ссылка общая для всех клиентов
		chatId: 2020,
		sessionId: 500,
	},
	{
		name: 'Отдел юридических услуг',
		chatLink: 'https://avtorit24.ru/online/client-department', // Мб ссылка общая для всех клиентов
		chatId: 2020,
		sessionId: 500,
	},
	{
		name: 'Отдел подбора персонала',
		chatLink: 'https://avtorit24.ru/online/client-department', // Мб ссылка общая для всех клиентов
		chatId: 2020,
		sessionId: 500,
	},
];
