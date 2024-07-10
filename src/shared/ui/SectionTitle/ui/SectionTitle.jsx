import React from 'react';
import {Typography} from "@mui/material";

const SectionTitle = ({children}) => {
    return (
        <Typography variant={'h3'}>
            {children}
        </Typography>
    );
};

export default SectionTitle;