import React from 'react';
import Slider from "react-slick";
import { getArrayRecomends } from 'entities/ArrayRecomends';
import { Box, Typography } from '@mui/material';
import cls from './sliderRecomends.module.scss';
import { Card } from 'shared/ui/Card';
import { height } from '@mui/system';

export const SliderRecomends = ({ ...props }) => {

    const testArrayRecomends = getArrayRecomends();

    const settings = {
        dots: false,
        accessibility: false,
        arrows: false,
        // infinite: true,
        // speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        dir: 'rtl',
    };

    return (
        <Box className={`${cls.sliderRecomends}`}>
            <Slider {...settings} style={{ width: '923px', height: '257px', display: 'flex' }}>
                {testArrayRecomends.map((item, index) => (
                    <Card className={cls.recomendItem} key={index}>
                        <Typography variant='M20'>{item.title}</Typography>
                        <Typography variant='R16'>{item.description}</Typography>
                    </Card>
                ))}
            </Slider>
        </Box>
    );
};

