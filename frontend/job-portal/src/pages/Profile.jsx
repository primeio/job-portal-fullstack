import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import {

    saveProfile,

    uploadResume,

    getProfile

} from "../services/profileService";

export default function Profile(){

    const navigate = useNavigate();

    const userId =
        localStorage.getItem("userId");

    const role =
        localStorage.getItem("role");

    const [resume, setResume]
        = useState(null);

    const [formData, setFormData]
        = useState({

        fullName: "",

        skills: "",

        education: "",

        location: "",

        experience: "",

        phone: "",

        companyName: "",

        companyWebsite: "",

        designation: ""
    });

    // FETCH PROFILE

    useEffect(() => {

        fetchProfile();

    }, []);

    const fetchProfile = async() => {

        try {

            const response =

                await getProfile(userId);

            setFormData({

                fullName:
                    response.data.fullName || "",

                skills:
                    response.data.skills || "",

                education:
                    response.data.education || "",

                location:
                    response.data.location || "",

                experience:
                    response.data.experience || "",

                phone:
                    response.data.phone || "",

                companyName:
                    response.data.companyName || "",

                companyWebsite:
                    response.data.companyWebsite || "",

                designation:
                    response.data.designation || ""
            });

        }

        catch(error){

            console.log(error);
        }
    };

    // HANDLE INPUT

    const handleChange = (e) => {

        setFormData({

            ...formData,

            [e.target.name]: e.target.value
        });
    };

    // SUBMIT

    const handleSubmit = async(e) => {

        e.preventDefault();

        try {

            // SAVE PROFILE

            await saveProfile(
                userId,
                formData
            );

            // UPLOAD RESUME

            if(resume){

                await uploadResume(
                    userId,
                    resume
                );
            }

            alert("Profile Saved");

            // REDIRECT

            if(role === "RECRUITER"){

                navigate(
                    "/recruiter/dashboard"
                );

            }else{

                navigate(
                    "/candidate/dashboard"
                );
            }

        }

        catch(error){

            console.log(error);

            console.log(error.response);

            console.log(error.response.data);

            alert("Failed");
        }
    };

    return(

        <div className="container py-5">

            <div className="row justify-content-center">

                <div className="col-md-8">

                    <div className="card shadow border-0 rounded-4 p-4">

                        <h2 className="fw-bold mb-4">

                            Complete Profile

                        </h2>

                        <form onSubmit={handleSubmit}>

                            {/* COMMON */}

                            <div className="row">

                                <div className="col-md-6 mb-3">

                                    <label>

                                        Full Name

                                    </label>

                                    <input
                                        type="text"
                                        name="fullName"
                                        className="form-control"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                    />

                                </div>

                                <div className="col-md-6 mb-3">

                                    <label>

                                        Phone

                                    </label>

                                    <input
                                        type="text"
                                        name="phone"
                                        className="form-control"
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />

                                </div>

                            </div>

                            {/* CANDIDATE */}

                            {

                                role === "CANDIDATE"

                                &&

                                <>

                                    <div className="mb-3">

                                        <label>

                                            Skills

                                        </label>

                                        <input
                                            type="text"
                                            name="skills"
                                            className="form-control"
                                            value={formData.skills}
                                            onChange={handleChange}
                                        />

                                    </div>

                                    <div className="row">

                                        <div className="col-md-6 mb-3">

                                            <label>

                                                Education

                                            </label>

                                            <input
                                                type="text"
                                                name="education"
                                                className="form-control"
                                                value={formData.education}
                                                onChange={handleChange}
                                            />

                                        </div>

                                        <div className="col-md-6 mb-3">

                                            <label>

                                                Experience

                                            </label>

                                            <input
                                                type="text"
                                                name="experience"
                                                className="form-control"
                                                value={formData.experience}
                                                onChange={handleChange}
                                            />

                                        </div>

                                    </div>

                                    <div className="mb-3">

                                        <label>

                                            Location

                                        </label>

                                        <input
                                            type="text"
                                            name="location"
                                            className="form-control"
                                            value={formData.location}
                                            onChange={handleChange}
                                        />

                                    </div>

                                    {/* RESUME */}

                                    <div className="mb-4">

                                        <label>

                                            Upload Resume

                                        </label>

                                        <input
                                            type="file"
                                            className="form-control"
                                            onChange={(e)=>

                                                setResume(
                                                    e.target.files[0]
                                                )
                                            }
                                        />

                                    </div>

                                </>
                            }

                            {/* RECRUITER */}

                            {

                                role === "RECRUITER"

                                &&

                                <>

                                    <div className="mb-3">

                                        <label>

                                            Company Name

                                        </label>

                                        <input
                                            type="text"
                                            name="companyName"
                                            className="form-control"
                                            value={formData.companyName}
                                            onChange={handleChange}
                                        />

                                    </div>

                                    <div className="mb-3">

                                        <label>

                                            Company Website

                                        </label>

                                        <input
                                            type="text"
                                            name="companyWebsite"
                                            className="form-control"
                                            value={formData.companyWebsite}
                                            onChange={handleChange}
                                        />

                                    </div>

                                    <div className="mb-4">

                                        <label>

                                            Designation

                                        </label>

                                        <input
                                            type="text"
                                            name="designation"
                                            className="form-control"
                                            value={formData.designation}
                                            onChange={handleChange}
                                        />

                                    </div>

                                </>
                            }

                            {/* BUTTON */}

                            <button className="btn btn-primary w-100">

                                Save Profile

                            </button>

                        </form>

                    </div>

                </div>

            </div>

        </div>
    );
}