import { Box, Skeleton, Typography } from '@mui/material';
import ExportBtn from 'features/ExportBtn/ui/ExportBtn';
import ImportBtn from 'features/ImportBtn/ui/ImportBtn';
import ArrowIcon from 'shared/assets/ArrowIcon/ui/ArrowIcon';
import CopyBtn from 'features/CopyBtn/ui/CopyBtn';
import cls from './MyCompany.module.scss';
import { Link } from 'react-router-dom';
import { AppRoutes, RoutePath } from 'shared/config/routeConfig';
import { useCompanies } from 'entities/Company';
import { Card } from 'shared/ui/Card';
import React, { useEffect } from 'react';

export const MyCompany = () => {
	const { data: companies, isError, isLoading } = useCompanies();

	const [selectedCompany, setSelectedCompany] = React.useState();

	useEffect(() => {
		if (companies) {
			setSelectedCompany(companies[0]);
		}
	}, [companies]);

	if (isLoading) {
		return (
			<Skeleton
				variant="rectangular"
				height="100%"
				sx={{ borderRadius: '16px', minHeight: '192px' }}
			/>
		);
	}

	if (isError) {
		return (
			<Card style={{ height: '100%' }}>
				<Typography variant="M24">
					Ошибка при загрузке компаний
				</Typography>
			</Card>
		);
	}

	return (
		<Card style={{ height: '100%' }}>
			<Box
				display={'flex'}
				justifyContent={'space-between'}
			>
				<Typography variant="M24">Моя компания</Typography>
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
				flexDirection="column"
				gap={'16px'}
			>
				<Typography variant="R20">
					{selectedCompany && selectedCompany['TITLE']}
				</Typography>
				<Box
					display={'flex'}
					justifyContent={'space-between'}
					alignItems={'center'}
				>
					{/* {selectedCompany && (*/}
					<CopyBtn
						className={`${cls.btnCopy}`}
						textToCopy="123456890"
					>
						<Typography variant="L20">
							{`ИНН: ${123456890}`}
						</Typography>
					</CopyBtn>
					{/* )}*/}
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
		</Card>
	);
};
