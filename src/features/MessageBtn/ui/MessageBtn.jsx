import MessageIcon from 'shared/assets/icons/Message';
import { Button } from 'shared/ui/Button';

const MessageBtn = ({ ...otherProps }) => {
	return (
		<Button
			{...otherProps}
			style={{ width: '24px', height: '24px' }}
			variant="unStyled"
		>
			<MessageIcon />
		</Button>
	);
};

export default MessageBtn;
