import express from 'express'
// let express=require('express');
import mongoose from 'mongoose';
import dotenv from 'dotenv';
// import enquiryModel from './models-enquiry.model.js';
// import { enquiryList } from './app/controller/web/userEnquiryContoller.js';
// import enquiryModel from './app/models/models-enquiry.model.js';
// import { enquiryInsert } from './app/controller/web/userEnquiryContoller.js';
// import { enquiryDelete } from './app/controller/web/userEnquiryContoller.js';
import { enquiryRoutes } from './app/routes/web/enquiryRoutes.js';
dotenv.config();
// require('dotenv').config();
const app = express()
app.use(express.json());//middleware to parse JSON data

mongoose.connect(process.env.DBURL)
.then(() => console.log('Connected!'))
.catch((err)=>console.log('Connection error',err)
);

app.use("/web/api/enquiry",enquiryRoutes)
// app.get('/api/enquiry-list', enquiryList)

// app.post('/api/enquiry-insert',enquiryInsert)

// app.delete('/api/enquiry-delete/:id',enquiryDelete)

app.listen(process.env.PORT,()=>{
  console.log(`Server running on port ${process.env.PORT}`);
})