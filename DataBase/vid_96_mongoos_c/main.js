// const express = require('express')
import express from 'express';
import mongoose from 'mongoose';
import {User,Post } from './models/User.js'
const app = express()
const port = 3000

let con=await mongoose.connect("mongodb://localhost:27017/users")



app.get('/', (req, res) => {
    //creating user data
    const user=new User({name:"shyam",email:"shyam@gmail.com",age:20}); 
    user.save();
    console.log("doneUser");
    const post=new Post({title:'Introduction to MongoDB',content:"This is a basic into to MondoDB and Mongoose.",author:user._id,tags:['mongodb','mongoose','database']});
    post.save();
    console.log("donepost");
  res.send('Hello shyam!')
})


app.get('/userdata1',async(req,res)=>{
    let user=await User.findOne({});
    res.json({name:user.name,email:user.email,age:user.age});
    console.log("done");
})

app.get('/useralldata',async(req,res)=>{
    let users=await User.find({});//user all data

    // res.json(users);it give all the data info 

    let userlist=users.map(user=>{
        return{name:user.name,email:user.email};
    })//it give the mapped data only
    res.json(userlist);
    console.log("done");
})

//using populate func for geting related data
app.get('/postdata',async(req,res)=>{
    const post =await Post.find({}).populate('author');
    res.json(post);//it give all the post with author (about user)
})


//combining two independent collections 
app.get('/combineddata',async(req,res)=>{
    try{
        let users=await User.find({});//user all data
        let posts=await Post.find({});//post all data
        //comibinig user and post into one response object
        const combData={users,posts};

        res.json(combData);
        console.log("done");
    }catch(err){
        res.status(500).send(err.message);
    }
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})