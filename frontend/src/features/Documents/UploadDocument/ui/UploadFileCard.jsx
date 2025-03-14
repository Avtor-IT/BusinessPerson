import { CircularProgress, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useUploadFilesMutation } from 'entities/Documents';
import { useState } from 'react';
import { CloseIcon } from 'shared/icons/Close';
import { PaperClipIcon } from 'shared/icons/Paperclip';
import { Button } from 'shared/ui/Button';
import { TitledCard } from 'shared/ui/Card';
import Input from 'shared/ui/Input';

const UploadFileCard = () => {
	const [files, setFiles] = useState([]);

	const { mutate: upload, isPending } = useUploadFilesMutation();

	const handleFileChange = (event) => {
		const files = event.target.files;
		if (files) {
			const filesArray = Array.from(files);
			setFiles(filesArray);
		}
	};

	const clearFile = (i) => {
		setFiles(files.filter((_, index) => index !== i));
	};

	const uploadHandler = () => {
		let blobFiles = [];
		files.forEach((file) => {
			const reader = new FileReader();
			reader.onload = () => {
				blobFiles.push({ name: file.name, content: reader.result });
				if (blobFiles.length === files.length) {
					upload(blobFiles, {
						onSettled: (result) => {
							console.log(result);
							result.forEach((promise, i) => {
								if (promise.status === 'fulfilled') {
									clearFile(i);
								}
								if (promise.status === 'rejected') {
									// @TODO: Доделать обработку ошибки при загрузке файла
								}
							});
						},
					});
				}
			};
			reader.onerror = (error) => {
				console.error('Error while reading file:', error);
			};
			reader.readAsDataURL(file);
		});
	};

	const changeNameHandler = (e, id) => {
		setFiles((prev) =>
			prev.map((file, i) => {
				if (i === id) {
					return { ...file, name: e.target.value };
				}
				return file;
			})
		);
	};

	return (
		<TitledCard
			sx={{ padding: 0 }}
			circleSx={{
				width: '407px',
				height: '407px',
				top: '-297px',
				left: '-106px',
				backgroundColor: 'var(--secondary)',
			}}
		>
			<Stack
				justifyContent={!files?.length ? 'space-between' : 'start'}
				minHeight="332px"
				gap={2}
			>
				<Box
					p="32px 24px 24px"
					position="relative"
				>
					<Stack
						direction="row"
						justifyContent="space-between"
						alignItems="start"
					>
						<Typography
							variant="M20"
							color="var(--color-light-secondary)"
							position="relative"
							zIndex={2}
						>
							Добавить
							<br />
							новый документ
						</Typography>
						<Button
							variant={'unStyled'}
							style={{
								color:
									isPending || !files?.length
										? 'var(--tertiary)'
										: 'var(--secondary)',
							}}
							onClick={uploadHandler}
							disabled={isPending || !files?.length}
						>
							<Typography variant="M16">Добавить</Typography>
						</Button>
					</Stack>
				</Box>
				{files.length ? (
					<Stack
						gap={2}
						paddingInline={3}
					>
						<Typography
							variant="M16"
							color="var(--tertiary)"
						>
							Загруженные файлы:
						</Typography>
						<Stack
							overflow="auto"
							maxHeight="177px"
							gap="4px"
							alignItems="start"
							justifyContent="start"
							pb={1}
						>
							{files.map((file, id) => (
								<Stack
									direction="row"
									key={id}
									gap={1}
									alignItems="center"
									color="var(--secondary)"
								>
									<Input
										border="1px solid var(--secondary)"
										value={file.name}
										onChange={(e) =>
											changeNameHandler(e, id)
										}
										sx={{
											padding: '8px 16px',
										}}
										disabled={isPending}
										inputProps={{
											style: { fontSize: '1rem' },
										}}
									/>
									{isPending ? (
										<CircularProgress
											size="24px"
											color="inherit"
										/>
									) : (
										<Button
											variant="unStyled"
											onClick={() => clearFile(id)}
										>
											<CloseIcon />
										</Button>
									)}
								</Stack>
							))}
						</Stack>
					</Stack>
				) : null}
				{!files?.length ? (
					<Box
						border="2px dashed var(--secondary)"
						borderRadius="16px"
						padding="40px 44px"
						justifyContent="center"
						alignItems="center"
					>
						<Stack gap={2}>
							<Typography
								variant="R16"
								textAlign="center"
							>
								Перетащите файлы или выберите на компьютере
							</Typography>
							<Button variant={'unStyled'}>
								<label>
									<input
										disabled={isPending}
										type="file"
										onChange={handleFileChange}
										multiple
										id="file-input"
										style={{
											clip: 'rect(0 0 0 0)',
											clipPath: 'inset(50%)',
											height: 1,
											overflow: 'hidden',
											position: 'absolute',
											bottom: 0,
											left: 0,
											whiteSpace: 'nowrap',
											width: 1,
										}}
									/>
									<Stack
										direction="row"
										alignItems="center"
										justifyContent="center"
										gap={1}
									>
										<PaperClipIcon />
										<Typography variant="R20">
											Выберите файл
										</Typography>
									</Stack>
								</label>
							</Button>
						</Stack>
					</Box>
				) : null}
			</Stack>
		</TitledCard>
	);
};

export default UploadFileCard;
