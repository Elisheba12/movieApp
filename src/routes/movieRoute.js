import express from 'express';
import { getAllMovies, createMovie, getMovie, updateOneMovie, deleteMovie } from '../controllers/movieController.js';
import { userAuth } from '../middlewares/authMiddleware.js';

const router = express.Router();

// get all movies
router.get("/movies", userAuth, getAllMovies);
router.get("/movie", userAuth, getMovie)
router.post("/create-movie", userAuth, createMovie);
router.patch("/update-movie", userAuth, updateOneMovie)
router.delete("/delete-movie", userAuth, deleteMovie)

export { router as movieRouter };