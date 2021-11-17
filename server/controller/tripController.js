import tripModel from "../models/tripModel.js";

const getTrips = (req, res) => {
  tripModel
    .find()
    .then((files) => {
      res.send(files);
    })
    .catch((err) => console.log(err));
};

export { getTrips };
