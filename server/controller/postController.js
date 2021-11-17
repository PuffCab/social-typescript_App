import postModel from "../models/postModel.js";

//* CREATE POST ////////////

const createPost = async (req, res) => {
  const newPost = new postModel(req.body);
  try {
    const createdPost = await newPost.save();
    res.status(200).json(createdPost);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

export { createPost };
