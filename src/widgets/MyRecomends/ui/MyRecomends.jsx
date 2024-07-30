import React from 'react';
import { Card } from 'shared/ui/Card';
import { Box, Typography } from '@mui/material';
import { getArrayRecomends } from 'entities/ArrayRecomends';
import cls from './MyRecomends.module.scss';
import { SliderRecomends } from 'features/SliderRecomeds';

export const MyRecomends = ({ ...props }) => {
    const testArrayRecomends = getArrayRecomends();

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
