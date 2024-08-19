import { BXEndpoints, portalUrl, webhookToken } from 'shared/model';
import axios from 'axios';

const getChatIdByCRM = async (entityType, entityId) => {
	try {
		return (
			await axios.get(
				portalUrl + webhookToken + BXEndpoints.GET_CHAT_ID,
				{
					params: {
						CRM_ENTITY_TYPE: entityType,
						CRM_ENTITY: entityId,
					},
				}
			)
		).data;
	} catch (e) {
		throw Error(e);
	}
};

export default getChatIdByCRM;
