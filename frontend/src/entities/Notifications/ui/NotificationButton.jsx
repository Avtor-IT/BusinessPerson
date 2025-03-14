import NotificationsIcon from 'shared/icons/Notifications';
import { Button } from 'shared/ui/Button';
import Badge from 'shared/ui/Badge';

const NotificationButton = () => {
	return (
		<Button variant="unStyled">
			<Badge>
				<NotificationsIcon />
			</Badge>
		</Button>
	);
};

export default NotificationButton;
