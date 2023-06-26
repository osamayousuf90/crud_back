import UserSchema from "../models/UserSchema.js"
import jwt from "jsonwebtoken"


export const signUpUser = async (req, res) => {
    try {
        const existedUser = await UserSchema.findOne({ email: req.body.email })
        if (existedUser) {
            return res.status(200).json({ message: "User already existed" })
        } else {
            const userCreated = await UserSchema.create({   
                email: req.body.email,
                name: req.body.name,
                password: req.body.password,
            })
            return res.status(200).json({ data: userCreated, message: "User Created Succesfully" })

        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
}

export const signInUser = async (req, res) => {
    try {
        const userExistByEmail = await UserSchema.findOne({ email: req.body.email })
        if (!userExistByEmail) {
            return res.status(200).json({ message: "User does not exist with this email" })
        } else {
            if (userExistByEmail?.password !== req.body.password) {
                return res.status(500).json({ message: "Wrong Password" })
            } else {
                const token = jwt.sign(
                    {
                        name: userExistByEmail.name,
                        email: userExistByEmail.email,
                        id: userExistByEmail._id,
                    },
                    "mominalishan123",
                    { expiresIn: "10d" }
                );
               return res.status(200).json({
                    data: userExistByEmail,
                    token: token,
                    message : "User Login Succesfully",
                });
            }

        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
}



