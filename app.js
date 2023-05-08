import express from 'express';
import * as dotenv from 'dotenv';
import mongoose from 'mongoose';
import { movieRouter } from './src/routes/movieRoute.js';

dotenv.config();

const app = express();
const port = Number(process.env.PORT) || 8000

app.use(express.json());
app.use("/api/v1", movieRouter);

// Connection to mongoDB via mongoose
mongoose.connect(process.env.DATABASE).then(console.log("Database connection successful")).catch((err) => {
  console.log(err.message)
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});