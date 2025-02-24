import { Box, Button, Stack, Typography } from '@mui/material';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Document from 'shared/icons/Document';
import HomeIcon from 'shared/icons/Home';
import ListIcon from 'shared/icons/List';
import Market from 'shared/icons/Market';
import OfficeIcon from 'shared/icons/Office';
import { AppRoutes, RoutePath } from 'shared/router';
import cls from './Navigation.module.scss';

const styles = (isActive) => ({
	justifyContent: 'start',
	backgroundColor: isActive ? 'primary.main' : 'transparent',
	borderRadius: '8px',
	boxSizing: 'border-box',

	'&:hover': {
		backgroundColor: isActive ? 'primary.main' : 'transparent',
	},
	'&:not(.nav--active)::before': {
		borderLeft: '3px solid',
		borderColor: 'transparent',
		borderRadius: 'inherit',
		display: 'block',
		content: '""',
		position: 'absolute',
		left: '-3px',
		background: 'transparent',
		height: '100%',
		width: '100%',
		transition: 'border-color 0.2s ease, left 0.2s ease',
	},

	'&:not(.nav--active):hover::before': {
		borderColor: 'primary.main',
		left: '0',
	},
});

const navIcon = (el, isActive) => (
	<Stack
		justifyContent="center"
		sx={{
			'& svg': {
				stroke: isActive ? 'white' : 'currentColor',
			},
		}}
	>
		{el.icon}
	</Stack>
);

export const Navigation = ({ ...props }) => {
	const navigate = useNavigate();
	const location = useLocation();

	const menu = {
		list: [
			{
				title: 'Главная',
				link: RoutePath[AppRoutes.MAIN],
				icon: <HomeIcon />,
			},
			{
				title: 'Моя компания',
				link: RoutePath[AppRoutes.COMPANY],
				icon: <ListIcon />,
			},
			{
				title: 'Маркетплейс',
				link: RoutePath[AppRoutes.MARKET],
				icon: <Market />,
			},
			{
				title: 'Конструктор письма',
				link: RoutePath[AppRoutes.LETTER],
				icon: <Document />,
			},
			{
				title: 'Обучение',
				link: RoutePath[AppRoutes.TUTORIAL],
				icon: <OfficeIcon />,
			},
		],
	};

	return (
		<Box
			className={cls.NavigationList}
			{...props}
		>
			{menu.list.map((el) => {
				const isActive =
					el.link === RoutePath[AppRoutes.MAIN]
						? location.pathname === el.link
						: location.pathname.startsWith(el.link);

				return (
					<Button
						className={isActive ? 'nav--active' : ''}
						key={el.link}
						component={Link}
						to={el.link}
						variant={isActive ? 'contained' : 'text'}
						onClick={() => {
							navigate(el.link);
						}}
						fullWidth
						sx={styles(isActive)}
						startIcon={navIcon(el, isActive)}
					>
						<Typography
							variant="L16"
							color={isActive ? 'textPrimary.default' : undefined}
						>
							{el.title}
						</Typography>
					</Button>
				);
			})}
		</Box>
	);
};
