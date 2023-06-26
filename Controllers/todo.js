import TodoSchema from "../models/TodoSchema.js"


export const getAllTodo = async (req, res) => {
    try {
        const getTodo = await TodoSchema.find({ userId : req.body.userId }).sort({ createdAt: -1 })
        return res.status(200).json({ data: getTodo, message: "Todos Get Succesfully" })
    } catch (error) {
        return res.status(500).json({ data: {}, message: error.message })
    }
}

export const addTodo = async (req, res) => {
    try {
        const addTodo = await TodoSchema.create({
            title: req.body.title,
            done: req.body.done,
            createdAt: Date.now(),
            userId : req?.user?.id
        })

        return res.status(200).json({ data: addTodo, message: "Todo Added Succesfully" })
    } catch (error) {
        return res.status(500).json({ data: {}, message: error.message })
    }
}

export const updateTodo = async (req, res) => {
    try {
        await TodoSchema.updateOne({ _id: req.body.id }, { $set: req.body }) 
        return res.status(200).json({ message: "Todo Updated Succesfully" })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}


export const deleteTodo = async (req, res) => {
    try {
        await TodoSchema.deleteOne({ _id: req?.body?.id }).sort({ createdAt: -1 })
        return res.status(200).json({ message: "Todos Deleted Succesfully" })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}



