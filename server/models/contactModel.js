import mongoose from "mongoose";


const contactSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
      },
    department: {
        type:String,
        required: true,
    }
})

const contactModel = mongoose.models.ContactData || mongoose.model("ContactData" , contactSchema);

export {contactModel};
