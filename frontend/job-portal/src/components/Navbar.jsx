import { Link, NavLink } from "react-router-dom";

export default function Navbar() {

    // GET ROLE

    const role =
        localStorage.getItem("role");

    // CHECK LOGIN

    const isLoggedIn =
        localStorage.getItem("token");

    // LOGOUT

    const logout = () => {

        localStorage.removeItem("token");

        localStorage.removeItem("role");

        localStorage.removeItem("userId");

        window.location.href = "/login";
    };

    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm py-3">

            <div className="container">

                {/* LOGO */}

                <Link
                    className="navbar-brand fw-bold fs-3"
                    to="/"
                >

                    JobPortal

                </Link>

                {/* MOBILE BUTTON */}

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarContent"
                >

                    <span className="navbar-toggler-icon"></span>

                </button>

                {/* NAVBAR CONTENT */}

                <div
                    className="collapse navbar-collapse"
                    id="navbarContent"
                >

                    {/* LEFT LINKS */}

                    <ul className="navbar-nav mx-auto gap-2">

                        {/* HOME */}

                        <li className="nav-item">

                            <NavLink
                                to="/"
                                className="nav-link"
                            >

                                Home

                            </NavLink>

                        </li>

                        {/* JOBS */}

                        <li className="nav-item">

                            <NavLink
                                to="/jobs"
                                className="nav-link"
                            >

                                Jobs

                            </NavLink>

                        </li>

                        {/* CANDIDATE LINKS */}

                        {

                            role === "CANDIDATE"

                            &&

                            <>

                                <li className="nav-item">

                                    <NavLink
                                        to="/candidate/dashboard"
                                        className="nav-link"
                                    >

                                        Dashboard

                                    </NavLink>

                                </li>

                                <li className="nav-item">

                                    <NavLink
                                        to="/candidate/applications"
                                        className="nav-link"
                                    >

                                        Applications

                                    </NavLink>

                                </li>

                            </>
                        }

                        {/* RECRUITER LINKS */}

                        {

                            role === "RECRUITER"

                            &&

                            <>

                                <li className="nav-item">

                                    <NavLink
                                        to="/recruiter/dashboard"
                                        className="nav-link"
                                    >

                                        Dashboard

                                    </NavLink>

                                </li>

                                <li className="nav-item">

                                    <NavLink
                                        to="/recruiter/post-job"
                                        className="nav-link"
                                    >

                                        Create Job

                                    </NavLink>

                                </li>

                            </>
                        }

                    </ul>

                    {/* RIGHT SIDE */}

                    <div className="d-flex gap-2 align-items-center">

                        {

                            !isLoggedIn

                            ?

                            <>

                                <Link
                                    to="/login"
                                    className="btn btn-outline-light"
                                >

                                    Login

                                </Link>

                                <Link
                                    to="/register"
                                    className="btn btn-primary"
                                >

                                    Register

                                </Link>

                            </>

                            :

                            <>

                                {/* PROFILE */}

                                <Link
                                    to="/profile"
                                    className="btn btn-outline-light"
                                >

                                    Profile

                                </Link>

                                {/* LOGOUT */}

                                <button
                                    onClick={logout}
                                    className="btn btn-danger"
                                >

                                    Logout

                                </button>

                            </>
                        }

                    </div>

                </div>

            </div>

        </nav>
    );
}