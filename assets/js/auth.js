export const Auth = {
    getUser: () => JSON.parse(localStorage.getItem('user')),
    logout: () => { localStorage.clear(); location.href = '/index.html'; }
};
