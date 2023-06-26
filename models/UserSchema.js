import mongoose from "mongoose";

const UserListSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
    isActive : {
        type : Boolean,
        default : true,
    }
})


const UserSchema = mongoose.model("users", UserListSchema)

export default UserSchema