import React from 'react';
import Slider from "react-slick";
import { getArrayRecomends } from 'entities/ArrayRecomends';
import { Box, Typography } from '@mui/material';
import cls from './sliderRecomends.module.scss';
import { Card } from 'shared/ui/Card';
import './sliderRecomends.scss';

export const SliderRecomends = () => {
    const testArrayRecomends = getArrayRecomends();

    const hjd = 'hjd';


    const settings = {
        dots: false,
        accessibility: false,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        focusOnSelect: true,
        infinite: false,
    };

    return (
        <Box className={`${cls.sliderRecomends}`}>
            <Slider {...settings} style={{ width: '923px' }}>
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
