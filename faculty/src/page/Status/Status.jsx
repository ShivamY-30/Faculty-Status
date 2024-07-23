import React, { useState, useEffect, useContext } from "react";
import "./Status.css";
import axios from "axios";
import { FacultyContext } from "../../store/FacultyStoreContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import 'bootstrap/dist/css/bootstrap.min.css';

const Status = () => {
  const [faculty, setFaculty] = useState(null);
  const { url } = useContext(FacultyContext);
  const token = localStorage.getItem("token");
  const [selectedStatus, setSelectedStatus] = useState("");

  const fetchFaculty = async () => {
    try {
      const response = await axios.get(`${url}/api/faculty/status`, {
        headers: { token },
      });
      if (response.data && response.data.facultydata) {
        setFaculty(response.data.facultydata);
      } else {
        console.log("Error fetching faculty data");
      }
    } catch (error) {
      console.error("Error fetching faculty data:", error);
    }
  };

  const changeStatus = async (email, status) => {
    try {
      const response = await axios.post(`${url}/api/faculty/statusSwitch`, {
        email,
        status,
      });
      if (response.data.success) {
        fetchFaculty(); // Re-fetch the faculty data to reflect the changes
        console.log(response.data);
        toast.success("Status updated successfully!");
      } else {
        console.log("Error updating status");
      }
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  useEffect(() => {
    fetchFaculty();
  }, []);

  const extractPath = (fullPath) => {
    const match = fullPath.match(/uploads\\(.+)/);
    return match ? match[1] : "";
  };

  if (!faculty) {
    return <div style={{textAlign : "center"}} >Loading..</div>;
  }

  return (
    <div className="order add">
      <h3>Change Status</h3>
      <div className="order-list">
        <div className="order-item">
          <img
            src={`${url}/images/${extractPath(faculty.path)}`}
            alt="Faculty"
          />
          <div>
            <p className="order-item-food">Name: {faculty.name}</p>
          </div>
          <p>Mark Availability Yes Or No:</p>
          <select
            name="availability"
            id="availability"
            onChange={(e) => setSelectedStatus(e.target.value)}
          >
            <option value="">Select</option>
            <option value="true">YES</option>
            <option value="false">NO</option>
          </select>
          <button onClick={() => changeStatus(faculty.email, selectedStatus)}>
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default Status;
