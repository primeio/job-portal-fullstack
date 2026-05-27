import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {

    getApplications,

    getProfile

} from "../services/candidateService";



export default function CandidateDashboard(){

    const [profile, setProfile] = useState({});

    const [applications, setApplications] = useState([]);

   

    const userId =
        localStorage.getItem("userId");

    useEffect(() => {

        fetchData();

    }, []);

    const fetchData = async() => {

        try {

            const profileResponse =
                await getProfile(userId);

            setProfile(profileResponse.data);

            const applicationResponse =
                await getApplications(userId);

            setApplications(
                applicationResponse.data
            );

           
        }

        catch(error){

            console.log(error);
        }
    };

    return(

        <div className="container py-5">

            {/* HEADER */}

            <div className="bg-primary text-light rounded-4 p-4 mb-5">

                <h2>

                    Welcome Candidate 👋

                </h2>

                <p>

                    Manage profile and applications

                </p>

            </div>

            {/* STATS */}

            <div className="row g-4 mb-5">

                <div className="col-md-4">

                    <div className="card p-4 shadow border-0 rounded-4">

                        <h5>Total Applications</h5>

                        <h2>

                            {applications.length}

                        </h2>

                    </div>

                </div>

                <div className="col-md-4">

                    <div className="card p-4 shadow border-0 rounded-4">

                        <h5>Skills</h5>

                        <h2>

                            {profile.skills}

                        </h2>

                    </div>

                </div>

                <div className="col-md-4">

                    <div className="card p-4 shadow border-0 rounded-4">

                        <h5>Experience</h5>

                        <h2>

                            {profile.experience}

                        </h2>

                    </div>

                </div>

            </div>

            {/* PROFILE */}

            <div className="card shadow border-0 rounded-4 p-4 mb-5">

            <div className="d-flex justify-content-between align-items-center mb-4">

<h4>

    Profile Details

</h4>

<Link
    to="/profile"
    className="btn btn-primary"
>

    Edit Profile

</Link>

</div>

                <div className="row">

                    <div className="col-md-6">

                        <p>

                            <strong>Email :</strong>

                            {profile.email}

                        </p>

                    </div>

                    <div className="col-md-6">

                        <p>

                            <strong>Education :</strong>

                            {profile.education}

                        </p>

                    </div>

                </div>

            </div>

            {/* APPLICATION TABLE */}

            <div className="card shadow border-0 rounded-4 p-4">

                <h4 className="mb-4">

                    Applications

                </h4>

                <div className="table-responsive">

                    <table className="table">

                        <thead>

                            <tr>

                                <th>Job</th>

                                <th>Status</th>

                            </tr>

                        </thead>

                        <tbody>

                            {

                                applications.map((app) => (

                                    <tr key={app.id}>

                                        <td>

                                            {app.title}

                                        </td>

                                        <td>

                                            {app.status}

                                        </td>

                                    </tr>
                                ))
                            }

                        </tbody>

                    </table>

                </div>

            </div>

        </div>
    );
}