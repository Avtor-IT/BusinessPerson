import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoutes, RoutePath } from 'shared/config/routeConfig';
import { Box, Skeleton, Typography } from '@mui/material';
import { Card } from 'shared/ui/Card';
import Circle from 'shared/assets/Circle/ui/Circle';
import AvatarManager from 'shared/ui/AvatarManager';
import MessageIcon from 'shared/assets/MessageIcon/ui/MessageIcon';
import CopyBtn from 'features/CopyBtn';
import cls from './MyManager.module.scss';
import { useManager } from 'entities/Manager';
import { formatPhoneNumber } from 'shared/lib';

export const MyManager = ({ ...props }) => {
	const [hovered, setHovered] = React.useState(false); // для анимации при наведении

	const { data: manager, isLoading, isError } = useManager();

	if (isLoading)
		return (
			<Skeleton
				variant="rectangular"
				height="100%"
				sx={{ borderRadius: '16px' }}
			/>
		);

	if (isError)
		return (
			<Card
				className={`${cls.MyManager}`}
				onMouseOver={() => setHovered(true)}
				onMouseOut={() => setHovered(false)}
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

	return (
		<Card
			className={`${cls.MyManager}`}
			onMouseOver={() => setHovered(true)}
			onMouseOut={() => setHovered(false)}
			{...props}
		>
			<Circle
				width={474}
				height={474}
				top={-197}
				right={hovered ? -98 : -148}
			/>
			<Box
				display={'flex'}
				justifyContent={'space-between'}
			>
				<Typography variant="M24">Мой менеджер</Typography>
				<Link
					to={RoutePath[AppRoutes.MAIN]}
					className={`${cls.btnMessage}`}
				>
					<Typography variant="L16">Написать</Typography>
					<MessageIcon />
				</Link>
			</Box>
			<Box className={`${cls.infoManager}`}>
				<Box className={`${cls.avatarFIO}`}>
					<AvatarManager src={manager.result[0]['PERSONAL_PHOTO']} />
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
				{manager.result[0]['WORK_PHONE'] ? (
					<CopyBtn
						className={`${cls.phoneManager}`}
						textToCopy={manager.result[0]['WORK_PHONE']}
					>
						<Typography variant="L24">
							{formatPhoneNumber(manager.result[0]['WORK_PHONE'])}
						</Typography>
					</CopyBtn>
				) : null}
			</Box>
		</Card>
	);
};
