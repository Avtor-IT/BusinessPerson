import React from 'react';
import AddSquareIcon from 'shared/assets/AddSquareIcon/ui/AddSquareIcon';
import { Box } from '@mui/material';

const AddSquareBtn = ({ ...otherProps }) => {
    /* Тут был Button, но компонент и так в кнопке, исправил на бокс */
    return (
        <Box {...otherProps}>
            <AddSquareIcon />
        </Box>
    );
};

export default AddSquareBtn;
