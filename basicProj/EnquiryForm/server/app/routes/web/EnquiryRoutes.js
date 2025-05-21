import express from 'express';
import { enqiryDelete, enquiryget, enquiryPost, enquiryPut } from '../../controllers/web/enquiryController.js';

let enquiryRoutes=express.Router();

enquiryRoutes.post('/post',enquiryPost)
enquiryRoutes.get('/get',enquiryget)
enquiryRoutes.put('/put/:id',enquiryPut)
enquiryRoutes.delete('/delete/:id',enqiryDelete)

export default enquiryRoutes;