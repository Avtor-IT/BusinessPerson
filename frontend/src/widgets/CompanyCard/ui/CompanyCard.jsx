import { Skeleton, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { useCompanies } from 'entities/Company';
import { INN, KPP } from 'features/GetCompanyInfo';
import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { AppRoutes, RoutePath } from 'shared/router';
import { Circle, ErrorCard, TitledCard } from 'shared/ui/Card';
import CompanyBalanceCard from './CompanyBalanceCard';
import CompanyTitle from './CompanyTitle';

export const CompanyCard = ({ documents = true, ...props }) => {
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
				{...props}
				sx={{ borderRadius: '16px', minHeight: '192px' }}
			/>
		);
	}

	return (
		<TitledCard
			sx={{
				paddingTop: '24px !important',
			}}
			title={
				<Link
					style={{ zIndex: 1 }}
					to={RoutePath[AppRoutes.COMPANY]}
				>
					<CompanyTitle title={selectedCompany?.['TITLE']} />
				</Link>
			}
			{...props}
		>
			<Stack
				height="100%"
				direction="row"
				alignItems="stretch"
				justifyContent="space-between"
			>
				<Stack
					flexGrow={1}
					justifyContent="space-between"
				>
					{documents ? (
						<Stack
							flexGrow={1}
							justifyContent="end"
						>
							<Circle
								style={{ left: -238, top: 112 }}
								sx={{
									background:
										'linear-gradient(157deg, rgba(81,73,150,1) 0%, rgba(255,255,255,1) 100%) !important',
								}}
							/>
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
					) : (
						<Stack
							gap="4px"
							justifyContent="end"
							flexGrow={1}
						>
							<INN />
							<KPP />
						</Stack>
					)}
				</Stack>

				<CompanyBalanceCard />
			</Stack>
		</TitledCard>
	);
};
