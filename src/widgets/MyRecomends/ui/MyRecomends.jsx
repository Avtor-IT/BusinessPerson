import React from 'react';
import { Card } from 'shared/ui/Card';
import { Typography } from '@mui/material';
import cls from './MyRecomends.module.scss';
import { SliderRecomends } from 'features/SliderRecomeds';

export const MyRecomends = ({ ...props }) => {
    return (
        <Card
            className={`${cls.MyRecomends}`}
            {...props}
        >
            <Typography variant="M24">Рекомендации</Typography>
            <SliderRecomends />
        </Card>
    );
};
