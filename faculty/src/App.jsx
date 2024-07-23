// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/SignUp/Login.jsx';
import Loggedin from './page/Loggedin/Loggedin.jsx';
import Add from './page/Add/Add.jsx';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Loggedin" element={<ProtectedRoute element={<Loggedin />} />}>
          <Route path="add" element={<ProtectedRoute element={<Add />} />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
