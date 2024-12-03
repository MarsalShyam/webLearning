const express = require('express')
const blog=require('./routes/blog')
const shop=require('./routes/shop')

const app = express()
const port = 3000

app.use(express.static("public"));
app.use('/blog',blog);
app.use('/shop',shop);

app.get('/', (req, res) => {
  console.log("hey it's a get request");
  res.send('Hello World2!')
})

app.post('/',(req,res)=>{
  console.log("hey it's a post request");
  res.send('Hello World from POST!')
})



app.get('/index',(req,res)=>{
  console.log("hey it's a index request");
  res.sendFile('templates/index.html',{root:__dirname})
})

app.get('/api', (req, res) => {
  // console.log("hey it's a json request");
  res.json({a:1,b:2,c:3,d:4,e:5,name:["harry","jerry"]})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})