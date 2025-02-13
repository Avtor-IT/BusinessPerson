import { Snackbar } from '@mui/material';
import React from 'react';
import { Button } from 'shared/ui/Button';

const CopyBtn = ({ children, textToCopy, snackabarProps, ...otherProps }) => {
	const [openSnackbar, setOpen] = React.useState(false);

	const handleCopy = () => {
		if (textToCopy) {
			navigator.clipboard.writeText(textToCopy).then(() => {
				setOpen(true);
			});
		}
	};

	const handleClose = (reason) => {
		if (reason === 'clickaway') {
			return;
		}
		setOpen(false);
	};

	return (
		<>
			<Button
				variant="unStyled"
				onClick={handleCopy}
				{...otherProps}
			>
				{children}
			</Button>
			<Snackbar
				open={openSnackbar}
				autoHideDuration={3000}
				onClose={handleClose}
				message="Текст скопирован"
				{...snackabarProps}
			/>
		</>
	);
};

export default CopyBtn;
