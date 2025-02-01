import { Typography } from '@mui/material';
import { Box, Grid, Stack } from '@mui/system';
import { UploadFileCard } from 'features/Documents/UploadDocument';
import { Card } from 'shared/ui/Card';
import { CompanyDocuments } from 'widgets/CompanyDocuments';

const DocumentsPage = () => {
	return (
		<Box>
			<Grid
				container
				columns={3}
				columnSpacing={2}
			>
				<Grid size={1}>
					<Card minHeight="100%">
						<Stack gap={4}>
							<Typography variant="M24">
								Документы
								<br />
								на&nbsp;ЭЦП
							</Typography>
							<Typography variant="L20">
								Документы отсутствуют.
							</Typography>
						</Stack>
					</Card>
				</Grid>
				<Grid size={1}>
					<Card minHeight="100%">
						<Stack gap={4}>
							<Typography variant="M24">
								Документы
								<br />
								на&nbsp;утверждение
							</Typography>
							<Typography variant="L20">
								Документы отсутствуют.
							</Typography>
						</Stack>
					</Card>
				</Grid>
				<Grid size={1}>
					<UploadFileCard />
				</Grid>
			</Grid>
			<CompanyDocuments marginTop={4} />
		</Box>
	);
};

export default DocumentsPage;
