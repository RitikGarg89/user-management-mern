
import axiosInstance from "../utils/axiosInstance.js";

// 1. Fetch all users
export const getUsersApi = () => {
    return axiosInstance.get("/");
};

// 2. Create a user
export const createUserApi = (userData) => {
    return axiosInstance.post("/", userData);
};

// 3. Update a user
export const updateUserApi = (id, userData) => {
    return axiosInstance.patch(`/${id}`, userData);
};

// 4. Delete an individual user
export const deleteUserApi = (id) => {
    return axiosInstance.delete(`/${id}`);
};

// 5. Delete all users
export const deleteAllUsersApi = () => {
    return axiosInstance.delete("/");
};
