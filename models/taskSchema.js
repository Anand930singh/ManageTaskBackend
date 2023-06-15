const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const TaskSchema=new Schema({
    Status:Number,
    Task:String

}, { timestamps: true },{collection:'TaskManagement'});

const Task=mongoose.model('Task',TaskSchema);
module.exports=Task;