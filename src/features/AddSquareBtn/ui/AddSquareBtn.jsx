import React from 'react';
import AddSquareIcon from 'shared/assets/AddSquareIcon/ui/AddSquareIcon';
import { Button } from 'shared/ui/Button';

const AddSquareBtn = ({ ...otherProps }) => {
    return (
        <Button
            {...otherProps}
            variant="unStyled"
        >
            <AddSquareIcon />
        </Button>
    );
};

export default AddSquareBtn;
