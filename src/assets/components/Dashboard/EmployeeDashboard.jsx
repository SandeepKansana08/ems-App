import React from 'react'
import Header from '../subcomponents/Headre'
import TaskCount from '../subcomponents/TaskCount'
import TaskList from '../TaskList/TaskList'
const EmployeeDashboard = (props) => {
  
  
    return(
        <div className='p-10 bg-[#1C1C1C] h-screen'>
          <Header changeUser={props.changeUser} data={props.data} /> 
          <h1 className='font-semibold text-4xl pl-10'>{props.data.firstName}</h1> 
          <TaskCount data={props.data} />
          <TaskList data={props.data} /> 
        </div>
    )
}

export default EmployeeDashboard