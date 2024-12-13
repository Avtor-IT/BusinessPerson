// import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Skeleton, Typography } from '@mui/material';
import { useManager } from 'entities/Manager';
import CopyBtn from 'features/CopyBtn';
import MailBtn from 'features/MailBtn';
import MessageBtn from 'features/MessageBtn';
import { AppRoutes, RoutePath } from 'shared/config/routeConfig';
import { formatPhoneNumber } from 'shared/lib';
import { Card } from 'shared/ui/Card';
import AvatarManager from 'shared/ui/AvatarManager';
// import Circle from 'shared/assets/Circle/ui/Circle';
import cls from './MyManager.module.scss';

export const MyManager = ({ ...props }) => {
	// const [hovered, setHovered] = React.useState(false); // для анимации при наведении
	const { data: manager, isLoading, isError } = useManager();

	if (isLoading)
		return (
			<Skeleton
				variant="rectangular"
				height="100%"
				sx={{ borderRadius: '16px', minHeight: '192px' }}
			/>
		);

	if (isError)
		return (
			<Card
				className={`${cls.MyManager}`}
				// onMouseOver={() => setHovered(true)}
				// onMouseOut={() => setHovered(false)}
				{...props}
			>
				<Box
					display={'flex'}
					justifyContent={'space-between'}
					alignItems={'center'}
					height={'100%'}
				>
					<Typography variant="M24">
						Ошибка при загрузке менеджера
					</Typography>
				</Box>
			</Card>
		);

	if (manager) {
		return (
			<Card
				className={`${cls.MyManager}`}
				// onMouseOver={() => setHovered(true)}
				// onMouseOut={() => setHovered(false)}
				{...props}
			>
				{/* <Circle
				 width={474}
				 height={474}
				 top={-197}
				 right={hovered ? -98 : -148}
				 /> */}
				<Box className={`${cls.titleManager}`}>
					<Typography variant="M24">Мой менеджер</Typography>
					<MailBtn />
				</Box>
				<Box className={`${cls.infoManager}`}>
					<Box className={`${cls.avatarFIO}`}>
						<AvatarManager
							src={manager.result[0]['PERSONAL_PHOTO']}
						/>
						<Typography
							variant="R20"
							style={{ lineHeight: '1.3' }}
						>
							{manager.result[0]['LAST_NAME']}
							<br />
							{manager.result[0]['NAME']}
							<br />
							{manager.result[0]['SECOND_NAME']}
						</Typography>
					</Box>
					<Box className={`${cls.contactManager}`}>
						{manager.result[0]['WORK_PHONE'] ? (
							<CopyBtn
								className={`${cls.phoneManager}`}
								textToCopy={manager.result[0]['WORK_PHONE']}
							>
								<Typography variant="L24">
									{formatPhoneNumber(
										manager.result[0]['WORK_PHONE']
									)}
								</Typography>
							</CopyBtn>
						) : null}
						<Link
							to={RoutePath[AppRoutes.MAIN]}
							className={`${cls.btnMessage}`}
						>
							<Typography variant="L16">Написать</Typography>
							<MessageBtn />
						</Link>
					</Box>
				</Box>
			</Card>
		);
	}
};
