import NotificationsIcon from 'shared/assets/NotificationsIcon';
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
