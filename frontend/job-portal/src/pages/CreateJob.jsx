import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { createPost }
from "../services/recruiterService";

export default function CreateJob(){

    const navigate = useNavigate();

    const userId =
        localStorage.getItem("userId");

    const [formData, setFormData] = useState({

        title: "",

        companyName: "",

        description: "",

        experience: "",

        jobType: "",

        location: "",

        salary: "",

    });

    const handleChange = (e) => {

        setFormData({

            ...formData,

            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async(e) => {

        e.preventDefault();

        try {

            await createPost(
                userId,
                formData
            );

            alert("Job Created Successfully");

            navigate("/recruiter/dashboard");

        }

        catch(error){

            console.log(error);
        
            console.log(error.response);
        
            console.log(error.response.data);
        
            alert(error.response.data.message);
        }
    };

    return(

        <div className="container py-5">

            <div className="row justify-content-center">

                <div className="col-md-8">

                    <div className="card shadow border-0 rounded-4 p-4">

                        <h2 className="fw-bold mb-4">

                            Create Job

                        </h2>

                        <form onSubmit={handleSubmit}>

                            <div className="row">

                                <div className="col-md-6 mb-3">

                                    <label>
                                        Job Title
                                    </label>

                                    <input
                                        type="text"
                                        name="title"
                                        className="form-control"
                                        onChange={handleChange}
                                    />

                                </div>

                                <div className="col-md-6 mb-3">

                                    <label>
                                        Company Name
                                    </label>

                                    <input
                                        type="text"
                                        name="companyName"
                                        className="form-control"
                                        onChange={handleChange}
                                    />

                                </div>

                            </div>

                            <div className="mb-3">

                                <label>
                                    Description
                                </label>

                                <textarea
                                    rows="5"
                                    name="description"
                                    className="form-control"
                                    onChange={handleChange}
                                />

                            </div>

                            <div className="row">

                                <div className="col-md-4 mb-3">

                                    <label>
                                        Experience
                                    </label>

                                    <input
                                        type="text"
                                        name="experience"
                                        className="form-control"
                                        onChange={handleChange}
                                    />

                                </div>

                                <div className="col-md-4 mb-3">

                                    <label>
                                        Job Type
                                    </label>

                                    <select
                                        name="jobType"
                                        className="form-select"
                                        onChange={handleChange}
                                    >

                                        <option value="">
                                            Select
                                        </option>

                                        <option value="FULL_TYPE">
                         FULL_TYPE
                              </option>

<option value="PART_TYPE">
    PART_TYPE
</option>

<option value="INTERNSHIP">
    INTERNSHIP
</option>

<option value="REMOTE">
    REMOTE
</option>

                                    </select>

                                </div>

                                <div className="col-md-4 mb-3">

                                    <label>
                                        Salary
                                    </label>

                                    <input
                                        type="number"
                                        name="salary"
                                        className="form-control"
                                        onChange={handleChange}
                                    />

                                </div>

                            </div>

                            <div className="mb-4">

                                <label>
                                    Location
                                </label>

                                <input
                                    type="text"
                                    name="location"
                                    className="form-control"
                                    onChange={handleChange}
                                />

                            </div>

                            <button className="btn btn-primary w-100">

                                Create Job

                            </button>

                        </form>

                    </div>

                </div>

            </div>

        </div>
    );
}