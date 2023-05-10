import express from 'express';
import { getAllUsers, createUserReg, getUser, userUpdate, deleteUser, createUserLogin } from '../controllers/userController.js';
import { userAuth } from '../middlewares/authMiddleware.js';

const router = express.Router();

// get all movies
router.get("/users", userAuth, getAllUsers);
router.get("/user", userAuth, getUser)
router.post("/create-user-register", createUserReg);
router.post("/create-user-login", createUserLogin);
router.patch("/update-user", userAuth, userUpdate)
router.delete("/delete-user", userAuth, deleteUser)

export { router as userRouter };