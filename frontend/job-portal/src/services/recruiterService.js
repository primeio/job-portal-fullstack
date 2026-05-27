import axios from "axios";

const API = "http://localhost:8080";

// GET CONFIG DYNAMICALLY

const getConfig = () => {

    return {

        headers: {

            Authorization:
                `Bearer ${localStorage.getItem("token")}`
        }
    };
};

// GET POSTS

export const getRecruiterPosts = async(userId) => {

    return axios.get(

        `${API}/recruiter/posts/${userId}`,

        getConfig()
    );
};

// CREATE POST

export const createPost = async(userId, data) => {

    return axios.post(

        `${API}/recruiter/create/${userId}`,

        data,

        getConfig()
    );
};