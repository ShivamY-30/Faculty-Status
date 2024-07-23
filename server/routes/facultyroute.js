import express from "express";
import { facultylistController } from "../controller/facultylistController.js";
import { facultylistgetter , singlefac , facultystatus , facultystatusswitch } from "../controller/facultylistgetter.js";
import { upload } from "../middlewares/upload.js";
import { authMiddleware } from "../middlewares/auth.js";

var facultyroute = express.Router();


facultyroute.post('/upload' ,upload.single('file') , facultylistController);

facultyroute.get('/get' , facultylistgetter);

facultyroute.get('/getID/:id' , singlefac);


// for FAculty Side
facultyroute.get('/status' ,authMiddleware ,  facultystatus);


facultyroute.post('/statusSwitch' ,  facultystatusswitch);




export {facultyroute};
