
import axiosInstance from "../Utils/axiosInstance.js";

// 1. Fetch all users
export const getUsersApi = () => {
    return axiosInstance.get("/users");
};

// 2. Create a user
export const createUserApi = (userData) => {
    return axiosInstance.post("/users", userData);
};

// 3. Update a user
export const updateUserApi = (id, userData) => {
    return axiosInstance.patch(`/users/${id}`, userData);
};

// 4. Delete an individual user
export const deleteUserApi = (id) => {
    return axiosInstance.delete(`/users/${id}`);
};

// 5. Delete all users
export const deleteAllUsersApi = () => {
    return axiosInstance.delete("/users");
};
