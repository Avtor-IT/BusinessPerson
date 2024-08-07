import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoutes, RoutePath } from 'shared/config/routeConfig';
import { Box, Typography } from '@mui/material';
import { Card } from 'shared/ui/Card';
import Circle from 'shared/assets/Circle/ui/Circle';
import AvatarManager from 'shared/ui/AvatarManager';
import MessageIcon from 'shared/assets/MessageIcon/ui/MessageIcon';
import CopyBtn from 'features/CopyBtn';
import cls from './MyManager.module.scss';

export const MyManager = ({ ...props }) => {
	const [hovered, setHovered] = React.useState(false); // для анимации при наведении

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
					<Typography variant="L16"> Написать </Typography>
					<MessageIcon />
				</Link>
			</Box>
			<Box className={`${cls.infoManager}`}>
				<Box className={`${cls.avatarFIO}`}>
					<AvatarManager />
					<Typography
						variant="R20"
						style={{ lineHeight: '1.3' }}
					>
						Менеджерова
						<br />
						Менедж
						<br />
						Менеджеровна
					</Typography>
				</Box>
				<CopyBtn
					className={`${cls.phoneManager}`}
					textToCopy="+7 (999) 999 99-99"
				>
					<Typography variant="L24">+7 (999) 999 99-99</Typography>
				</CopyBtn>
			</Box>
		</Card>
	);
};
