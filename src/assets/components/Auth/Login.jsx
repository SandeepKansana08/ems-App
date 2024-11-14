import React, {useState} from 'react'

const Login = ({handleLogin}) => {

    const [email, setEmail] = useState ('')
    const [password, setPassword] = useState ('')

    const submitHandler = (e) =>{
        e.preventDefault()
        handleLogin(email,password)
        setEmail("")
        setPassword("")

    }

  return (
    <div className='flex h-screen w-screen justify-center items-center'>
        <div className='border-2 border-emerald-700 rounded-xl p-20'>
           <form 
           onSubmit={(e)=>{
            submitHandler(e)
           }} 
           className='flex flex-col items-centre justify-center gap-3'
           >
           <input 
           value={email}
           onChange={(e)=>{
            setEmail(e.target.value)
           }}
           required 
           className='border-emerald-600 border-2 text-white  bg-transparent outline-none rounded-full px-4 py-3  placeholder:text-gray-400' type="email" placeholder='enter your email' 
           />
           <input 
           value={password}
           onChange={(e)=>{
            setPassword(e.target.value)
           }}
           required
           className='border-emerald-600 border-2 text-white bg-transparent outline-none rounded-full px-4 py-3 placeholder:text-gray-400' type="password" placeholder='enter your password' 
           />
           <button className='mt-5 text-white bg-emerald-500 rounded-full px-4 py-3'>Log In</button>
           </form>
        </div>

    </div>
  )
}

export default Login