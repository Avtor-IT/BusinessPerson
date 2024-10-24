import { Box, Typography } from '@mui/material';
import ExportBtn from 'features/ExportBtn/ui/ExportBtn';
import ImportBtn from 'features/ImportBtn/ui/ImportBtn';
import ArrowIcon from 'shared/assets/ArrowIcon/ui/ArrowIcon';
import CopyBtn from 'features/CopyBtn/ui/CopyBtn';
import cls from './MyCompany.module.scss';
import { Link } from 'react-router-dom';
import { AppRoutes, RoutePath } from 'shared/config/routeConfig';

export const MyCompany = () => {
	return (
		<>
			<Box
				display={'flex'}
				justifyContent={'space-between'}
			>
				<Typography variant="M24"> Моя компания </Typography>
				<Link
					to={RoutePath[AppRoutes.MAIN]}
					className={`${cls.btnExtend}`}
				>
					<Typography variant="L20">Подробнее</Typography>
					<ArrowIcon variant="right" />
				</Link>
			</Box>
			<Box
				display={'flex'}
				flexDirection={'column'}
				gap={'16px'}
			>
				<Typography variant="R20">ООО «Компания»</Typography>
				<Box
					display={'flex'}
					justifyContent={'space-between'}
					alignItems={'center'}
				>
					<CopyBtn
						className={`${cls.btnCopy}`}
						textToCopy="1234567890"
					>
						<Typography variant="L20">ИНН: 1234567890</Typography>
					</CopyBtn>
					<Box
						display={'flex'}
						gap={'16px'}
						alignItems={'center'}
					>
						<ExportBtn />
						<ImportBtn />
					</Box>
				</Box>
			</Box>
		</>
	);
};
