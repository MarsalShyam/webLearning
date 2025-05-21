import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
// import enquiryModel from '../server/app/models/enquiry_model.js'
// import { enqiryDelete, enquiryget, enquiryPost, enquiryPut } from './app/controllers/web/enquiryController.js';
import enquiryRoutes from './app/routes/web/EnquiryRoutes.js';
dotenv.config();

let app=express();
app.use(express.json());

app.use('/web/api',enquiryRoutes)
// app.get("/api/get",enquiryget)
// app.post("/api/post",enquiryPost)
// app.delete("/api/delete/:id",enqiryDelete)
// app.put("/api/edit",enquiryPut)
mongoose.connect(process.env.DBURL).then(()=>{
    console.log("Connect th MongoDB");
    app.listen(process.env.PORT,()=>{
        console.log(`Server is running on port ${process.env.PORT}`);
    })
})



// *********************CRUD OPERATION>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// import express from 'express';
// import mongoose from 'mongoose';
// import dotenv from 'dotenv';
// import enquiryModel from '../server/app/models/enquiry_model.js'
// dotenv.config();

// let app=express();
// app.use(express.json());

// app.get("/api/get",async(req,res)=>{
//     // res.send("hii shyam");
//     let enquirylist=await enquiryModel.find();
//     res.status(200).json({status:1,message:"Enquiry list",data:enquirylist})
// })
// app.post("/api/post",(req,res)=>{
//     // res.send("it is post");
//     let {sName,sEmail,sPhone,sMessage}=req.body;
//     let enquiry=new enquiryModel({
//         name:sName,
//         email:sEmail,
//         phone:sPhone,
//         message:sMessage
//     })
//     enquiry.save().then(()=>{
//         res.send({status:1,message:"Enquiry saved successfully"});
//     }).catch((err)=>{
//         res.send({status:0,message:"error while inserting",error:err});
//     })
// })
// app.delete("/api/delete/:id",async(req,res)=>{
//     // res.send("It is delete");
//     let enquiryId=req.params.id;
//     let deletedEnquiry=await enquiryModel.deleteOne({_id:enquiryId});
//     res.send({status:1,message:"id deleted",id:enquiryId,delRes:deletedEnquiry});
// })
// app.put("/api/edit",async(req,res)=>{
//     let enquiryId=req.params.id;
//     let {sName,sEmail,sPhone,sMessage}=req.body;
//     let updatedObj={
//         name:sName,
//         email:sEmail,
//         phone:sPhone,
//         message:sEmail
//     };

//     let editedId=await enquiryModel.updateOne({_id:enquiryId},updatedObj)
//     res.send({status:1,message:"enquiry updated",editedId})

//     // res.send("IT is put request");
// })
// mongoose.connect(process.env.DBURL).then(()=>{
//     console.log("Connect th MongoDB");
//     app.listen(process.env.PORT,()=>{
//         console.log(`Server is running on port ${process.env.PORT}`);
//     })
// })