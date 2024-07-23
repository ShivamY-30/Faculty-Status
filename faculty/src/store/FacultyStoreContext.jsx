import React from 'react'
import { createContext , useState } from 'react';


export const FacultyContext = createContext(null);

const FacultyStoreContext = ({children}) => {

    const [token , settoken] = useState("");

    const url = "http://localhost:8000";



    const values =  {
        url : url,
        settoken : settoken,

    }

  return (
    <FacultyContext.Provider value={values}>
        {children}
    </FacultyContext.Provider>
  )
}

export default FacultyStoreContext
