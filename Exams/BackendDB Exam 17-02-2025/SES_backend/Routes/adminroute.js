import { Router } from "express";
import dotenv from 'dotenv';
import mongoose from "mongoose";

dotenv.config();
const adminroute=Router();
const secretkey=process.env.secretkey;

const StudentSchema = new mongoose.Schema(
    {
        enrollmentno:{type:Number,unique:true},
        studentname:String,
        course:String,
        enrollmentdate:String
    }
)

const student=mongoose.model(`studentdetails`,StudentSchema)
mongoose.connect('mongodb://localhost:27017/StudentES')

//add
adminroute.post('/addstudent',authenticate,async(req,res)=>{
    const {enrollmentno,studentname,course,enrollmentdate}=req.body;

    const existingstudent = await student.findOne({enrollmentno:enrollmentno})
    if (existingstudent){
        res.status(201).json("The student is already added.");
    }
    else{
        const newStudent = new student({
            enrollmentdate:enrollmentdate,
            studentname:studentname,
            course:course,
            enrollmentdate:enrollmentdate
        })
        await newStudent.save()
        res.status(200).json("Student added successfully.");
    }
});

//view
adminroute.get('/viewstudent', async(req,res)=>{
    try{
        console.log(course.size);
        if(course.size!=0){            
            res.send(Array.from(course.entries()))
        }
        else{
            res.status(404).json({message:'Course not found!'});
        }
    }
    catch{
        res.status(404).json({message:"Internal error!"})
    }
})

//delete
adminroute.delete('/deletestudent',authenticate,(req,res)=>{
    const result=req.query.studentname;
    console.log(result);
    
    if(studentname.has(result)){
        console.log('Student deleted successfully.')
        studentname.delete(result);
        res.send(`Student "${result}" has been deleted successfully.`);
    }
    else{
        res.send('Student not found!')
    }
})

export{adminroute};







