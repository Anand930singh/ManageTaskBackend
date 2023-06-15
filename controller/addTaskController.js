const express = require("express");
const Task = require("../models/taskSchema");

const AddTask = async (req, res) => {
   const{task}=req.body;

    console.log(req.body)

   const TaskData= new Task({
    Status:0,
    Task:task
   });

   const result= await TaskData.save();
   if(result){
    // console.log('Task Added');
    res.status(200).send({
        msg:"SUCCESS"
    });
   }
   else{
    console.log('Task Not Added!');
    res.status(500).send({
        msg:"FAIL"
    });
   }

};

module.exports = { AddTask };
