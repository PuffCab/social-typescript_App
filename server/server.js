import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import * as dotenv from "dotenv";
// // loading .env file
dotenv.config();

///////////
//Importing the routes
///////////

import tripRoutes from "./routes/tripRoute.js";
import postRoutes from "./routes/postRoute.js";

//////////////

const app = express(); //we instanciate express library through a constant , so we create an express aplication
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(cors());

//connect to mongodb / .env file

mongoose
  .connect(process.env.DB)
  .then(() =>
    console.log("Mongo DB connected ...server running on port: " + port)
  )
  .catch((err) => console.log(err));

const port = process.env.PORT || 5050;

app.listen(port, () => console.log(`Server started on port ${port}`));

///////////
// Using routes for a specific api
///////////

app.use("/api/trips", tripRoutes);
app.use("/api/posts", postRoutes);
