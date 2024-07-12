import React from 'react';
import { Card } from 'shared/ui/Card';
import cls from './myCompanyAccounts.module.scss';
import { Box } from '@mui/material';
import ArrowIcon from 'shared/assets/ArrowIcon/ui/ArrowIcon';
import { display, height, width } from '@mui/system';
import CopyIcon from 'shared/assets/CopyIcon/ui/CopyIcon';
import ExportBtn from 'features/ExportBtn/ui/ExportBtn';
import ImportBtn from 'features/ImportBtn/ui/ImportBtn';
import { Link } from 'react-router-dom';
import { AppRoutes, RoutePath } from 'shared/config/routeConfig';

export const MyCompanyAccounts = ({ className, children, ...props }) => {
    return (
        <Card className={`${cls.myCompanyAccounts}`}>
            <Card className={`${cls.myCompany}`}>
                <Box
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        width: '100%',
                    }}
                >
                    <Box className={'title'}> Моя компания </Box>
                    <Link
                        to={RoutePath[AppRoutes.MAIN]}
                        style={{
                            fontSize: '20px',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}
                    >
                        Подробнее
                        <ArrowIcon direction="right" />
                    </Link>
                </Box>
                <Box
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '16px',
                    }}
                >
                    <Box className="subtitle">ООО "Компания"</Box>
                    <Box
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}
                    >
                        <Box
                            style={{
                                display: 'flex',
                                gap: '8px',
                                alignItems: 'center',
                            }}
                        >
                            ИНН: 1234567890
                            <CopyIcon />
                        </Box>
                        <Box
                            style={{
                                display: 'flex',
                                gap: '16px',
                                alignItems: 'center',
                            }}
                        >
                            <ExportBtn style={{ width: '24px', height: '24px' }} />
                            <ImportBtn style={{ width: '24px', height: '24px' }} />
                        </Box>
                    </Box>
                </Box>
            </Card>
            <Card className={`${cls.myAccounts}`}>
                <Box
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    <div className={'title'}> Счета </div>
                    <div>Дата следующего платежа</div>
                </Box>
                <div className={`${cls.dateEnd}`}>20.12.2024</div>
            </Card>
        </Card>
    );
};
