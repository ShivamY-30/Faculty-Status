// src/components/ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    // Redirect to login if token is not found
    return <Navigate to="/" replace />;
  }

  // Render the element if token is present
  return element;
};

export default ProtectedRoute;
