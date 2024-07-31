import React, { useEffect, useState } from 'react';
import { Box, Grid, Stack } from '@mui/material';
import { Card } from 'shared/ui/Card';
import { Button } from 'shared/ui/Button';
import SortIcon from 'shared/assets/SortIcon';

import { taxes } from 'shared/model';

import cls from './TaxesTable.module.scss';

const TaxesTable = () => {
    const [sortBy, setSortBy] = useState('total');
    const [taxesList, setTaxesList] = useState(taxes);

    useEffect(() => {
        const beforeSort = [...taxesList];
        if (sortBy === 'total') {
            setTaxesList(
                beforeSort.sort((a, b) => (a.total > b.total ? -1 : 1))
            );
        }
        if (sortBy === 'date') {
            setTaxesList(
                beforeSort.sort((a, b) => {
                    return new Date(b.date) > new Date(a.date) ? 1 : -1;
                })
            );
        }
    }, [sortBy]);
    return (
        <Card
            variant="ServiceCard"
            style={{ paddingBottom: 0 }}
            serviceTitle="Мои текущие налоги"
        >
            <Box className={cls.BookerServiceContent}>
                <Grid
                    className={cls.TableHeader}
                    container
                    columns={3}
                >
                    <Grid
                        item
                        xs={1}
                    >
                        Налог
                    </Grid>
                    <Grid
                        item
                        xs={1}
                    >
                        <Stack
                            direction="row"
                            alignItems="center"
                            gap={'8px'}
                        >
                            Дата упллаты{' '}
                            <Button
                                variant={'unStyled'}
                                style={{ height: '24px' }}
                                onClick={() => setSortBy('date')}
                            >
                                <SortIcon
                                    variant={sortBy === 'date' ? 'active' : ''}
                                />
                            </Button>
                        </Stack>
                    </Grid>
                    <Grid
                        item
                        xs={1}
                    >
                        <Stack
                            direction="row"
                            alignItems="center"
                            justifyContent="end"
                            gap={'8px'}
                        >
                            Сумма{' '}
                            <Button
                                variant={'unStyled'}
                                style={{ height: '24px' }}
                                onClick={() => setSortBy('total')}
                            >
                                <SortIcon
                                    variant={sortBy === 'total' ? 'active' : ''}
                                />
                            </Button>
                        </Stack>
                    </Grid>
                </Grid>

                <Stack className={cls.TableScrollableBody}>
                    {taxesList.map((tax, i) => (
                        <React.Fragment key={tax.name}>
                            <Grid
                                className={cls.TableRow}
                                container
                                columns={3}
                            >
                                <Grid
                                    item
                                    xs={1}
                                >
                                    {tax.name}
                                </Grid>
                                <Grid
                                    item
                                    xs={1}
                                >
                                    {tax.date}
                                </Grid>
                                <Grid
                                    item
                                    xs={1}
                                >
                                    {Intl.NumberFormat('ru').format(tax.total)}
                                </Grid>
                            </Grid>
                            {i !== taxes.length - 1 && <hr />}
                        </React.Fragment>
                    ))}
                </Stack>
            </Box>
        </Card>
    );
};

export default TaxesTable;
