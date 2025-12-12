import mongoose from "mongoose";
import { DB_Name } from "../constants.js";

const connectDB = async () =>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_Name}`)
        console.log("MongoDB connected !!!!")

    } catch (error) {
        console.log("MongoDB connection error:",error)
        process.exit(1)
        
    }
}

export {connectDB}