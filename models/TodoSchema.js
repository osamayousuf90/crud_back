import mongoose from "mongoose";


const TodoItemsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    done: {
        type: Boolean,
        default: false,
    },
    createdAt : {
        type : Date,
        default : Date.now,
    },
    updatedAt : {
        type : Date,
        default : Date.now,
    },
    userId : {
        type : String,
    }
}
)



const TodoSchema = mongoose.model("todo", TodoItemsSchema)

export default TodoSchema;