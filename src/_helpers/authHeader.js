const authHeader = () => {
    // return authorization header with token
    const token = JSON.parse(localStorage.getItem('token'));

    if (token) {
        return { 'Authorization': `Bearer: ${token}` };
    }

    return {};
}

export default authHeader;
