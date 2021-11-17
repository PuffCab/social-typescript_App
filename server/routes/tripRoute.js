import express from "express";
const router = express.Router();

import * as tripController from "../controller/tripController.js";

// import tripModel from "../models/tripModel.js";

router.get("/all", tripController.getTrips);

export default router;
