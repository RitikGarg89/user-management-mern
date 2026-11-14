# Product Requirements Document (PRD)
## Project: User Management System

### 1. Project Overview
The User Management System is a simple full-stack web application built using the MERN stack (MongoDB, Express.js, React.js, and Node.js).

The application will provide a dashboard where users can view user statistics and manage user records through basic CRUD operations.

### 2. Project Objectives
- Build a responsive user management dashboard.
- Display total, active, and non-active user counts.
- Allow users to add, view, update, and delete user records.
- Store and manage user information using MongoDB.

### 3. Core Features

**Dashboard**
- Display Total Users.
- Display Active Users.
- Display Non-Active Users.
- Show all user records in a list or table.

**User Management**
- Add a new user.
- View all users.
- Update existing user details.
- Delete an individual user.
- Delete all users.
- Change a user's active status.

### 4. User Data Structure

Each user record will contain:

| Field | Data Type | Description |
|---|---|---|
| _id | ObjectId | Unique user ID |
| username | String | User's name |
| email | String | User's email |
| isActive | Boolean | Active status |
| createdAt | Date | Date the user was added |
| updatedAt | Date | Last update date |

**Default status:** New users will be active (`isActive: true`).

### 5. Backend API Planning

Base URL: `/api/users`

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/` | Get all users |
| POST | `/` | Add a new user |
| PUT | `/:id` | Update user details or status |
| DELETE | `/:id` | Delete one user |
| DELETE | `/` | Delete all users |

### 6. Dashboard Statistics

The dashboard will calculate:

- **Total Users:** Total number of user records.
- **Active Users:** Users whose `isActive` value is `true`.
- **Non-Active Users:** Users whose `isActive` value is `false`.

These statistics will be calculated from the stored user records.

### 7. Technology Stack

- **Frontend:** React.js, Vite
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **ODM:** Mongoose
- **API Testing:** Postman or Thunder Client
- **Version Control:** Git and GitHub

### 8. Project Scope

The initial version will focus only on user management and dashboard statistics.

Authentication, login, signup, roles, and advanced analytics are not included in this version.

### 9. Expected Outcome

A functional, responsive MERN application that allows users to manage records and view updated dashboard statistics through a clean and simple interface.