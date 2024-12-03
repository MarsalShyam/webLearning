const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))
app.use(express.static('files'));

// app.get or app.port or app.put app.delete(path,handler)
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about',(req,res)=>{
  res.send("this is about us ram");
})

app.get("/contact",(req,res)=>{
  res.send(("this is contact with us!"));
})

app.get("/blog/:slug/:second",(req,res)=>{
  //logiic to fetch {slug} from the db
  res.send(`hello ${req.params.slug} and ${req.params.second}`);
})

// for URL:http://localhost:3000/blog/intro-to-py?mode=dark&region=in
app.get("/blog/:slug",(req,res)=>{
  console.log(req.params)//output {slug: 'intro-to-py'}
  console.log(req.query)//ouput {query:mode:'dark',region:'in'}
})

// app.get("/blog/intro-to-js",(req,res)=>{
//   //logic to fetch to js from the db
//   res.send(("Hello intro-to-js!"));
// })

// app.get("/blog/intro-to-python",(req,res)=>{
//   //logic to fetch to python from the db
//   res.send(("hello here are written the python blog"));
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) 