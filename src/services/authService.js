import axios from 'axios';
const apiUrl = process.env.REACT_APP_API_URL;
const tokenString = "jwtpreshift"

// Logging in (POST)
export const loginUserToApi = async (user) => {
    console.log(user)
    const response = await axios.post(`${apiUrl}/auth/login`, user);

    try {
        console.log(response.data);
        if (response.data) {
            const { _id, role, name} = response.data;
            localStorage.setItem(tokenString, JSON.stringify({id: _id, role, name}));
        }
    }   catch (error) {
        console.log(error);
    }
    return response;
}

// Signing up (POST)
export const signUpUser = async (user) => {
    const response = await axios.post(`${apiUrl}/auth/signup`, user);
    return response;
}

// Authenticated
export const isAuthenticated = () => {
    if (typeof window == 'undefined') {
        return false;
    }
    if (localStorage.getItem(tokenString)) {
        return JSON.parse(localStorage.getItem(tokenString));
    }
    return false;
}

// Logout
export const logOut = () => {
    localStorage.removeItem(tokenString);
    window.location.reload();
}