import { useEffect, useState } from "react";

import { getAllPost }

from "../services/candidateService";

import { applyJob }

from "../services/applicationService";

export default function Jobs(){

    const [posts, setPosts] = useState([]);

    const userId =
        localStorage.getItem("userId");

    useEffect(() => {

        fetchJobs();

    }, []);

    const fetchJobs = async() => {

        try {

            const response =
                await getAllPost();

            setPosts(response.data);

        }

        catch(error){

            console.log(error);
        }
    };

    // APPLY JOB

    const handleApply = async(postId) => {

        try {

            await applyJob(

                userId,

                postId,

                {

                    jobType: "FULL_TYPE"
                }
            );

            alert("Applied Successfully");

        }

        catch(error){

            console.log(error);

            alert("Failed To Apply");
        }
    };

    return(

        <div className="container py-5">

            <h2 className="fw-bold mb-5">

                Available Jobs

            </h2>

            <div className="row g-4">

                {

                    posts.map((post,index) => (

                        <div
                            className="col-md-6"
                            key={index}
                        >

                            <div className="card shadow border-0 rounded-4 h-100 p-4">

                                <div className="d-flex justify-content-between mb-3">

                                    <h4>

                                        {post.title}

                                    </h4>

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

                                <div className="mb-4">

                                    <strong>

                                        Salary :

                                    </strong>

                                    ₹ {post.salary}

                                </div>

                                <button

                                    className="btn btn-primary"

                                    onClick={()=>

                                        handleApply(post.id)
                                    }
                                >

                                    Apply Now

                                </button>

                            </div>

                        </div>
                    ))
                }

            </div>

        </div>
    );
}