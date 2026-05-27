import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import { registerUser } from "../services/authService";

export default function Register() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({

        email: "",

        password: "",

        role: "CANDIDATE"
    });

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

            const response =
                    await registerUser(formData);

            alert(response.data.message);

            navigate("/login");

        }

        catch(error){

            console.log(error);

            alert("Registration Failed");
        }
    };

    return (

        <div className="container py-5">

            <div className="row justify-content-center">

                <div className="col-md-5">

                    <div className="card shadow border-0 rounded-4 p-4">

                        <h2 className="text-center fw-bold mb-4">
                            Register
                        </h2>

                        <form onSubmit={handleSubmit}>

                            {/* EMAIL */}

                            <div className="mb-3">

                                <label className="form-label">
                                    Email
                                </label>

                                <input
                                    type="email"
                                    name="email"
                                    className="form-control"
                                    value={formData.email}
                                    onChange={handleChange}
                                />

                            </div>

                            {/* PASSWORD */}

                            <div className="mb-3">

                                <label className="form-label">
                                    Password
                                </label>

                                <input
                                    type="password"
                                    name="password"
                                    className="form-control"
                                    value={formData.password}
                                    onChange={handleChange}
                                />

                            </div>

                            {/* ROLE */}

                            <div className="mb-4">

                                <label className="form-label">
                                    Register As
                                </label>

                                <select
                                    name="role"
                                    className="form-select"
                                    value={formData.role}
                                    onChange={handleChange}
                                >

                                    <option value="CANDIDATE">
                                        Candidate
                                    </option>

                                    <option value="RECRUITER">
                                        Recruiter
                                    </option>

                                </select>

                            </div>

                            <button className="btn btn-primary w-100">

                                Register

                            </button>

                        </form>

                        <p className="text-center mt-4 mb-0">

                            Already have an account?

                            <Link
                                to="/login"
                                className="ms-2"
                            >
                                Login
                            </Link>

                        </p>

                    </div>

                </div>

            </div>

        </div>
    );
}