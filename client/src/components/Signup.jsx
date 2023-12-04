import React from 'react'
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <div className='w-screen min-h-[90vh] p-5 bg-slate-200'>
      <div className='w-[60%] max-md:w-[100%] h-96 mx-auto  flex flex-col justify-center gap-5 items-center'>
        <h1 className="font-bold text-3xl ">Sign Up</h1>
        <input type="text"     className='w-[60%] p-2 rounded-lg placeholder:text-md'  placeholder='Name...'/>
        <input type="email"    className='w-[60%] p-2 rounded-lg placeholder:text-md'  name="" id="" placeholder='Email...' />
        <input type="password" className='w-[60%] p-2 rounded-lg placeholder:text-md'  name="" id="" placeholder='Password...'/>
        <button className='uppercase w-[60%] rounded-lg text-white p-2  bg-slate-700'>Sign Up</button>
        <button className='uppercase w-[60%] rounded-lg text-white p-2 bg-red-600'>Continue with google</button>
        <p>Already have an account? <Link className='text-blue-500' to='/signin'>SignIn</Link></p>
      </div>
      
    </div>
  )
}

export default Signup
