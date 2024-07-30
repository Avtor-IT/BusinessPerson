import React from 'react';
import { Card } from 'shared/ui/Card';
import { MyCompany } from 'features/MyCompany/ui/MyCompany';
import { MyAccounts } from 'features/MyAccounts/ui/MyAccounts';
import cls from './myCompanyAccounts.module.scss';

export const MyCompanyAccounts = ({ className, children, ...props }) => {
    return (
        <Card className={`${cls.myCompanyAccounts}`}>
            <Card className={`${cls.myCompany}`}>
                <MyCompany />
            </Card>
            <Card className={`${cls.myAccounts}`}>
                <MyAccounts />
            </Card>
        </Card>
    );
};
