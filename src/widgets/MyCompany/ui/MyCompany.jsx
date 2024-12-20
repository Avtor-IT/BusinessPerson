import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Box, Skeleton, Typography } from '@mui/material';
import { useCompanies } from 'entities/Company';
import ExportBtn from 'features/ExportBtn';
import ImportBtn from 'features/ImportBtn';
import CopyBtn from 'features/CopyBtn';
import ArrowBtn from 'features/ArrowBtn';
import { AppRoutes, RoutePath } from 'shared/config/routeConfig';
import { Card, ErrorCard } from 'shared/ui/Card';
import Circle from 'shared/assets/Circle';
import cls from './myCompany.module.scss';

export const MyCompany = () => {
	const [hovered, setHovered] = React.useState(false); // для анимации при наведении

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
		return <ErrorCard text={`Ошибка при загрузке компании`} />;
	}

	return (
		<Card
			style={{ height: '100%' }}
			className={`${cls.companyCard}`}
			onMouseOver={() => setHovered(true)}
			onMouseOut={() => setHovered(false)}
		>
			<Box
				display={'flex'}
				justifyContent={'space-between'}
			>
				<Circle
					top={hovered ? -570 : -584}
					right={226}
					variant="purple"
				/>
				<Typography
					variant="M24"
					style={{ zIndex: '2', color: '#fff' }}
				>
					Моя компания
				</Typography>
				<Link
					to={RoutePath[AppRoutes.MAIN]}
					className={`${cls.btnExtend}`}
				>
					<Typography variant="L20">Подробнее</Typography>
					<ArrowBtn />
				</Link>
			</Box>
			<Box
				display={'flex'}
				flexDirection="column"
				gap={'16px'}
			>
				<Typography variant="R20">
					{selectedCompany?.['TITLE']}
				</Typography>
				<Box
					display={'flex'}
					alignItems={'center'}
					justifyContent={'space-between'}
				>
					<Box
						display={'flex'}
						alignItems={'center'}
						gap={'24px'}
					>
						{selectedCompany?.['UF_CRM_COMPANY_INN'] ? (
							<CopyBtn
								className={`${cls.btnCopy}`}
								textToCopy={
									selectedCompany['UF_CRM_COMPANY_INN']
								}
							>
								<Typography variant="L20">
									{`ИНН ${selectedCompany['UF_CRM_COMPANY_INN']}`}
								</Typography>
							</CopyBtn>
						) : (
							<Typography variant="L20">
								ИНН отсутствует
							</Typography>
						)}
						<Box
							display={'flex'}
							alignContent={'center'}
							gap={'8px'}
						>
							<ExportBtn />
							<ImportBtn />
						</Box>
					</Box>
					<Typography
						variant="R20"
						style={{ zIndex: '2', color: '#fff' }}
					>
						Мои документы
					</Typography>
					<Circle
						top={hovered ? 110 : 131}
						right={-260}
					/>
				</Box>
			</Box>
		</Card>
	);
};
