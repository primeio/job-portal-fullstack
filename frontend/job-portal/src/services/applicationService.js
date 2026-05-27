import axios from "axios";

const API = "http://localhost:8080";

// TOKEN CONFIG

const getConfig = () => {

    return {

        headers: {

            Authorization:
                `Bearer ${localStorage.getItem("token")}`
        }
    };
};

// APPLY JOB

export const applyJob = async(

    userId,

    postId,

    data

) => {

    return axios.post(

        `${API}/candidate/apply/${userId}/${postId}`,

        data,

        getConfig()
    );
};

// GET MY APPLICATIONS

export const getApplications = async(userId) => {

    return axios.get(

        `${API}/application/all/${userId}`,

        getConfig()
    );
};

// GET APPLICATIONS BY POST

export const getApplicationsByPost = async(postId) => {

    return axios.get(

        `${API}/application/post/${postId}`,

        getConfig()
    );
};

// UPDATE STATUS

export const updateApplicationStatus = async(

    applicationId,

    status

) => {

    return axios.put(

        `${API}/application/status/${applicationId}`,

        {

            status
        },

        getConfig()
    );
};