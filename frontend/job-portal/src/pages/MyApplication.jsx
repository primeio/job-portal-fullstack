import { useEffect, useState } from "react";

import {

    getApplications

} from "../services/candidateService";

export default function MyApplications(){

    const [applications, setApplications]
        = useState([]);

    const userId =
        localStorage.getItem("userId");

    useEffect(() => {

        fetchApplications();

    }, []);

    const fetchApplications = async() => {

        try {

            const response =
                await getApplications(userId);

            setApplications(response.data);

        }

        catch(error){

            console.log(error);
        }
    };

    return(

        <div className="container py-5">

            <h2 className="fw-bold mb-5">

                My Applications

            </h2>

            <div className="card shadow border-0 rounded-4 p-4">

                <div className="table-responsive">

                    <table className="table align-middle">

                        <thead>

                            <tr>

                                <th>Company</th>

                                <th>Role</th>

                                <th>Job Type</th>

                                <th>Status</th>

                                <th>Applied At</th>

                            </tr>

                        </thead>

                        <tbody>

{

    applications.map((app) => (

        <tr key={app.id}>

            <td>

                {app.companyName}

            </td>

            <td>

                {app.title}

            </td>

            <td>

                {app.jobType}

            </td>

            <td>

                <span

                    className={

                        `badge ${
                            app.status === "SELECTED"

                            ? "bg-success"

                            : app.status === "REJECTED"

                            ? "bg-danger"

                            : app.status === "INTERVIEW"

                            ? "bg-warning text-dark"

                            : "bg-primary"
                        }`
                    }
                >

                    {app.status}

                </span>

            </td>

            <td>

                {app.appliedAt}

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