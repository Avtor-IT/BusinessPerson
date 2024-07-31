import React from 'react';
import { Card } from 'shared/ui/Card';
import { Typography } from '@mui/material';
import { SliderRecomends } from 'features/SliderRecomeds';
import cls from './MyRecomends.module.scss';

export const MyRecomends = ({ ...props }) => {
    return (
        <Card
            className={`${cls.MyRecomends}`}
            {...props}
        >
            <Typography variant='M24'>Рекомендации</Typography>
            <SliderRecomends />
        </Card>
    );
};
