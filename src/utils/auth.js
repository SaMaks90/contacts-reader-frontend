const backendUrl = 'https://contacts-reader-backend-wbuu.onrender.com';

export const login = async (data) => {
    const { email, password } = data;
    return await fetch(backendUrl + '/api/auth/login', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'accept': '*/*'
        },
        body: JSON.stringify({
            email,
            password
        })
    })
        .then(res => res.json());
}

export const currentUser = async token => {

    return await fetch(backendUrl + '/api/auth/current', {
        method: 'GET',
        headers: {
            'accept': '*/*',
            'authorization': `Bearer ${token}`
        }
    })
        .then(res => res.json());
}

export const logout = async token => {
    return await fetch(backendUrl + '/api/auth/logout', {
        method: 'POST',
        headers: {
            'accept': '*/*',
            'content-type': 'application/json',
            'authorization': `Bearer ${token}`
        }
    })
        .then(res => res);
}