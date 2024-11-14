import React from 'react'

const Header = (props) => {

  const logOutUser = () =>{
    localStorage.setItem('loggedInUser','')
    props.changeUser('')
  }
    return(
        <div className='flex justify-between items-end'>
          <h1 className='font-medium text-2xl'>Hello, <br/></h1>
          <button onClick={logOutUser} className='bg-red-700 text-lg font-medium text-white rounded-sm px-4 py-2'>Log Out</button>
        </div>
    )
}

export default Header