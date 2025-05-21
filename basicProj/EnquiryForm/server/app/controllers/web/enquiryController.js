import enquiryModel from "../../models/enquiry_model.js";
let enquiryget=async(req,res)=>{
    // res.send("hii shyam");
    let enquirylist=await enquiryModel.find();
    res.status(200).json({status:1,message:"Enquiry list",data:enquirylist})
}
let enquiryPost=(req,res)=>{
    // res.send("it is post");
    let {sName,sEmail,sPhone,sMessage}=req.body;
    let enquiry=new enquiryModel({
        name:sName,
        email:sEmail,
        phone:sPhone,
        message:sMessage
    })
    enquiry.save().then(()=>{
        res.send({status:1,message:"Enquiry saved successfully"});
    }).catch((err)=>{
        res.send({status:0,message:"error while inserting",error:err});
    })
}
let enqiryDelete=async(req,res)=>{
    // res.send("It is delete");
    let enquiryId=req.params.id;
    let deletedEnquiry=await enquiryModel.deleteOne({_id:enquiryId});
    res.send({status:1,message:"id deleted",id:enquiryId,delRes:deletedEnquiry});
}

let enquiryPut=async(req,res)=>{
    let enquiryId=req.params.id;
    let {sName,sEmail,sPhone,sMessage}=req.body;
    let updatedObj={
        name:sName,
        email:sEmail,
        phone:sPhone,
        message:sEmail
    };

    let editedId=await enquiryModel.updateOne({_id:enquiryId},updatedObj)
    res.send({status:1,message:"enquiry updated",editedId})

    // res.send("IT is put request");
}
export {enquiryget,enquiryPost,enqiryDelete,enquiryPut}