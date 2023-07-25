
export const loginUser = data => {
    window.localStorage.setItem('user', JSON.stringify(data));
}

export const currentUser = () => {
    return JSON.parse(window.localStorage.getItem('user'));
}

export const logoutUser = () => {
    window.localStorage.removeItem('user');
}