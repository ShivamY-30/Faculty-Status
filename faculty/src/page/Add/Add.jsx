import "./Add.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { FacultyContext } from "../../store/FacultyStoreContext";
import { toast } from 'react-toastify';

// For toasting the upload succesfull message
const Add = () => {
  const [file, setFile] = useState(null);
  const { url } = useContext(FacultyContext);

  const [data, setData] = useState({
    name: "",
    room: "",
    department: "",
    email: "",
    mobile: "",
    description: "",
    Roles: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const handleChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  // useEffect(()=>{
  //   console.log(file);
  // },[file])

  const onSubmitHandler = async (event) => {
    const newURl = url + "/api/faculty/upload";
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("room", data.room);
    formData.append("department", data.department);
    formData.append("email", data.email);
    formData.append("mobile", data.mobile);
    formData.append("description", data.description);
    formData.append("Roles", data.Roles);
    formData.append("file", file);

    const response = await axios.post(newURl, formData);
    if (response.data.success) {
      console.log(response.data);
    }
  };

  const toasthere = () => {
    console.log("Clicked");
  };

  return (
    <>
    <div className="add">
      <form className="flex-col" onSubmit={onSubmitHandler}>
        <div className="add-product-name flex-col">
          <p>Faculty Image</p>
          <input
            onChange={handleChange}
            type="file"
            name="file"
            placeholder="Select Your Image"
          />
        </div>

        <div className="add-product-name flex-col">
          <p>Faculty Name</p>
          <input
            type="text"
            name="name"
            onChange={onChangeHandler}
            placeholder="Type here"
          />
        </div>
        <div className="add-product-name flex-col">
          <p>Cabin Room Number</p>
          <input
            type="number"
            name="room"
            onChange={onChangeHandler}
            placeholder="Type here"
          />
        </div>
        <div className="add-product-name flex-col">
          <p>Faculty Email</p>
          <input
            type="email"
            name="email"
            onChange={onChangeHandler}
            placeholder="Type here"
          />
        </div>
        <div className="add-product-name flex-col">
          <p>Faculty Mobile</p>
          <input
            type="number"
            name="mobile"
            onChange={onChangeHandler}
            placeholder="Type here"
          />
        </div>

        <div className="add-product-description flex-col">
          <p>Faculty description</p>
          <textarea
            name="description"
            onChange={onChangeHandler}
            rows="6"
            placeholder="Write Content here"
            required
          ></textarea>
        </div>
        <div className="add-product-description flex-col">
          <p>Faculty Roloes (e.g - HostelWarden , StudentCoordinator)</p>
          <textarea
            name="Roles"
            onChange={onChangeHandler}
            rows="6"
            placeholder="Write Content here"
            required
          ></textarea>
        </div>
        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>Department category</p>
            <select onChange={onChangeHandler} name="department">
              <option value="IT">IT</option>
              <option value="CE">CE</option>
            </select>
          </div>
        </div>
        <button type="submit" onClick={toasthere} className="add-btn">
          ADD
        </button>
      </form>
    </div>
    </>
  );
};

export default Add;
