import React from 'react'
import './Contact.css';
import { useState } from 'react';
import axios from "axios";
import { Toast } from 'bootstrap';
import { toast } from 'react-toastify';

const Contact = () => {

  const[data , setdata] = useState({
    name:"",
    department:"",
  })

  const onChangeHandler  = (e) =>{
    const name = e.target.name;
    const value = e.target.value;
    setdata((data) => ({ ...data, [name]: value }));
    
  }


  
  const handleSubmit =async (event)=>{
    event.preventDefault();
    const respose =await axios.post('http://localhost:8000/api/contact/' , data)
    if(respose){
      console.log(respose.data);
      setdata({ name: "", department: "" });

      toast("Sucess")
    }
  }

  return (
    <div className='contact'>
      <h2>Request Specific Faculty Details</h2>
      <br />
      <form onSubmit={ (e) => handleSubmit(e)}>
  <div className="mb-3">
    <label  className="form-label">Enter Faculty's Name</label>
    <input type="text" name='name' value={data.name} onChange={  (e) => onChangeHandler(e)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label  className="form-label">Enter Faculty's Department</label>
    <input type="text" name='department' value={data.department} onChange={(e) => onChangeHandler(e)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}




export default Contact
