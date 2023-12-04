import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Signup() {
  const navigate=useNavigate();
  const [formdata,setformdata]=useState({})
  const handlechange=(e)=>{
    setformdata({
      ...formdata,
      [e.target.id]:e.target.value,
    });

  };
  console.log(formdata);
  const handlesubmit=async(e)=>{
    e.preventDefault();
    try {
      const res=await fetch('/api/auth/signup',{
        method:'POST',
        headers:{
          'Content-Type':'application/json',
        },
        body:JSON.stringify(formdata),
      });
      const data=await res.json();
      console.log(data);
      navigate('/signin');
      
    } catch (error) {
      console.log(error);
    }
   
  };
  return (
    <div className='w-screen min-h-[90vh] p-5 bg-slate-200'>
      <form onSubmit={handlesubmit} className='w-[60%] max-md:w-[100%] h-96 mx-auto  flex flex-col justify-center gap-5 items-center'>
        <h1 className="font-bold text-3xl ">Sign Up</h1>
        <input onChange={handlechange} type="text"     className='w-[60%] p-2 rounded-lg placeholder:text-md' id="username"  placeholder='Name...'/>
        <input onChange={handlechange} type="email"    className='w-[60%] p-2 rounded-lg placeholder:text-md'  name="" id="email" placeholder='Email...' />
        <input onChange={handlechange} type="password" className='w-[60%] p-2 rounded-lg placeholder:text-md'  name="" id="password" placeholder='Password...'/>
       <button type="submit" className='uppercase w-[60%] rounded-lg text-white p-2  bg-slate-700'>Sign Up</button>
        <button className='uppercase w-[60%] rounded-lg text-white p-2 bg-red-600'>Continue with google</button>
        <p>Already have an account? <Link className='text-blue-500' to='/signin'>SignIn</Link></p>
      </form>
      
    </div>
  )
}

export default Signup
