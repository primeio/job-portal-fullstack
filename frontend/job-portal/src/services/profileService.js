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

// SAVE PROFILE

export const saveProfile = async(userId, data) => {

    return axios.post(

        `${API}/profile/${userId}`,

        data,

        getConfig()
    );
};

// GET PROFILE

export const getProfile = async(userId) => {

    return axios.get(

        `${API}/profile/${userId}`,

        getConfig()
    );
};

// UPLOAD RESUME

export const uploadResume = async(userId, file) => {

    const formData = new FormData();

    formData.append("file", file);

    return axios.post(

        `${API}/profile/resume/${userId}`,

        formData,

        {

            headers: {

                Authorization:
                    `Bearer ${localStorage.getItem("token")}`,

                "Content-Type":
                    "multipart/form-data"
            }
        }
    );
};