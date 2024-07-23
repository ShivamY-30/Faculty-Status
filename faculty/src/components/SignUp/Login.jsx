import React, { useEffect, useState, useContext } from 'react';
import './Login.css';
import axios from 'axios';
import { FacultyContext } from '../../store/FacultyStoreContext.jsx';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { url, settoken } = useContext(FacultyContext);
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [Ldata , setLdata] = useState({
    email : "",
    password : "",
  })

  // http://localhost:8000/api/faculty/login

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData(prevData => ({
      ...prevData,
      [name]: value
    }));
  }


  const onRegister = async (event) => {
    event.preventDefault();
    const newUrl = `${url}/api/faculty/register`;
    console.log("Registered");
    const response = await axios.post(newUrl, data);
    if (response.data.success) {
      settoken(response.data.token);
      localStorage.setItem("token", response.data.token);
      // console.log(response.data);
      navigate('/Loggedin'); // Use navigate instead of redirect
    } else {
      alert(response.data.message);
    }
  }


  const onChangeHandlerforL = (event) => {
    const { name, value } = event.target;
    setLdata(prevData => ({
      ...prevData,
      [name]: value
    }));
  }

  const onLogin = async (event) => {
    event.preventDefault();
    const newUrl = `${url}/api/faculty/login`;
    const response = await axios.post(newUrl, Ldata);
    console.log(response.data.token);

    if (response.data.success) {  
      settoken(response.data.token);
      localStorage.setItem("token", response.data.token);
      navigate('/Loggedin');
    } else {
      alert(response.data.message);
    }
  }

  return (
    <>
    <div className="body">


      <div className="main">
        <input type="checkbox" id="chk" aria-hidden="true" />
        <div className="signup">
          <form onSubmit={onRegister}>
            <label htmlFor="chk" aria-hidden="true">Sign up</label>
            <input type="text" name="name" onChange={onChangeHandler} value={data.name} placeholder="User name" required />
            <input type="email" name="email" onChange={onChangeHandler} value={data.email} placeholder="Email" required />
            <input type="password" name="password" onChange={onChangeHandler} value={data.password} placeholder="Password" required />
            <button type='submit'>Sign up</button>
          </form>
        </div>

        <div className="login">
          <form onSubmit={onLogin}>
            <label htmlFor="chk" aria-hidden="true">Login</label>
            <input type="email" name="email" onChange={onChangeHandlerforL} value={Ldata.email} placeholder="Email" required />
            <input type="password" name="password" onChange={onChangeHandlerforL} value={Ldata.password} placeholder="Password" required />
            <button type='submit'>Login</button>
          </form>
        </div>
      </div>
      </div>
    </>
  );
};

export default Login;
