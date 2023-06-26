import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv"
import cors from "cors"
import Todo from "./routes/todo.js";
import UserAuth from "./routes/userAuth.js"
import bodyParser from "body-parser";


dotenv.config()
const USERNAME = process.env.DB_USERNAME


mongoose.connect(`mongodb+srv://${USERNAME}:pubg%401234567890@crud.uaedlw9.mongodb.net/`).then(() => {
    console.log("DBConnection Sufccessful")
}).catch((err) => { console.log(err) });

const app = express()
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization, timeZone, x-token"
    );
    res.header(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, OPTIONS, PATCH"
    );
    next();
  });



app.use(cors());

app.use(bodyParser.json({limit:"50000mb"}));
app.use(bodyParser.urlencoded({limit: "50000mb", extended: true, parameterLimit:50000}));

app.use("/todo", Todo)
app.use("/", UserAuth)

const PORT = 8080


app.listen(PORT, console.log(`Server started on port ${PORT}`));
