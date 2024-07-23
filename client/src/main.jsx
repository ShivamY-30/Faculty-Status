import React from 'react'
import App from './routes/App.jsx';
import './index.css'
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HeroPage from './routes/HeroPage.jsx';
import StoreContextProvider from './store/StoreContextProvider.jsx';
import FacultyDetails from './components/FacultyDetails/FacultyDetails.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Contact from './components/Contact/Contact.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element : <App/>,

    children : [
      {
        path : '/',
        element:<HeroPage/>
      },
      {
        path : '/:id',
        element : <FacultyDetails/>
      },
      {
        path : '/contact',
        element : <Contact/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StoreContextProvider>
    <RouterProvider router={router} />
    </StoreContextProvider>
    <ToastContainer />
  </React.StrictMode>,
)
