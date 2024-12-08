const express = require('express');
const path = require('path');
const app = express()
const port = 3000


// app.use(express.static('src'));
// Serve static files from the "src" folder
app.use(express.static(path.join(__dirname, 'src')));
app.use(express.static('templates'));

app.get('/', (req, res) => {
    console.log("hey it's a get request");
    res.send('Hello World2!')
  });
  
  
 app.get('/index',(req,res)=>{
    console.log("hey it's a index request");
    // res.send('Hello World2!');
    // res.sendFile('/templates/index.html',{root:__dirname});
    // res.sendFile(__dirname + '/templates/index.html');
    res.sendFile(path.join(__dirname, 'templates', 'index.html'));
    
  });

  
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})