import { Link } from "react-router-dom";

export default function Footer() {

    return (

        <footer className="bg-dark text-light mt-5 pt-5 pb-3">

            <div className="container">

                <div className="row">

                    {/* Brand Section */}

                    <div className="col-md-4 mb-4">

                        <h3 className="fw-bold">
                            JobPortal
                        </h3>

                        <p className="text-secondary">

                            Find your dream job and connect
                            with top recruiters across India.

                        </p>

                    </div>

                    {/* Quick Links */}

                    <div className="col-md-4 mb-4">

                        <h5 className="mb-3">
                            Quick Links
                        </h5>

                        <ul className="list-unstyled">

                            <li className="mb-2">

                                <Link
                                    to="/"
                                    className="text-decoration-none text-secondary"
                                >
                                    Home
                                </Link>

                            </li>

                            <li className="mb-2">

                                <Link
                                    to="/jobs"
                                    className="text-decoration-none text-secondary"
                                >
                                    Browse Jobs
                                </Link>

                            </li>

                            <li className="mb-2">

                                <Link
                                    to="/login"
                                    className="text-decoration-none text-secondary"
                                >
                                    Login
                                </Link>

                            </li>

                            <li className="mb-2">

                                <Link
                                    to="/register"
                                    className="text-decoration-none text-secondary"
                                >
                                    Register
                                </Link>

                            </li>

                        </ul>

                    </div>

                    {/* Contact Section */}

                    <div className="col-md-4 mb-4">

                        <h5 className="mb-3">
                            Contact
                        </h5>

                        <p className="text-secondary mb-2">
                            Pune, Maharashtra
                        </p>

                        <p className="text-secondary mb-2">
                            support@jobportal.com
                        </p>

                        <p className="text-secondary">
                            +91 9876543210
                        </p>

                    </div>

                </div>

                {/* Bottom Line */}

                <hr className="border-secondary" />

                <div className="text-center text-secondary">

                    © 2026 JobPortal. All rights reserved.

                </div>

            </div>

        </footer>
    );
}