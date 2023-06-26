import express from "express"
import { addTodo, deleteTodo, getAllTodo, updateTodo } from "../Controllers/todo.js";
import verifyToken from "../Controllers/verifyToken.js";

const route = express.Router();

route.post("/createTodo", verifyToken, addTodo)
route.post("/getAllTodo", verifyToken, getAllTodo)
route.post("/deleteTodo", verifyToken, deleteTodo)
route.post("/updateTodo", verifyToken, updateTodo)




export default route