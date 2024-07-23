import { contactModel } from "../models/contactModel.js";


const contactController = (req ,res) =>{
    
    const {name, department} = req.body;
    // console.log(name);

      // Create a new FacultyData document
    const newContactData = new contactModel({
        name,
        department,
    });

    newContactData.save();
    res.json({success : true, message : "Data Uploaded Succesfully"});
}


export {contactController};