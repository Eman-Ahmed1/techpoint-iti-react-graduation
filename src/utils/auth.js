// get user
export const getUser = () => {
    const user = JSON.parse(localStorage.getItem("user")) || null;
    return user;
}
// register user
export const register = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
}
// login user
export const login = (email, password) => {
    const user = getUser();

    if (!user) {
        return false;
    }

    if (user.email === email && user.password === password) {
        
        return true;
    }
    return false
}