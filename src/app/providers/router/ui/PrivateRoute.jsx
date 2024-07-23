import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Layout } from 'app/layout/Layout';
import { useCheckStatus } from 'entities/User';

const PrivateRoute = () => {
    const [auth, setAuth] = useState(null);

    const statusQuery = useCheckStatus();

    useEffect(() => {
        if (statusQuery.data) {
            if (statusQuery.data.is_authenticated) {
                setAuth(true);
                return;
            }
            setAuth(false);
        }
        if (statusQuery.error) {
            setAuth(false);
        }
        // setAuth(true);
    }, [statusQuery]);

    if (statusQuery.isLoading) return <div>Загрузка...</div>;

    if (auth === null) {
        return null;
    }

    return auth ? <Layout /> : <Navigate to="/login" />;
};

export default PrivateRoute;
