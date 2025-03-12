import React from 'react'
import StudentGrid from '../components/StudentGrid'
const ViewStudent = () => {
  return (
    <>
        <h1 className='text-4xl font-bold mt-10 text-center'>All Students</h1>
        <StudentGrid isHome={false}/>
</>
  )
}

export default ViewStudent