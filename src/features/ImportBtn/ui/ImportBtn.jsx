import React from 'react';
import ImportIcon from 'shared/assets/ImportIcon/ui/ImportIcon';
import { Button } from 'shared/ui/Button';

const ImportBtn = ({ ...otherProps }) => {
	return (
		<Button
			{...otherProps}
			style={{ width: '24px', height: '24px' }}
			variant="unStyled"
		>
			<ImportIcon />
		</Button>
	);
};

export default ImportBtn;
