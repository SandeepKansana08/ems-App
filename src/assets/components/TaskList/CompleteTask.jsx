import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div>
         <div className='flex-shrink-0 h-[300px] w-[300px] p-5 rounded-xl bg-green-500'>
                <div className='flex justify-between items-center'>
                    <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
                    <h4 className='text-sm'>{data.date}</h4>
                </div>
                <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
                <p className='text-sm mt-2'>{data.description}</p>

                <div className='mt-10'>
                <button className='w-full bg-blue-900 rounded py-1 px-2'>Completed</button>
                </div>
            </div>
            
    </div>
  )
}

export default CompleteTask