import React from 'react';
import ExportIcon from 'shared/assets/ExportIcon/ui/ExportIcon';
import { Button } from 'shared/ui/Button';

const ExportBtn = ({ ...otherProps }) => {
    return (
        <Button
            {...otherProps}
            style={{ width: '24px', height: '24px' }}
            variant="unStyled"
        >
            <ExportIcon />
        </Button>
    );
};

export default ExportBtn;
