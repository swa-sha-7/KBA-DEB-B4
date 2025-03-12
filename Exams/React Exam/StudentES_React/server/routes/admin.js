import {json,Router} from 'express'
import mongoose from 'mongoose'

const admin = Router();
mongoose.connect("mongodb://localhost:27017/STUDENTS")

const studentschema = new mongoose.Schema({
    studentname:String,
    enrolnum:String,
    course:String,
    enroldate:String
})
const Student = mongoose.model("studentdetails2025",studentschema)


admin.post('/addstudent',async(req,res)=>{
  const data = req.body;
  const {studentname,enrolnum,course,enroldate}= data;
  const newstudent = new Student({
    studentname:studentname,
    enrolnum:enrolnum,
    course:course,
    enroldate:enroldate
  })

  await newstudent.save()
  res.send({message:"Student added successfully"})
  console.log("student added successfully")
})


admin.get('/viewstudent',async(req,res)=>{
  const allstudents = await Student.find({})
  if(allstudents.length!=0 ){
      console.log("list of student details added")
      res.send(allstudents)
      console.log(allstudents)

  }
  else{
      console.log("no student details added")
      res.send("  no student details added")
  }
})

admin.get('/courses',async(req,res)=>{
    const data = req.query.course;
    const samecourse = await Student.find({course:data})
    if(samecourse.length!=0 ){
        console.log("list of course : ",data)
        res.send(samecourse)
        console.log(samecourse)

    }
    else{
        console.log("no student details added")
        res.send("  no student details added")
    }
})

export {admin}