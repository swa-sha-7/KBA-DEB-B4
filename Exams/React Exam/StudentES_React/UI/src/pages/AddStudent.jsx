import React ,{useState}from 'react'
import { useNavigate } from 'react-router-dom';

const AddStudent = () => {
    const [studentname,setStudentname]=useState('');
    const [enrolnum,setEnrolnum]=useState('');
    const [enroldate,setEnroldate]=useState('');
    const [course,setCourse]=useState('');
    const navigate =useNavigate();
    const handleSubmit = async(e) => {
      e.preventDefault();
      const newstudent ={
        studentname,
        enrolnum,
        course,
        enroldate
      }
      
      try{
          const response =  await fetch('/api/addstudent',
              {
                  method:"POST",
                  headers:{'Content-Type':'application/json'},
                  body:JSON.stringify(newstudent)
              }
          )

          if(response.ok){
              alert("Student Added Successfully");
              navigate('/Home')

          }
          else{
              alert("Failed to Add Student");
          }
      }
      catch(error){
          console.error("this is the error",error);
      }
    }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
    <form
      onSubmit={handleSubmit}
      className="bg-white p-10 rounded-xl shadow-xl w-full max-w-lg"
    >
      <h2 className="text-3xl font-semibold text-center text-black mb-8">
        Add Student Details
      </h2>

      <div className="mb-5">
        <label
          htmlFor="studentname"
          className="block text-sm font-medium text-gray-800"
        >
          Owner Name
        </label>
        <input
          type="text"
          name="studentname"
          value={studentname}
          onChange={(e) => setStudentname(e.target.value)}
          className="w-full mt-2 px-5 py-3 border border-gray-300 rounded-xl "
          placeholder="Enter Student Name"
        />
      </div>
  
      <div className="mb-5">
        <label
          htmlFor="enrolnum"
          className="block text-sm font-medium text-gray-800"
        >
          Enrollment Number
        </label>
        <input
          type="text"
          name="enrolnum"
          value={enrolnum}
          onChange={(e) => setEnrolnum(e.target.value)}
          className="w-full mt-2 px-5 py-3 border border-gray-300 rounded-xl "
          placeholder="Enter Enrollment Number"
        />
      </div>
  
      <div className="mb-5">
        <label
          htmlFor="course"
          className="block text-sm font-medium text-gray-800"
        >
          Course Name
        </label>
        <input
          type="text"
          name="course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          className="w-full mt-2 px-5 py-3 border border-gray-300 rounded-xl "
          placeholder="Enter Course Name"
        />
      </div>
  
      <div className="mb-5">
        <label
          htmlFor="enroldate"
          className="block text-sm font-medium text-gray-800"
        >
          Enrollment Date
        </label>
        <input
          type="date"
          name="enroldate"
          value={enroldate}
          onChange={(e) => setEnroldate(e.target.value)}
          className="w-full mt-2 px-5 py-3 border border-gray-300 rounded-xl "
        />
      </div>
  
  
      <button
        type="submit"
        className="w-full py-3 px-6 bg-black text-white rounded-xl shadow-lg hover:bg-gray-700 "
      >
        Submit
      </button>
      
    </form>
    </div>
  );
}

export default AddStudent