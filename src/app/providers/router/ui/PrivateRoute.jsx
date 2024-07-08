import React, {useEffect, useState} from 'react';
import {Navigate} from 'react-router-dom';
import Api from 'shared/api';
import {Layout} from 'app/layout/Layout';

const PrivateRoute = () => {
    const [auth, setAuth] = useState(null);

    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        // const api = new Api();
        // setLoading(true);
        // api.Get('https://server/checkToken')
        //     .then((data) => {
        //         console.log('Token validation successful');
        //         setAuth(true);
        //     })
        //     .catch((error) => {
        //         console.error('Token validation failed:', error);
        //         setAuth(false);
        //     })
        //     .finally(() => {
        //         setLoading(false);
        //     });
        setAuth(true)
    }, []);

    if (isLoading) return <div>Загрузка...</div>;

    if (auth === null) {
        return null;
    }

    return auth ? <Layout/> : <Navigate to="/login"/>;
};

export default PrivateRoute;
