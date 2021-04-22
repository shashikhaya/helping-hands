const baseUrl = "http://127.0.0.1:8000/api/v1";

const login = (username, password) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };

    return fetch(`${baseUrl}/users/login`, requestOptions)
        .then(handleResponse)
        .then(res => {
            if (res) {
                // store auth token in local storage to keep
                // user logged in between page refreshes
                const token = res["accessToken"];
                localStorage.setItem('token', JSON.stringify(token));
                
                // store user account details (quick fix)
                // TODO: store user details properly in state?
                const accDetails=res['account'];
                localStorage.setItem('account',JSON.stringify(accDetails));


            }

            return res;
        });
}

const logout = () => {
    // remove token from local storage to log user out
    localStorage.removeItem('token');
    localStorage.removeItem('account')
}

const handleResponse = (response) => {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                window.location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}


const register = (body) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    };

    return fetch(`${baseUrl}/users/register`, requestOptions)
        .then(handleResponse)
};

export const userService = {
    login,
    logout,
    register
};

