// import { date } from 'joi';
import mongoose from 'mongoose';

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  genre: {
    type: String,
    required: true,
  }
},
  {
    timestamps: true
  });

export const movieModel = mongoose.model("Movie", movieSchema);