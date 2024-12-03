const express =require('express');
const app=express();
const port=3000;
const fs=require('fs');
const blog=require('./routes/blog');

app.use(express.static('public'));
app.use("/blog",blog);

//middleware 1
app.use((req,res,next)=>{
    console.log(req.headers);
    req.shyam="i am shyam";
    console.log('middleware1 is working');
    // res.send("hacked my middleware 1");
    next();
})

//middleware 2
app.use((req,res,next)=>{
    // fs.writeFile("ram.txt","ram is a good boy",()=>{
    //     console.log("done");
    // })

    fs.appendFile("ram.txt","shyam demo\n",(e,d)=>{
        // console.log(d.toString())
    })
    // console.log(`${Date.now()} is a ${req.method}`);
    next();
})



app.get('/',(req,res)=>{
    res.send('hello shyam');
})

app.get('/about',(req,res)=>{
    res.send('about'+req.shyam);
})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})