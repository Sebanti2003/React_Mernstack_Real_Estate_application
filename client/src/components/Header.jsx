import React from 'react'
import { Link } from 'react-router-dom'
import { IoMdSearch } from "react-icons/io";

function Header() {
  return (
    <div className='w-screen h-16 p-2 bg-slate-300'>
        <div className='h-full w-[85%] max-sm:w-[100%] mx-auto  flex items-center justify-between'>
            <div className='w-auto text-lg flex max-md:flex-col max-md:justify-center max-md:items-center'>
                <div className='font-bold  font-serif text-slate-700'>Moonlight</div>
                <div className='font-bold font-serif'>Agency</div>
            </div>
            <div className='w-auto px-2 h-10 rounded-lg border-2 border-slate-400 bg-slate-100 flex items-center '>
                <input type="text" className='lg:w-[400px] placeholder:text-lg max-lg:w-auto h-full bg-transparent' placeholder='Search...' />
                <button><IoMdSearch className='text-2xl' /></button>
            </div>
            <div className='w-auto flex gap-4'>
               <Link to='/' className='max-md:hidden font-bold hover:underline'>Home</Link>
               <Link to='/about' className='max-md:hidden font-bold hover:underline'>About</Link>
               <Link to='/signin' className='max-md:hidden font-bold hover:underline'>SignIn</Link>
            </div>
        </div>
        
      
    </div>
    
  
  )
}

export default Header
