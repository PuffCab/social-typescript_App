import express from "express";

//Import Controller functions
import * as postController from "../controller/postController.js";

// Create Instance of the express router
const router = express.Router();

//* CREATE POST ////////////

router.post("/", postController.createPost);

export default router;
