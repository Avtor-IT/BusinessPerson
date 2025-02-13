import { Grid, Stack } from '@mui/system';
import { TaxExtractCard } from 'entities/Documents';
import { CompanyCard } from 'widgets/CompanyCard';
import { MyDocumentsCard, WorkingDocumentsCard } from 'widgets/DocumentsCard';
import { DocumentTemplateCard } from 'widgets/DocumentTemplate';

const CompanyPage = () => {
	return (
		<Grid
			container
			columns={5}
			spacing={2}
		>
			<Grid size={4}>
				<Stack gap={2}>
					<Grid
						minHeight="192px"
						container
						columns={2}
						spacing={2}
					>
						<Grid size={1}>
							<CompanyCard
								height="100%"
								documents={false}
							/>
						</Grid>
						<Grid size={1}>
							<TaxExtractCard height="100%" />
						</Grid>
					</Grid>
					<Grid
						minHeight="337px"
						container
						columns={2}
						spacing={2}
						flexGrow={1}
					>
						<Grid size={1}>
							<MyDocumentsCard
								height="100%"
								companyTitle="Вторая тестовая компания"
							/>
						</Grid>
						<Grid size={1}>
							<WorkingDocumentsCard
								height="100%"
								companyTitle="Вторая тестовая компания"
							/>
						</Grid>
					</Grid>
				</Stack>
			</Grid>
			<Grid size={1}>
				<DocumentTemplateCard height="100%" />
			</Grid>
		</Grid>
	);
};

export default CompanyPage;
