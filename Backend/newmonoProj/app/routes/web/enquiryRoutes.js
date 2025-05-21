import express from 'express'
import { enquiryInsert,enquiryList,enquiryDelete } from "../../controller/web/userEnquiryContoller.js";
let enquiryRoutes=express.Router();

enquiryRoutes.get('/enquiry-list', enquiryList)

enquiryRoutes.post('/enquiry-insert',enquiryInsert)

enquiryRoutes.delete('/enquiry-delete/:id',enquiryDelete)

export {enquiryRoutes};