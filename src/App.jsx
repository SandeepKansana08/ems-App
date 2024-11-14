import React, { useContext, useEffect, useState } from "react"
import Login from "./assets/components/Auth/Login"
import EmployeeDashboard from "./assets/components/Dashboard/EmployeeDashboard"
import AdminDashboard from "./assets/components/Dashboard/AdminDashboard"
import { getLocalstorage, setLocalstorage } from "./assets/utils/Localstorage"
import { AuthContext } from "./assets/context/AuthProvider"

const App =() => {
  const [userData, setUserData] = useContext(AuthContext)
    
  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  

useEffect(()=>{
  const loggedInUser = localStorage.getItem('loggedInUser')

  if(loggedInUser){
    const userData = JSON.parse(loggedInUser)
    setUser(userData.role)
    setLoggedInUserData(userData.data)
  }
},[])



    const handleLogin = (email,password)=>{
        if(email == "admin@me.com"  && password == "143"){
          setUser('admin')
          localStorage.setItem('loggedInUser', JSON.stringify({role:'admin'}))
        }
        else if(userData){
          const employee = userData.find((e)=>email == e.email && password == e.password)
         if(employee){
          setUser('employee')
          setLoggedInUserData(employee)
          localStorage.setItem('loggedInUser', JSON.stringify({role:'employee', data:employee}))
         }
         else{
          alert("Invalid Credential")
        }
        }
        else{
          alert("You are not our employee")
        }
    }
    
    
  return (
    <>
  {!user ? (
    <Login handleLogin={handleLogin} />
  ) : (
    <>
      {user == 'admin' ? <AdminDashboard changeUser={setUser} /> : ( user == 'employee'? <EmployeeDashboard changeUser={setUser} data = {loggedInUserData}/> : null )}
    </>
  )}
</>
  )
}

export default App
