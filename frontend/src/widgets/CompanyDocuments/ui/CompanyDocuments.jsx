import { Typography } from '@mui/material';
import { Box, Grid, Stack } from '@mui/system';
import { useCompanies } from 'entities/Company';
import { useMemo } from 'react';
import { useParams } from 'react-router';
import DocumentList from './DocumentList';

const CompanyDocuments = ({ ...props }) => {
	const { companyTitle } = useParams();
	const { data: companies, isLoading, error } = useCompanies();

	const company = useMemo(() => {
		if (companies) {
			return companies.find(
				(company) => company['TITLE'] === companyTitle
			);
		}
		return null;
	}, [companies, companyTitle]);

	if (isLoading) {
		return (
			<Box {...props}>
				<Typography variant="M40">Загрузка компании...</Typography>
			</Box>
		);
	}

	if (error) {
		return (
			<Box {...props}>
				<Stack>
					<Typography variant="M24">
						Ошибка при загрузке компании.
					</Typography>
					<Typography variant="M24">{error.message}</Typography>
				</Stack>
			</Box>
		);
	}

	if (!company) {
		<Box {...props}>
			<Stack>
				<Typography variant="M24">Компания не найдена.</Typography>
			</Stack>
		</Box>;
	}

	return (
		<Box {...props}>
			<Grid
				container
				columns={3}
			>
				<Grid size={2}>
					<DocumentList company={company} />
				</Grid>
			</Grid>
		</Box>
	);
};

export default CompanyDocuments;
