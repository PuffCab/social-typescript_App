import mongoose from "mongoose";


const postSchema = new mongoose.Schema ({
   
    userId: {
       type: String,
       required: true
   },
   description: {
       type: String,
       max:600
   },
   img: {
       type: String
   },
   likes: {
       type: Array,
       default: []
   }
},
    { timestamps: true }
);



const Post = mongoose.model('Post', postSchema);
export default Post