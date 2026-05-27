import { Link } from "react-router-dom";

export default function Home() {

    return (

        <div>

            {/* Hero Section */}

            <section className="bg-dark text-light py-5">

                <div className="container">

                    <div className="row align-items-center">

                        <div className="col-lg-6">

                            <h1 className="display-4 fw-bold mb-4">
                                Find Your Dream Job Today 🚀
                            </h1>

                            <p className="lead text-secondary mb-4">

                                Connect with recruiters and explore
                                thousands of opportunities in tech
                                and beyond.

                            </p>

                            <div className="d-flex gap-3">

                                <Link
                                    to="/jobs"
                                    className="btn btn-primary btn-lg"
                                >
                                    Browse Jobs
                                </Link>

                                <Link
                                    to="/register"
                                    className="btn btn-outline-light btn-lg"
                                >
                                    Get Started
                                </Link>

                            </div>

                        </div>

                        <div className="col-lg-6 text-center mt-5 mt-lg-0">

                            <img
                                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
                                alt="job portal"
                                className="img-fluid rounded-4 shadow"
                            />

                        </div>

                    </div>

                </div>

            </section>

            {/* Features Section */}

            <section className="py-5">

                <div className="container">

                    <div className="text-center mb-5">

                        <h2 className="fw-bold">
                            Why Choose JobPortal?
                        </h2>

                        <p className="text-muted">

                            Everything you need for hiring and job searching.

                        </p>

                    </div>

                    <div className="row g-4">

                        <div className="col-md-4">

                            <div className="card border-0 shadow-sm rounded-4 p-4 h-100 text-center">

                                <h4 className="fw-bold mb-3">
                                    Easy Job Search
                                </h4>

                                <p className="text-muted">

                                    Search jobs by skills,
                                    location, and experience.

                                </p>

                            </div>

                        </div>

                        <div className="col-md-4">

                            <div className="card border-0 shadow-sm rounded-4 p-4 h-100 text-center">

                                <h4 className="fw-bold mb-3">
                                    Recruit Top Talent
                                </h4>

                                <p className="text-muted">

                                    Recruiters can post jobs
                                    and manage applications easily.

                                </p>

                            </div>

                        </div>

                        <div className="col-md-4">

                            <div className="card border-0 shadow-sm rounded-4 p-4 h-100 text-center">

                                <h4 className="fw-bold mb-3">
                                    Secure Platform
                                </h4>

                                <p className="text-muted">

                                    JWT authentication and
                                    role-based access control.

                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

        </div>
    );
}