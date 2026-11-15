import { Router } from "express";
import {
    deleteUsers,
    deleteUserById,
    getAllUsers,
    updateUser,
    createUser
} from "../controllers/user.controller.js";

const router = Router();

router.route("/")
    .get(getAllUsers)
    .post(createUser)
    .delete(deleteUsers);

router.route("/:id")
    .patch(updateUser)
    .delete(deleteUserById);

export default router;