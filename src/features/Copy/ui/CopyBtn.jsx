import React from 'react';
import { Snackbar } from '@mui/material';
import { Button } from 'shared/ui/Button';
import CopyIcon from 'shared/icons/Copy';

const CopyBtn = ({
	className,
	children,
	icon = 'end',
	stroke,
	textToCopy,
	...otherProps
}) => {
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
				className={className}
				variant="unStyled"
				onClick={handleCopy}
				{...otherProps}
			>
				{icon === 'end' ? children : null}
				<CopyIcon stroke={stroke} />
				{icon === 'start' ? children : null}
			</Button>
			<Snackbar
				open={openSnackbar}
				autoHideDuration={3000}
				onClose={handleClose}
				message="Текст скопирован"
			/>
		</>
	);
};

export default CopyBtn;
