import { Stack } from '@mui/system';
import { CreateDocumentByTemplateButton } from 'features/CreateDocument';
import { Link } from 'react-router-dom';
import Document from 'shared/icons/Document';
import { AppRoutes, createRoute } from 'shared/router';
import { TitledCard } from 'shared/ui/Card';

const DocumentTemplateCard = ({ ...props }) => {
	return (
		<TitledCard
			{...props}
			circleSx={{ background: '#C16496', left: '-185px', top: '-553px' }}
			title="Заполнить фирменный блaнк"
		>
			<Stack
				height="100%"
				justifyContent="end"
				alignItems="center"
				gap={6}
			>
				<Document
					stroke="var(--tertiary)"
					size="232px"
					strokeWidth="0.5"
				/>
				<Stack
					alignItems="center"
					gap={2}
				>
					<CreateDocumentByTemplateButton />
					<Link to={createRoute(AppRoutes.LETTER)}>История</Link>
				</Stack>
			</Stack>
		</TitledCard>
	);
};

export default DocumentTemplateCard;
