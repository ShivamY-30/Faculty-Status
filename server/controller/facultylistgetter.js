import uploadFModel from "../models/facultyDataModel.js";

const facultylistgetter = async (req, res) => {
    try {
        // Fetch all records from the collection
        const allFacultyData = await uploadFModel.find();

        // Respond with the fetched data
        res.json({
            success: true,
            data: allFacultyData
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Server error",
        });
    }
};


const singlefac = async (req , res) =>{
    const { id } = req.params;
    try {
        const idDetails = await uploadFModel.findById(id);
        if (!idDetails) {
            return res.status(404).json({
                success: false,
                message: "Faculty not found"
            });
        }
        res.json({
            success: true,
            data: idDetails
        });
    } catch (error) {
        console.log("ERROR");
    }
}


const facultystatus =async (req, res) =>{
    let facultydata = await uploadFModel.findOne({ email: req.body.email });
    if(facultydata){
        // console.log(facultydata);
        res.json({ success: true, facultydata, message : "Fetched Succesfullt"});
    }
    else{
        res.json(null);
    }
}

const facultystatusswitch = async (req, res) => {
    const { email, status } = req.body;
    try {
        const facultydata = await uploadFModel.findOne({ email });
        if (facultydata) {
            console.log(status);
            facultydata.available = status;
            await facultydata.save();
            res.json({ success: true, message: "Status updated successfully" });
        } else {
            res.status(404).json({ success: false, message: "Faculty not found" });
        }
    } catch (error) {
        console.error("Error updating status:", error);
        res.status(500).json({ success: false, message: "Server error" });
    }
};

export { facultylistgetter  , singlefac , facultystatus ,facultystatusswitch};
