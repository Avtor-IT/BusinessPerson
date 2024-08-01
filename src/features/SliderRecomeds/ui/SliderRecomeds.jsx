import React from 'react';
import { getArrayRecomends } from 'entities/ArrayRecomends';
import { Box, Typography } from '@mui/material';
import cls from './sliderRecomends.module.scss';
import { Card } from 'shared/ui/Card';
import SwipeableViews from 'react-swipeable-views';

export const SliderRecomends = () => {
    const testArrayRecomends = getArrayRecomends();

    const [activeStep, setActiveStep] = React.useState(0);
    const test = 'test';
    const test = 'test';

    const handleStepChange = (step) => {
        setActiveStep(step);
    };
    return (
        <Box>
            <SwipeableViews
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
                slideCount={3}
                style={{ overflowX: 'visible' }}
                className={`${cls.sliderRecomends}`}
            >
                {testArrayRecomends.map((item, index) =>
                    Math.abs(activeStep - index) <= 2 ? (
                        <Card
                            className={cls.recomendItem}
                            key={index}
                        >
                            <Typography variant="M20">{item.title}</Typography>
                            <Typography variant="R16">
                                {item.description}
                            </Typography>
                        </Card>
                    ) : null
                )}
            </SwipeableViews>
        </Box>
    );
};
