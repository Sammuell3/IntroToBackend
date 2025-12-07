import { Router } from "express"
import { createPost, deletePost, getPosts, updatePost } from "../controllers/post.controller.js"

const router = Router()

//example: http://localhost:3000/api/posts/create-post
router.route('/create-post').post(createPost)
//example: http://localhost:3000/api/v1/posts/get-posts
router.route('/get-posts').get(getPosts)
//example: http://localhost:3000/api/v1/posts/update-post/8382929239
router.route('/update-post/:id').patch(updatePost)
//example: http://localhost:3000/api/v1/posts/delete-post/8382929239
router.route('/delete-post/:id').delete(deletePost)
export default router;