import { Box, Typography } from '@mui/material';

const RenderFile = ({ content, type }) => {
	if (content === null) {
		return (
			<Box p={2}>
				<Typography
					variant="M24"
					color="var(--gray-dark)"
					lineHeight={1.5}
				>
					Формат не поддерживается.
					<br />
					Скачайте файл для просмотра.
				</Typography>
			</Box>
		);
	}

	if (!content) {
		return (
			<Box p={2}>
				<Typography
					variant="M24"
					color="var(--gray-dark)"
				>
					Файл пуст.
				</Typography>{' '}
			</Box>
		);
	}

	return type.startsWith('image/') ? (
		<img
			src={content}
			alt="document"
			style={{ width: '100%', maxHeight: '100%' }}
		/>
	) : type === 'application/pdf' ? (
		<embed
			src={content}
			type="application/pdf"
			width="100%"
			height="800px"
		/>
	) : type === 'text/plain' ? (
		<pre
			style={{
				padding: '16px',
				whiteSpace: 'pre-wrap',
				overflowWrap: 'break-word',
				maxHeight: '300px',
				overflowY: 'auto',
				fontSize: '24px',
			}}
		>
			{content}
		</pre>
	) : null;
};

export default RenderFile;
