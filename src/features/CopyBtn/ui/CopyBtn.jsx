import React from 'react';
import CopyIcon from 'shared/assets/CopyIcon/ui/CopyIcon';
import { Button } from 'shared/ui/Button';

const CopyBtn = ({ className, children, icon = 'start', ...otherProps }) => {
    return (
        <Button
            className={className}
            variant="unStyled"
            {...otherProps}
        >
            {icon === 'end' && children}
            <CopyIcon />
            {icon === 'start' && children}
        </Button>
    );
};

export default CopyBtn;
