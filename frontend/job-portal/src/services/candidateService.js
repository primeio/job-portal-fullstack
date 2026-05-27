import axios from "axios";

const API = "http://localhost:8080";

// DYNAMIC TOKEN

const getConfig = () => {

    return {

        headers: {

            Authorization:
                `Bearer ${localStorage.getItem("token")}`
        }
    };
};

// GET PROFILE

export const getProfile = async(userId) => {

    return axios.get(

        `${API}/profile/${userId}`,

        getConfig()
    );
};

// GET APPLICATIONS

export const getApplications = async(userId) => {

    return axios.get(

        `${API}/application/all/${userId}`,

        getConfig()
    );
};

export const getAllPost = async()=>{
    return axios.get(
        `${API}/candidate/all/post`,
        getConfig()
    );
};