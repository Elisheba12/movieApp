import express from 'express';
import { getAllUsers, createUser, getUser, userUpdate, deleteUser } from '../controllers/userController.js';

const router = express.Router();

// get all movies
router.get("/users", getAllUsers);
router.get("/user", getUser)
router.post("/create-user", createUser);
router.patch("/update-user", userUpdate)
router.delete("/delete-user", deleteUser)

export { router as userRouter };