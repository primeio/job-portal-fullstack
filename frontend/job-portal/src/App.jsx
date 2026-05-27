import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'

import Jobs from "./pages/Jobs";

import CreateJob from "./pages/CreateJob";

import MyApplications from "./pages/MyApplication";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

import CandidateDashboard from "./pages/CandidateDashboard";
import RecruiterDashboard from "./pages/RecruiterDashboard";
import ProfilePage from "./pages/Profile";
import RecruiterApplication from "./pages/RecruiterApplication";

function App() {

    return (

        <BrowserRouter>

            <Navbar />

            <Routes>

                {/* Public Routes */}

                <Route
                    path="/"
                    element={<Home />}
                />

                <Route
                    path="/login"
                    element={<Login />}
                />

                <Route
                    path="/register"
                    element={<Register />}
                />

                {/* Candidate Routes */}

                <Route
                    path="/candidate/dashboard"
                    element={<CandidateDashboard />}
                />

                {/* Recruiter Routes */}

                <Route
                    path="/recruiter/dashboard"
                    element={<RecruiterDashboard />}
                />
                <Route
   path="/jobs"
   element={<Jobs />}
/>

<Route
   path="/candidate/applications"
   element={<MyApplications />}
/>

<Route
   path="/recruiter/post-job"
   element={<CreateJob />}
/>
<Route
   path="/profile"
   element={<ProfilePage />}
/>

<Route
   path="/recruiter/applications/:postId"
   element={<RecruiterApplication/>}
/>

            </Routes>

            <Footer />

        </BrowserRouter>
    );
}

export default App;