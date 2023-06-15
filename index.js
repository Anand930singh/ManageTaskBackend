const express=require('express')
const connectDb=require('./config/db')
const bodyParser = require('body-parser');
const PORT =process.env.PORT||5000

const app=express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDb();

//AddTask
app.use('/addtask',require('./router/addTask'));

//DeleteTask
app.use('/deletetask',require('./router/deleteTask'));

//Edittask
app.use('/edittask',require('./router/editTask'));

//Gettask
app.use('/gettask',require('./router/getTask'));

app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`)
})