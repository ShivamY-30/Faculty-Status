import React, { useState, useEffect, useContext } from "react";
import "./FacultyList.css";
import { FaExternalLinkAlt } from "react-icons/fa";
import axios from "axios";
import { StoreContext } from "../../store/StoreContextProvider";
import { useNavigate } from "react-router-dom";

const FacultyList = () => {
  const [fetcheddata, setfetcheddata] = useState([]);
  const { url } = useContext(StoreContext);
  const navigate = useNavigate(); // Initialize useNavigate

  const newurl = `${url}/api/faculty/get`;

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get(newurl);
        if (response.data) {
          setfetcheddata(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetch();
  }, [newurl]);

  const extractPath = (fullPath) => {
    const match = fullPath.match(/uploads\\(.+)/);
    return match ? match[1] : "";
  };

  const handleViewDetails = (id) => {
    navigate(`/${id}`); 
  };

  return (
    <div className="main-container">
      <div className="heading">
        <h3>Enter Role of Faculty</h3>
        <input type="text" placeholder="Enter Role" />
      </div>

      <div className="list add flex-col">
        <div className="list-table">
          <div className="list-table-format title">
            <b>Image</b>
            <b>Name</b>
            <b>Department</b>
            <b>Class No.</b>
            <b>View Details</b>
          </div>
          {fetcheddata.length > 0 ? (
            fetcheddata.map((item, index) => (
              item.allow ? (
                <div className="list-table-format" key={index}>
                  <img
                    src={`${url}/images/${extractPath(item.path)}`}
                    alt="Item Image"
                  />
                  <p>{item.name}</p>
                  <p>{item.department}</p>
                  <p>{item.room}</p>
                  <p className="cursor" onClick={() => handleViewDetails(item._id)}>
                    <FaExternalLinkAlt className="icon" />
                  </p>
                </div>
              ) : null
            ))
          ) : (
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
            <div className="spinner-border text-success" role="status">
              <span className="sr-only"></span>
            </div>
          </div>        
          )}
        </div>
      </div>
    </div>
  );
};

export default FacultyList;
