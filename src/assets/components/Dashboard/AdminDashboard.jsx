import React from 'react'
import Header from '../subcomponents/Headre'
import CreateTask from '../subcomponents/CreateTask'
import AllTask from '../subcomponents/AllTask'

const AdminDashboard = ({changeUser}) =>{
    return (
        <div className='p-10 h-screen'>
            <Header changeUser={changeUser}/>
            <CreateTask />
            <AllTask />
        </div>
    )
}

export default AdminDashboard