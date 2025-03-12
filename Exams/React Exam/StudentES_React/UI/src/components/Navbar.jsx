import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    
    <div className="bg-black p-5 ">
        <nav className="flex  justify-end">
        <Link className="px-4 text-xl text-white font-semibold hover:text-yellow-300 transition hover:bg-gray-500 p-2 rounded-lg shadow-xl" to="/Home">Home</Link>
        <Link className=" px-4 text-xl text-white font-semibold hover:text-yellow-300 transition  hover:bg-gray-500 p-2 rounded-lg shadow-xl"to="/AddService" >Add Student</Link>
        <Link className="px-4 text-xl text-white font-semibold hover:text-yellow-300 transition  hover:bg-gray-500 p-2 rounded-lg shadow-xl" to="/ViewService">View Student</Link>
        </nav>
   </div>

  )
}

export default Navbar