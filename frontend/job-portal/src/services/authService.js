import axios from "axios";

const API = "http://localhost:8080/auth";

export const registerUser = async(data) => {

    return axios.post(
        `${API}/register`,
        data
    );
};

export const loginUser = async(data) => {

    return axios.post(
        `${API}/login`,
        data
    );
};