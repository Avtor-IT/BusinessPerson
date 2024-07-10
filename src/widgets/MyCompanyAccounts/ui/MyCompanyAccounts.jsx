import React from 'react';
import { Card } from 'shared/ui/Card';
import cls from './myCompanyAccounts.module.scss';
import { Box } from '@mui/material';

export const MyCompanyAccounts = ({ className, children, ...props }) => {
    return (
        <Card className={`${cls.myCompanyAccounts}`}>
            <Card className={`${cls.myCompany}`}>
                <div className={'title'}> Моя компания </div>
                <a href={'#'} style={{ fontSize: '20px' }}>
                    Подробнее
                </a>
            </Card>
            <Card className={`${cls.myAccounts}`}>
                <Box style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div className={'title'}> Счета </div>
                    <div>
                        Дата следующего платежа
                    </div>
                </Box>
                <div className={`${cls.dateEnd}`}>
                    20.12.2024
                </div>
            </Card>
        </Card>
    )
};