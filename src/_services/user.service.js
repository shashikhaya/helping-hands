const baseUrl = "http://127.0.0.1:8000/api/v1";

const login = (username, password) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };

    return fetch(`${baseUrl}/users/login`, requestOptions)
        .then(handleResponse)
        .then(key => {
            if (key) {
                // store auth token in local storage to keep
                // user logged in between page refreshes
                const token = key["accessToken"];
                localStorage.setItem('token', JSON.stringify(token));

                // this is how you need to grab token
                // localStorage.getItem('token')
            }

            return key;
        });
}

const logout = () => {
    // remove token from local storage to log user out
    localStorage.removeItem('token');
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

export const userService = {
    login,
    logout
};
