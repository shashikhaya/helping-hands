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
                // window.location.reload(true);
                console.log(response)
                return
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}

const getTask = (id) => {
    const requestOptions = {
        method: 'GET',
        headers: authHeader(),
    };

    return fetch(`${baseUrl}/tasks/${id}`, requestOptions)
        .then(handleResponse)
        .then(task => {
            return task;
        });
}

const postTask = (task) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...authHeader() },
        body: JSON.stringify({ ...task })
    };

    return fetch(`${baseUrl}/tasks`, requestOptions)
        .then(handleResponse)
};

const updateTaskStatus = (newStatus,id) => {
    const requestOptions = {
        method: 'PUT',
        headers:  { 'Content-Type': 'application/json', ...authHeader() },
        body:JSON.stringify({"status": newStatus})
    };
    return fetch(`${baseUrl}/tasks/${id}`, requestOptions)
        .then(handleResponse)
};

export const tasksService = {
    getTasks,
    getTask,
    postTask,
    updateTaskStatus
};
