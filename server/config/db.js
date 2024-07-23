import mongoose from "mongoose";

export const connectDB = async ()=>{
    await mongoose.connect("mongodb://yadavshivamp90671:8bkKMcajfCssy1TL@ac-6uvwfe6-shard-00-00.levduof.mongodb.net:27017,ac-6uvwfe6-shard-00-01.levduof.mongodb.net:27017,ac-6uvwfe6-shard-00-02.levduof.mongodb.net:27017/?ssl=true&replicaSet=atlas-w0vzsg-shard-0&authSource=admin&retryWrites=true&w=majority&appName=FacultyDb1").then(()=>{
        console.log("Connected ");
    })
}

