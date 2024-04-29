import React from 'react'

const Navbar = () => {
  return (
    <div className=' w-full h-16 shadow-md shadow-black flex justify-between items-center px-4 '>
    <h1 className='text-xl sm:text-2xl font-bold to-secndryClr'>Movies.com</h1>
    <button className='bg-secndryClr text-primaryClr p-2 px-4 rounded-md font-semibold hover:bg-secndryClr/90 transition-all'>Login</button>
    </div>
  )
}

export default Navbar;