import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import { loginUser } from "../services/authService";

export default function Login() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({

        email: "",

        password: ""
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
                    await loginUser(formData);

            // STORE JWT

            localStorage.setItem(
                "token",
                response.data.token
            );

            localStorage.setItem(
                "role",
                response.data.role
            );

            localStorage.setItem(
                "userId",
                response.data.userId
            );

            alert(response.data.message);

            // REDIRECT BASED ON ROLE

            if(response.data.role === "RECRUITER"){

                window.location.href =
                    "/recruiter/dashboard";
            
            }else{
            
                window.location.href =
                    "/candidate/dashboard";
            }

        }

        catch(error){

            console.log(error);

            alert("Invalid Credentials");
        }
    };

    return (

        <div className="container py-5">

            <div className="row justify-content-center">

                <div className="col-md-5">

                    <div className="card shadow border-0 rounded-4 p-4">

                        <h2 className="text-center fw-bold mb-4">
                            Login
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

                            <div className="mb-4">

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

                            <button className="btn btn-dark w-100">

                                Login

                            </button>

                        </form>

                        <p className="text-center mt-4 mb-0">

                            Don't have an account?

                            <Link
                                to="/register"
                                className="ms-2"
                            >
                                Register
                            </Link>

                        </p>

                    </div>

                </div>

            </div>

        </div>
    );
}