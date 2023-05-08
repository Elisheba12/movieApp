import express from 'express';
import { getAllMovies, createMovie, getMovie, updateOneMovie, deleteMovie } from '../controllers/movieController.js';

const router = express.Router();

// get all movies
router.get("/movies", getAllMovies);
router.get("/movie", getMovie)
router.post("/create-movie", createMovie);
router.patch("/update", updateOneMovie)
router.delete("/delete", deleteMovie)

export { router as movieRouter };