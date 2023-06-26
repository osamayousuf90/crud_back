import express from "express"
import { signUpUser , signInUser } from "../Controllers/users.js"

const router = express.Router();


router.post("/signup", signUpUser)
router.post("/signIn", signInUser)



export default router
