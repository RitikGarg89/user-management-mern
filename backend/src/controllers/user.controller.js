import { asyncHandler } from "../utils/AsyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";
import ApiError from "../utils/ApiError.js";
import { User } from "../models/user.model.js";

const getAllUsers = asyncHandler(async (req, res) => {
    const users = await User.find();
    return res
        .status(200)
        .json(new ApiResponse(200, users, "Users fetched successfully"));

});

const createUser = asyncHandler(async (req, res) => {
    const { username, fullName, email, isActive } = req.body;
    if (!username || !fullName || !email) {
        throw new ApiError(400, "All fields are required");
    };
    const user = await User.create({
        username,
        fullName,
        email,
        isActive
    });
    return res
        .status(201)
        .json(new ApiResponse(201, user, "User created successfully"));
})

const updateUser = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { username, fullName, email, isActive } = req.body
    if (!id) {
        throw new ApiError(400, "User ID is required");
    }
    const updatedUser = await User.findByIdAndUpdate(
        id,
        {
            username,
            fullName,
            email,
            isActive
        },
        {
            new: true,
            runValidators: true
        }
    );
    if (!updatedUser) {
        throw new ApiError(404, "User not found");
    }
    return res
        .status(200)
        .json(new ApiResponse(200, updatedUser, "User updated successfully"));
});

const deleteUserById = asyncHandler(async (req, res) => {
    const { id } = req.params
    if (!id) {
        throw new ApiError(400, "User ID is required")
    }
    const deletedUser = await User.findByIdAndDelete(id)
    if (!deletedUser) {
        throw new ApiError(404, "User not found")
    }
    return res
        .status(200)
        .json(new ApiResponse(200, deletedUser, "User deleted successfully"))

})

const deleteUsers = asyncHandler(async (req, res) => {
    const deletedUsers = await User.deleteMany({})
    return res
        .status(200)
        .json(new ApiResponse(200, deletedUsers, "Users deleted successfully"));
})

export { getAllUsers, createUser, updateUser, deleteUserById, deleteUsers };