import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import FacultyStoreContext from './store/FacultyStoreContext.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Loggedin from './page/Loggedin/Loggedin.jsx';
import Add from './page/Add/Add.jsx';
import Status from './page/Status/Status.jsx';




const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/Loggedin',
    element: <Loggedin />,
    children: [
      {
        path: 'add',
        element: <Add />,
      },
      {
        path: 'status',
        element: <Status />,
      },
      // Add other child routes if necessary
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <FacultyStoreContext>
    <RouterProvider router={router} />

  </FacultyStoreContext>
);
