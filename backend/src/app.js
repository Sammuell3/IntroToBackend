import express from "express"

const app = express()

app.use(express.json())

import userRouter from "../routes/user.router.js"
import postRouter from "../routes/post.route.js"

app.use("/api/v1/users", userRouter);
app.use("/api/v1/posts", postRouter);

//example router: http://localhost:4000/api/v1/users
//example router: http://localhost:4000/api/v1/posts
export default app