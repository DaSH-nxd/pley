import axios from "axios";

const signup = (username, email, password) => {
    return axios
        .post("http://localhost:3002/user/signup", {
            username,
            email,
            password
        })
        //Might not need the access token until login, commenting for now.
        .then((res) => {
            if (res.data.token) {
                localStorage.setItem("user", JSON.stringify(res.data));
            }
            return res.data;
        });
        
}

const login = (username, password) => {
    return axios
        .post("http://localhost:3002/user/login", {
            username,
            password
        })
        .then((res) => {
            if (res.data.token) {
                localStorage.setItem("user", JSON.stringify(res.data));
                //localStorage.setItem("id", JSON.stringify(res.data));
            }
            return res.data;
        })
}

const logout = () => {
    localStorage.removeItem("user");
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
    //return JSON.parse(localStorage.getItem("id"));
}

const AuthService = {
    signup,
    login,
    logout,
    getCurrentUser
};

export default AuthService;