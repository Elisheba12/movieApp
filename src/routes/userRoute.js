import express from 'express';
import { getAllUsers, createUserReg, getUser, userUpdate, deleteUser, createUserLogin } from '../controllers/userController.js';

const router = express.Router();

// get all movies
router.get("/users", getAllUsers);
router.get("/user", getUser)
router.post("/create-user-register", createUserReg);
router.post("/create-user-login", createUserLogin);
router.patch("/update-user", userUpdate)
router.delete("/delete-user", deleteUser)

export { router as userRouter };