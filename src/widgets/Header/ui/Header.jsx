import { ChatBot } from 'features/ChatBot';
import cls from './Header.module.scss';
import { useMinWidth } from 'shared/model';
import { Box, Stack } from '@mui/system';
import { NotificationButton } from 'entities/Notifications';
import { User } from 'entities/User';

export const Header = ({ className, ...props }) => {
	const { lg } = useMinWidth();

	return (
		<Box
			component="header"
			className={`${cls.Header} ${className}`}
			{...props}
		>
			<Stack
				direction="row"
				spacing={2}
				justifyContent="space-between"
				alignItems="center"
			>
				<Box
					alignSelf="center"
					height="100%"
					flexGrow={lg ? 1 : 0}
				>
					<ChatBot />
				</Box>
				<Box
					alignSelf="center"
					display="flex"
					alignItems="center"
					gap="16px"
				>
					<NotificationButton />
					<User />
				</Box>
			</Stack>
		</Box>
	);
};
