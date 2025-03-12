import React from 'react'
import StudentCard from './StudentCard'
import { useState,useEffect } from 'react';

const StudentGrid = ({isHome}) => { 
    const [student, setStudent] = useState([]);
    const studentList = isHome?student.slice(0,3):student;
    useEffect(() => {
      const  fetchstudents=async()=>{
        try{
          const res= await fetch('/api/viewstudent');
          const data=await res.json();
          setStudent(data);
        }
        catch(error){
          console.log(error);
        }
     
      };
      fetchstudents();
    },[]);

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mx-5 my-10'>
        {studentList.map((student)=>(
            <StudentCard key={student.enrolnum}student={student}/>
        ))}
    </div>
  )
}

export default StudentGrid