import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

    const [userData,setUserData] = useContext(AuthContext)

  return (
    <div className='bg-[#1c1c1c] p-5 rounded mt-6 h-52 '>

            <div className='bg-emerald-400 py-2 px-4 flex justify-between rounded mb-3'>
                <h2 className='w-1/5 font-bold'> Employee Name</h2>
                <h3 className='w-1/5 font-bold'>New Task</h3>
                <h5 className='w-1/5 font-bold'>Active Task</h5>
                <h5 className='w-1/5 font-bold'>Completed</h5>
                <h5 className='w-1/5 font-bold'>Failed</h5>
            </div>
            <div className='h-[80%] overflow-auto'>
                {userData.map((elem)=>(
                  <div key={elem.id} className='border-2 border-emerald-500 py-2 px-4 flex justify-between rounded mb-3'>
                      <h2 className='text-lg w-1/5'>{elem.firstName} </h2>
                      <h3 className='text-lg w-1/5 text-blue-600 font-semibold pl-3'>{elem.taskCount.newTask}</h3>
                      <h5 className='text-lg w-1/5 text-yellow-400 font-semibold pl-5'>{elem.taskCount.active}</h5>
                      <h5 className='text-lg w-1/5 text-white font-semibold pl-7'>{elem.taskCount.completed}</h5>
                      <h5 className='text-lg w-1/5 text-red-600 font-semibold pl-7'>{elem.taskCount.failed}</h5>
                    </div>
                    ) )}
            </div>    
    </div>
  )
}

export default AllTask