import { Box } from '@mui/system';
import cls from './SideMenu.module.scss';

export const SideMenu = ({ children, ...props }) => {
	return (
		<Box
			component="aside"
			className={cls.SideMenu}
			{...props}
		>
			{children}
		</Box>
	);
};
