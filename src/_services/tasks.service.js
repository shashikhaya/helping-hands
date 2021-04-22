import authHeader from '../_helpers/authHeader';

const baseUrl = "http://127.0.0.1:8000/api/v1";

const getTasks = () => {
    const requestOptions = {
        method: 'GET',
        headers: authHeader(),
    };

    return fetch(`${baseUrl}/tasks`, requestOptions)
        .then(handleResponse)
        .then(tasks => {
            return tasks;
        });
}

const handleResponse = (response) => {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                window.location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}

export const tasksService = {
    getTasks
};
