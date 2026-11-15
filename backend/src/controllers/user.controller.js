import { asyncHandler } from "../utils/asyncHandler.js";
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
    const { username, fullName, email } = req.body;
    if (!username || !fullName || !email) {
        throw new ApiError(400, "All fields are required");
    };
    const user = await User.create({
        username,
        fullName,
        email
    });
    return res
        .status(201)
        .json(new ApiResponse(201, user, "User created successfully"));
})

// const updateUser = asyncHandler(async (req,res)=>{
//     const {id} = req.body;
//     if(!id){
//         throw new ApiResponse(404, "User Not Found")
//     }
//     const updated
// })

export { getAllUsers, createUser };