/**
 * API config
 **/
const version1 = 'v1';

export const apiEndpoints = {
	STATUS: `/api/${version1}/auth/status`,
	ME: `/api/${version1}/auth/users/me`,
	JWT_CREATE: `/api/${version1}/auth/jwt/create`,
	JWT_VERIFY: `/api/${version1}/auth/jwt/verify`,
	JWT_REFRESH: `/api/${version1}/auth/jwt/refresh`,
	MANAGER: `/api/${version1}/hooks/users_me_manager`,
	COMPANIES: `/api/${version1}/hooks/user_me_company`,
	DOCUMENTS: `/api/${version1}/hooks/user_company_documents`,
	USER_SERVICES: `/api/${version1}/hooks/user-service/check-expiration`,
	DOWNLOAD_FILE: `/api/${version1}/hooks/downloadfile`,
	UPLOAD_FILE: `/api/${version1}/hooks/upload_user_file`,
	CHAT_ROOM: 'chat/api/chat/:b24_user_id',
	CHAT_MESSAGES: 'chat/api/chat/:chat_room_id/messages',
};
