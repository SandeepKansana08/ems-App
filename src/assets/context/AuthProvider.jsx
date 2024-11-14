import React, { createContext, useState, useEffect } from 'react'
import { getLocalstorage, setLocalstorage } from '../utils/Localstorage'

export const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const [userData, setUserData] = useState(null);
//  localStorage.clear()
    useEffect(() => {
        setLocalstorage();

        const {employees} = getLocalstorage()
        setUserData(employees) 
    },[]);
    
  
  return (
    <div>
        <AuthContext.Provider value={[userData,setUserData]}>
            {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider