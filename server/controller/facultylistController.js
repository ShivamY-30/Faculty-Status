import uploadFModel from "../models/facultyDataModel.js";
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const uploadsDirectory = join(__dirname, '..', 'uploads');

const facultylistController = async (req, res) => {
    try {
        // Check if file and fields are present in the request
        if (!req.file || !req.body) {
            return res.status(400).json({
                success: false,
                message: "File or form data missing",
            });
        }

        // Extract file and form data
        const { originalname, path: filePath } = req.file;
        const { name, room, department, email, mobile, description, Roles } = req.body;


        const exists = await uploadFModel.findOne({ email });
        if (exists) {
            return res.json({
                success: false,
                message: "This email is already used!",
            });
        }

        // Create a new FacultyData document
        const newFacultyData = new uploadFModel({
            imagename: originalname,
            path: filePath,
            name,
            room,
            department,
            email,
            mobile,
            description,
            Roles
        });

        // Save the new faculty data to the database
        await newFacultyData.save();

        // Respond with success message
        res.json({
            success: true,
            message: "Faculty data uploaded successfully",
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Server error",
        });
    }
};

export { facultylistController };
