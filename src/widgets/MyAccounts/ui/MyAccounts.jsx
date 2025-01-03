import { Link } from 'react-router-dom';
import { AppRoutes, RoutePath } from 'shared/config/routeConfig';
import { Box, Typography } from '@mui/material';
import IconButton from 'shared/ui/Button/ui/IconButton';

export const MyAccounts = () => {
	return (
		<>
			<Box>
				<Box
					display={'flex'}
					justifyContent={'space-between'}
					alignItems={'center'}
				>
					<Typography variant="M24"> Счета </Typography>
					<Typography variant="L16">
						{' '}
						Дата следующего платежа{' '}
					</Typography>
				</Box>
				<Typography
					variant="R16"
					style={{ display: 'flex', justifyContent: 'end' }}
				>
					20.12.2024
				</Typography>
			</Box>
			<Box
				display={'flex'}
				justifyContent={'space-between'}
				alignItems={'center'}
				fontSize={'22px'}
			>
				<Link to={RoutePath[AppRoutes.MAIN]}>
					<Typography variant="L20">История</Typography>
				</Link>
				<IconButton
					style={{
						display: 'flex',
						gap: '8px',
						alignItems: 'center',
					}}
				>
					<Typography variant="L20">Оплатить</Typography>
				</IconButton>
			</Box>
		</>
	);
};
