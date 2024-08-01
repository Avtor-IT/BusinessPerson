import React from 'react';
import AddSquareIcon from 'shared/assets/AddSquareIcon/ui/AddSquareIcon';
import { Button } from 'shared/ui/Button';

const AddSquareBtn = ({ className, children, icon = 'end', ...otherProps }) => {
    return (
        <Button
            className={className}
            variant="unStyled"
            {...otherProps}
        >
            {icon === 'end' ? children : null}
            <AddSquareIcon />
            {icon === 'start' ? children : null}
        </Button>
    );
};

export default AddSquareBtn;
