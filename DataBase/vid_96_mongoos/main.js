//https://www.npmjs.com/package/mongodb
import express from 'express';
import mongoose from 'mongoose';
import  {Todo}  from './models/Todo.js';

let con=await mongoose.connect("mongodb://localhost:27017/todo");
const app = express()
const port = 3000

app.get('/', (req, res) => {
    const todo=new Todo({title:"first todo",desc:"Description of this todo",isDone:false,days:Math.floor(Math.random()*45+5*Math.random())})
    //again and again insertin data to database
    todo.save()
    console.log("done"); 
  res.send('Hello World!')
})

app.get('/a', async(req, res) => {
//  let todos=await Todo.findOne({});1
// let todos=await Todo.find({});//it not correct for getting all object
let todos=await Todo.find();
 console.log(todos);
// res.json({title:todos.title,desc:todos.desc})1
// res.json(todo);give all full obj 
// res.send('Hello World!')

//use map to extract title and desc from each todo
let todoList=todos.map(todo=>{
  return {title:todo.title,desc:todo.desc};
});
//send the array of filtered todos as the JSON response
res.json(todoList);
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})