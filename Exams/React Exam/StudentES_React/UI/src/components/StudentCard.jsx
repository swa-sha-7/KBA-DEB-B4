import React from 'react'
const StudentCard = ({student}) => {
  return (
    <div className=' bg-yellow-100  rounded-md flex flex-col items-right justify-center mx-5 my-5 py-10 pl-10 shadow-2xl'>
            <h2 className=' font-bold text-lg text-black '>Enrollment NO : {student.enrolnum}</h2>
            <br />
            <div className='flex'><h2 className='text-black font-bold'>Student Name : </h2><h3 className='  text-lg text-blue-500 pl-3'> {student.studentname}</h3></div>
            <div className='flex'><h2 className='text-black font-bold'>Course : </h2><h3 className='  text-lg text-blue-500 pl-3'> {student.course}</h3></div>
            <div className='flex'><h2 className='text-black font-bold'>Enrollment Date : </h2><h3 className='  text-lg text-blue-500 pl-3'> {student.enroldate}</h3></div>
       </div>
  )
}

export default StudentCard