import express from "express";
import {
  createPost,
  deletePost,
  findPost,
  getAllPost,
  updatePost,
} from "../controller/post.js";
const router = express.Router();
router.route("/").get(getAllPost).post(createPost);
router.route("/:id").get(findPost).put(updatePost).delete(deletePost);

export default router;
