import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import {

    getRecruiterPosts

} from "../services/recruiterService";

export default function RecruiterDashboard(){

    const [posts, setPosts] = useState([]);

    const userId =
        localStorage.getItem("userId");

    useEffect(() => {

        fetchPosts();

    }, []);

    const fetchPosts = async() => {

        try {

            const response =
                await getRecruiterPosts(userId);

            setPosts(response.data);

        }

        catch(error){

            console.log(error);
        }
    };

    return(

        <div className="container py-5">

            {/* HEADER */}

            <div className="bg-dark text-light rounded-4 p-4 mb-5">

                <h2>

                    Recruiter Dashboard 🚀

                </h2>

                <p>

                    Manage job posts and applicants

                </p>

            </div>

            {/* STATS */}

            <div className="row g-4 mb-5">

                <div className="col-md-4">

                    <div className="card shadow border-0 rounded-4 p-4">

                        <h5>Total Posts</h5>

                        <h2>

                            {posts.length}

                        </h2>

                    </div>

                </div>

                <div className="col-md-4">

                    <div className="card shadow border-0 rounded-4 p-4">

                        <h5>Active Jobs</h5>

                        <h2>

                            {posts.length}

                        </h2>

                    </div>

                </div>

                <div className="col-md-4">

                    <div className="card shadow border-0 rounded-4 p-4">

                        <Link
                            to="/recruiter/post-job"
                            className="btn btn-primary"
                        >

                            Create Job

                        </Link>

                    </div>

                </div>

            </div>

            {/* POSTS */}

<div className="card shadow border-0 rounded-4 p-4">

<div className="d-flex justify-content-between align-items-center mb-4">

    <h4>

        Posted Jobs

    </h4>

    <Link
        to="/recruiter/post-job"
        className="btn btn-primary"
    >

        Create Job

    </Link>

</div>

<div className="row g-4">

    {

        posts.map((post,index) => (

            <div
                className="col-md-6"
                key={index}
            >

                <div className="card border-0 shadow-sm rounded-4 h-100 p-4">

                    <div className="d-flex justify-content-between mb-3">

                        <h5>

                            {post.title}

                        </h5>

                        <span className="badge bg-dark">

                            {post.jobType}

                        </span>

                    </div>

                    <h6 className="text-primary">

                        {post.companyName}

                    </h6>

                    <p className="text-muted">

                        {post.description}

                    </p>

                    <div className="mb-2">

                        <strong>

                            Experience :

                        </strong>

                        {post.experience}

                    </div>

                    <div className="mb-2">

                        <strong>

                            Location :

                        </strong>

                        {post.location}

                    </div>

                    <div className="mb-3">

                        <strong>

                            Salary :

                        </strong>

                        ₹ {post.salary}

                    </div>

                    <div className="d-flex gap-2">

                    <Link

to={`/recruiter/applications/${post.id}`}

className="btn btn-outline-primary"
>

View Applications

</Link>

                        <button className="btn btn-outline-danger">

                            Delete

                        </button>

                    </div>

                </div>

            </div>
        ))
    }

</div>

</div>

        </div>
    );
}