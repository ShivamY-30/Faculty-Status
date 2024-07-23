import express from 'express'
import { register , login } from '../controller/facultyAccountContoller.js';

var facultyAccountRoute = express.Router();


facultyAccountRoute.post('/register' ,register);

facultyAccountRoute.post('/login' ,login);


export {facultyAccountRoute}