import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import roomsRoute from "./routes/rooms.js";
import hotelsRoute from "./routes/hotels.js";
import usersRoute from "./routes/users.js";
import cookieParser from "cookie-parser";

const app = express()
dotenv.config()

const connect = async () =>{
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to MongoDB");
      } catch (error) {
        throw error;
    }
};

// Error on initial connection: If initial connection fails, Mongoose will emit an 'error' event and the promise mongoose.connect() 
// returns will reject. However, Mongoose will not automatically try to reconnect.
// Error after initial connection was established: Mongoose will attempt to reconnect, and it will emit an 'error' event.

mongoose.connection.on("disconnected", ()=>{
    console.log("MongoDB disconnected");
});

// middlewares

// By default, we cannot send any JSON object to express server
app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);


app.use((err, req, res, next) => {
    const errorStatus = err.status || 500
    const errorMessage = err.message || "Something went wrong!"
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
    })
});

app.listen(8800, ()=>{
    connect();
    console.log("Connected to backend!");
})