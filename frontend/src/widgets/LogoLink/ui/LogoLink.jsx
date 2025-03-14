import { Box } from '@mui/system';
import { Link } from 'react-router-dom';
import { AppRoutes, RoutePath } from 'shared/router';
import cls from './LogoLink.module.scss';

export const LogoLink = ({ className, children, ...props }) => {
	return (
		<Box>
			<Link
				className={`${cls.logoContainer} ${className || ''}`}
				to={RoutePath[AppRoutes.MAIN]}
				style={{ marginInline: 'auto' }}
				{...props}
			>
				{children}
			</Link>
		</Box>
	);
};
