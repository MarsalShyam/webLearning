const express = require('express')
const app = express()
const port = 3000
// https://github.com/mde/ejs/wiki/Using-EJS-with-Express


app.set('view engine','ejs');
app.get('/', (req, res) => {
   let SiteName="Addidas"
   let SearchText="Search Now" 
   let arr=[1,34,43]
  // res.sendFile('templates/index.html',{root:__dirname})
  res.render('index',{siteName:SiteName,searchText:SearchText,arr})
})

// app.get('/blog/:slug', (req, res) => {
     
//     let BlogTitle="Adidas why and when?"
//     let BlogContent="It's a very good brand" 
//     let arr=[1,23,43]
//    res.render('blogpost',{blogTitle:BlogTitle,blogContent:BlogContent,arr})
//  })

app.listen(port, () => {

  console.log(`Example app listening on port ${port}`)
  
})