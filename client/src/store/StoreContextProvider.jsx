import React from 'react'
import { createContext } from "react";


export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {
  const url = "http://localhost:8000";

  const test = "testing he bro";
  const contextValue = {
    url : url,
    test : test,
}



  return (
    <StoreContext.Provider value={contextValue}>
    <>
    {props.children}
    </>
    </StoreContext.Provider>
  )
}

export default StoreContextProvider
