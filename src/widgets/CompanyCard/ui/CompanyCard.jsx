import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Skeleton, Typography } from '@mui/material';
import { useCompanies } from 'entities/Company';
import { AppRoutes, RoutePath } from 'shared/config/routeConfig';
import { Card, ErrorCard } from 'shared/ui/Card';
import Circle from 'shared/icons/Circle';
import { Stack } from '@mui/system';
import CompanyTitle from './CompanyTitle';
import CompanyBalanceCard from './CompanyBalanceCard';

export const CompanyCard = () => {
	const { data: companies, isError, isLoading } = useCompanies();

	const selectedCompany = useMemo(() => {
		if (companies) {
			return companies[0];
		}
	}, [companies]);

	if (isError) {
		return <ErrorCard text={`Ошибка при загрузке компании`} />;
	}

	if (isLoading) {
		return (
			<Skeleton
				variant="rectangular"
				height="100%"
				sx={{ borderRadius: '16px', minHeight: '192px' }}
			/>
		);
	}

	return (
		<Stack
			component={Card}
			position="relative"
			height="100%"
			sx={{
				paddingTop: '24px !important',
			}}
		>
			<Stack
				height="100%"
				direction="row"
				alignItems="stretch"
				justifyContent="space-between"
			>
				<Stack justifyContent="space-between">
					<Circle
						style={{ left: -238, top: 112 }}
						sx={{
							background:
								'linear-gradient(157deg, rgba(81,73,150,1) 0%, rgba(255,255,255,1) 100%) !important',
						}}
					/>
					<Circle
						style={{ left: -220, top: -594 }}
						variant="purple"
					/>

					<CompanyTitle title={selectedCompany?.['TITLE']} />

					<Typography
						variant="R20"
						style={{ zIndex: '1', color: '#fff' }}
					>
						<Link
							to={`${RoutePath[AppRoutes.COMPANY]}/${
								selectedCompany?.['TITLE']
							}/documents`}
							state={{ company: selectedCompany }}
						>
							Мои документы
						</Link>
					</Typography>
				</Stack>

				<CompanyBalanceCard />
			</Stack>
		</Stack>
	);
};
