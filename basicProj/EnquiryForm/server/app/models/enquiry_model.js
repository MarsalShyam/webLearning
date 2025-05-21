import mongoose from "mongoose";

let schema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    phone:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true,
    }
});
let enquiryModel=mongoose.model("enquiry",schema);
// module.exports=enquiryModel;
export default enquiryModel;