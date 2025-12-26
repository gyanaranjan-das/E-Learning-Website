import express from "express";
import dotenv from "dotenv";
import cors from "cors";


dotenv.config();

const app = express();
app.use(cors()); //cross origin resource sharing
app.use(express.json());

app.get("/",(req,res) => {
    res.send("API is running");
});

app.listen(process.env.PORT || 5000, () => {
    console.log("Server is running on PORT",process.env.PORT || 5000);
});