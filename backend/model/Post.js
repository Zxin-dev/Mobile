import mongoose from "mongoose";
const postSchema = new mongoose.Schema(
  {
    username: {
      type: String,
    },
    ago: {
      type: String,
    },
    post: {
      type: String,
    },
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

const Post = mongoose.model("Post", postSchema);
export default Post;
