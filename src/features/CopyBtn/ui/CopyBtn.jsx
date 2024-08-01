import React from 'react';
import CopyIcon from 'shared/assets/CopyIcon/ui/CopyIcon';
import { Button } from 'shared/ui/Button';

const CopyBtn = ({
    className,
    children,
    icon = 'end',
    stroke,
    ...otherProps
}) => {
    return (
        <Button
            className={className}
            variant="unStyled"
            {...otherProps}
        >
            {icon === 'end' ? children : null}
            <CopyIcon stroke={stroke} />
            {icon === 'start' ? children : null}
        </Button>
    );
};

export default CopyBtn;
