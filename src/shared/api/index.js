import axios from 'axios';

class Api {
    Get = (url) => {
        return axios
            .get(url, {
                headers: {
                    Authorization: sessionStorage.getItem('access'),
                },
            })
            .then((response) => {
                console.log('response', response);
                if (response.status === 403) {
                    sessionStorage.removeItem('access');
                    sessionStorage.removeItem('refresh');
                    // window.location.href = '/login';
                } else {
                    return Promise.resolve(response.data);
                }
            })
            .catch((error) => {
                console.log('error', error);

                console.error('Error:', error);
                sessionStorage.removeItem('access');
                sessionStorage.removeItem('refresh');
                // window.location.href = '/login';
            });
    };

    Post = (url, params) => {
        return axios
            .post(url, params, {
                headers: {
                    Authorization: sessionStorage.getItem('access'),
                },
            })
            .then((response) => {
                if (response.status === 403) {
                    sessionStorage.removeItem('access');
                    sessionStorage.removeItem('refresh');
                    // window.location.href = '/login';
                } else {
                    return Promise.resolve(response.data);
                }
            })
            .catch((error) => {
                console.error('Error:', error);
                sessionStorage.removeItem('access');
                sessionStorage.removeItem('refresh');
                // window.location.href = '/login';
                return Promise.reject(error);
            });
    };
}

export default Api;
