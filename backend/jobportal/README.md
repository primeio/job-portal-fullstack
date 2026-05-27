# Job Portal Application

A full-stack Job Portal Application built using Spring Boot, Spring Security JWT Authentication, React JS, Bootstrap, and MySQL.

This project supports both Candidate and Recruiter workflows with authentication, profile management, job posting, job applications, and application status tracking.

---

# Tech Stack

## Backend
- Java
- Spring Boot
- Spring Security
- JWT Authentication
- Spring Data JPA
- Hibernate
- MySQL
- Lombok

## Frontend
- React JS
- React Router DOM
- Axios
- Bootstrap

---

# Features

# Authentication
- User Registration
- User Login
- JWT Token Authentication
- Role Based Access
- Protected APIs

---

# Roles

## Candidate
- Register/Login
- Create Profile
- Upload Resume
- Browse Jobs
- Apply Jobs
- Track Application Status
- View Dashboard

## Recruiter
- Register/Login
- Create Company Profile
- Post Jobs
- View Posted Jobs
- View Applicants
- Update Application Status
- Recruiter Dashboard

---

# JWT Authentication

This project uses JWT Authentication with Spring Security.

Features:
- Token generation on login
- Secure API access
- Authorization using Bearer Token
- Role-based routing

---

# Application Status Workflow

Recruiters can update application status:

- APPLIED
- SHORTLISTED
- INTERVIEW
- REJECTED
- SELECTED

Candidates can track updated status in dashboard.

---

# Backend APIs

# Auth APIs

## Register
POST `/auth/register`

## Login
POST `/auth/login`

---

# Profile APIs

## Save Profile
POST `/profile/{userId}`

## Upload Resume
POST `/profile/resume/{userId}`

## Get Profile
GET `/profile/{userId}`

---

# Recruiter APIs

## Create Job
POST `/recruiter/create/{userId}`

## Get Recruiter Jobs
GET `/recruiter/posts/{userId}`

## Get Single Job
GET `/recruiter/{id}`

---

# Candidate APIs

## Apply Job
POST `/candidate/apply/{userId}/{postId}`

---

# Application APIs

## Get User Applications
GET `/application/all/{userId}`

## Get Applications By Post
GET `/application/post/{postId}`

## Update Application Status
PUT `/application/status/{applicationId}`

---

# Frontend Pages

## Public Pages
- Home
- Login
- Register

## Candidate Pages
- Candidate Dashboard
- Jobs Page
- My Applications
- Profile Page

## Recruiter Pages
- Recruiter Dashboard
- Create Job
- View Applications
- Profile Page

---

# Project Structure

```txt
job-portal
│
├── backend
│   ├── controller
│   ├── service
│   ├── repository
│   ├── dto
│   ├── model
│   ├── config
│   └── exception
│
├── frontend
│   ├── components
│   ├── pages
│   ├── services
│   