import enquiryModel from "../../models/models-enquiry.model.js";

let enquiryList=async(req, res) => {
  // res.send('Hello World')
  let enquiryList=await enquiryModel.find();
  res.status(200).json({stauts:1,message:"Enquiry List",data:enquiryList});
}

let enquiryInsert=async(req,res)=>{
  let {sName,sEmail,sMessage}=req.body;
  
  let enquiry=new enquiryModel({
    name:sName,
    email:sEmail,
    message:sMessage
  });
  enquiry.save().then(()=>{
    res.send({status:1,message:"Enquiry saved Successfull"});
  }).catch((err)=>{
    res.send({status:0,message:"error while saveing enquiry",error:err});
  })
}

let enquiryDelete=async(req,res)=>{
  let enquiryId=req.params.id;
  console.log(enquiryId);
  let deletedEnquiry=await enquiryModel.deleteOne({_id:enquiryId});
  res.send({status:1,message:"Enquiry Deleted",id:enquiryId,delRes:deletedEnquiry})
}

export  {enquiryList,enquiryInsert,enquiryDelete};