import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import { facultyAccountRoute } from "./routes/facultyAccountRoute.js";
import { facultyroute } from "./routes/facultyroute.js";
import path from 'path';
import 'dotenv/config.js';
import { authMiddleware } from "./middlewares/auth.js";
import { contactroute } from "./routes/contactroute.js";


const app = express();
const port = process.env.PORT || 8000;

// Middleware setup
app.use(express.json());
app.use(cors());

// Connect to the database
connectDB();

// Faculty Account API endpoint
app.use('/api/faculty', facultyAccountRoute);

// Faculty Data API endpoint for user side
app.use('/api/faculty', facultyroute);

app.use('api/faculty' , facultyroute);


// to accesee the images as public to use it on frontend
app.use('/images' , express.static('uploads'))


// FACULTY SIDE WORK
// faculty data for ipdation of status
app.use('/api/faculty' ,  facultyroute)


// contact details 
app.use('/api/contact' , contactroute)

// Start the server
app.listen(port, () => {
    console.log(`Server Running On http://localhost:${port}`);
});

