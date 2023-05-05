import React, { createContext, useContext, useEffect, useState } from 'react'
const AppContext = createContext();
const Context = ({ children }) => {
    const [shows,setShowGlobal] = useState([]);
    return (
        <>
            <AppContext.Provider value={{ shows,setShowGlobal  }}>
                {children}
            </AppContext.Provider>
        </>
    )
}
const useGlobalContext = () => {
    return useContext(AppContext);
}

export default Context

export { AppContext, useGlobalContext }