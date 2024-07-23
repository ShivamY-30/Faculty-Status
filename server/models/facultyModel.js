import mongoose from "mongoose";

const facultyScema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true }, 
    password: { type: String, required: true }
})

const facultyModel = mongoose.model.facultyAccounts || mongoose.model('facultyAccounts' , facultyScema);


export  {facultyModel}