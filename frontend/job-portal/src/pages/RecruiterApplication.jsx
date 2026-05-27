import { useEffect, useState }

from "react";

import {

    getApplicationsByPost,

    updateApplicationStatus

} from "../services/applicationService";

import { useParams }

from "react-router-dom";

export default function RecruiterApplication(){

    const [applications, setApplications]

        = useState([]);

    const { postId } = useParams();

    useEffect(() => {

        fetchApplications();

    }, []);

    const fetchApplications = async() => {

        try {

            const response =

                await getApplicationsByPost(postId);

            setApplications(response.data);

        }

        catch(error){

            console.log(error);
        }
    };

    // UPDATE STATUS

    const handleStatusChange = async(

        applicationId,

        status

    ) => {

        try {

            await updateApplicationStatus(

                applicationId,

                status
            );

            alert("Status Updated");

            fetchApplications();

        }

        catch(error){

            console.log(error);
        }
    };

    return(

        <div className="container py-5">

            <h2 className="fw-bold mb-5">

                Job Applications

            </h2>

            <div className="card shadow border-0 rounded-4 p-4">

                <div className="table-responsive">

                    <table className="table align-middle">

                        <thead>

                            <tr>

                                <th>Candidate</th>

                                <th>Email</th>

                                <th>Status</th>

                                <th>Update</th>

                            </tr>

                        </thead>

                        <tbody>

                            {

                                applications.map((app)=>(

                                    <tr key={app.id}>

<td>

{app.candidateEmail}

</td>

<td>

{app.candidateEmail}

</td>

                                        <td>

                                            <span className="badge bg-primary">

                                                {app.status}

                                            </span>

                                        </td>

                                        <td>

                                            <select

                                                className="form-select"

                                                onChange={(e)=>

                                                    handleStatusChange(

                                                        app.id,

                                                        e.target.value
                                                    )
                                                }
                                            >

                                                <option>

                                                    Select

                                                </option>

                                                <option value="APPLIED">

                                                    APPLIED

                                                </option>

                                                <option value="SHORTLISTED">

                                                    SHORTLISTED

                                                </option>

                                                <option value="INTERVIEW">

                                                    INTERVIEW

                                                </option>

                                                <option value="REJECTED">

                                                    REJECTED

                                                </option>

                                                <option value="SELECTED">

                                                    SELECTED

                                                </option>

                                            </select>

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