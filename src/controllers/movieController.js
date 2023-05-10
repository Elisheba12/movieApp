import { movieModel } from '../model/movieStructure.js';
import { movieDataValidator } from '../validator/validator.js';

export const getAllMovies = async (req, res) => {
  try {
    const getMovies = await movieModel.find();

    res.status(200).json({
      status: "successful",
      message: "All movie genres",
      data: getMovies
    });

  } catch (error) {
    res.status(400).json({
      status: 'failed',
      message: error,
    });
  }

};

export const getMovie = async (req, res) => {
  try {
    const oneMovie = await movieModel.findOne(req.query);

    res.status(200).json({
      status: "success",
      message: "movie found",
      data: oneMovie
    });

  } catch (error) {
    res.status(400).json({
      status: 'failed',
      message: error,
    });
  }
};

export const createMovie = async (req, res) => {
  try {
    const { error, value } = movieDataValidator(req.body); // from joi
    if (error) return res.send(error.details[0].message);

    const { title, genre } = req.body;
    const newMovie = await movieModel.create({ title, genre });

    res.status(201).json({
      status: "successful",
      message: "movie created",
      data: newMovie
    });

  } catch (error) {
    res.status(400).json({
      status: 'failed',
      message: error,
    });
  }
};

export const updateOneMovie = async (req, res) => {
  try {
    // console.log(req.query);
    // console.log(req.body);
    const updateOneMovie = await movieModel.findOneAndUpdate(req.query, req.body, {
      new: true,
      runValidators: true
    });

    res.status(201).json({
      status: "successful",
      message: "movie updated",
      data: updateOneMovie
    });

  } catch (error) {
    res.status(400).json({
      status: 'failed',
      message: error,
    });
  }
};

export const deleteMovie = async (req, res) => {
  try {
    await movieModel.findOneAndDelete(req.query);

    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (error) {
    res.status(400).json({
      status: 'failed',
      message: error,
    });
  }
};