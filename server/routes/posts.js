import express from "express";
import { getFeedPosts, getUserPosts, likePost } from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get("/", verifyToken, getFeedPosts); //just gets all posts and puts them on feed
router.get("/:userId/posts", verifyToken, getUserPosts);
/*UPDATE*/
router.patch("/:id/like", verifyToken, likePost); //liking unliking post

export default router;