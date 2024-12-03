const express=require('express');
const router=express.Router();

// middleware that is specific to this router
const timeLog = (req, res, next) => {
    console.log('Time: ', Date.now())
    next()
  }
  router.use(timeLog)

router.get('/',(req,res)=>{
    res.send('Hello from Blog page');
})
router.get('/about',(req,res)=>{
    res.send("about the blog");
})

router.get('/contact',(req,res)=>{
    res.send("contact the blog writer");
})

module.exports=router;