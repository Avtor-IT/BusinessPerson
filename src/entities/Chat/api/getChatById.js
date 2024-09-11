import axios from 'axios';
import { BXEndpoints, portalUrl, webhookToken } from 'shared/model';

const getChatById = async (id) => {
	try {
		return (
			await axios.get(
				portalUrl + webhookToken + BXEndpoints.GET_DIALOG_MESSAGES,
				{
					params: {
						DIALOG_ID: 'chat' + id,
					},
				}
			)
		).data;
	} catch (e) {
		throw Error(e);
	}
};

export default getChatById;
