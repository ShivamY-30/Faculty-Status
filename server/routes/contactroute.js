import express from 'express';
import { contactController } from '../controller/contactController.js';

var contactroute = express.Router();


contactroute.post('/' , contactController)


export {contactroute}
