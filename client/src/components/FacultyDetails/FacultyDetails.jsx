import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './FacultyDetails.css'; // Import the CSS file
import { StoreContext } from '../../store/StoreContextProvider';

const FacultyDetails = () => {
  const { id } = useParams(); // Get the faculty ID from the URL
  const [faculty, setFaculty] = useState(null);
  const { url } = useContext(StoreContext);

  useEffect(() => {
    const fetchFaculty = async () => {
      try {
        const response = await axios.get(`${url}/api/faculty/getID/${id}`); // Fetch details of the faculty by ID
        setFaculty(response.data.data); // Update state with the fetched data
      } catch (error) {
        console.error('Error fetching faculty details:', error);
      }
    };
    fetchFaculty();
  }, [id, url]); 

  
  const extractPath = (fullPath) => {
    const match = fullPath.match(/uploads\\(.+)/);
    return match ? match[1] : '';
  };



  
  if (!faculty) {
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <div className="spinner-border text-success" role="status">
          <span className="sr-only"></span>
        </div>
      </div>
    );
  }
  

  const rolesArray = faculty.Roles ? faculty.Roles.split(' ') : [];

  return (
    <div className="details">
    <div className="faculty-details">
      <div className="details-wrapper">
        <img src={`${url}/images/${extractPath(faculty.path)}`} alt="Faculty" />
        <h1>{faculty.name}</h1>
        <p className="email">Email: {faculty.email}</p>
        <p>Department: {faculty.department}</p>
        <p>Room: {faculty.room}</p>
        <p >Mobine: {faculty.mobile}</p>
        <p >Description: {faculty.description}</p>
        <div className="roles-container"> Roles : 
          {rolesArray.map((role, index) => (
            <button key={index} className="role-button">
              {role}
            </button>
          ))}
        </div>
        <p >Available in Department ? : {faculty.available ? "Yes Available in Department" : "On Holiday"}</p>
        <p >Description: {faculty.description}</p>
  
      </div>
    </div>
    </div>
  );
};

export default FacultyDetails;
