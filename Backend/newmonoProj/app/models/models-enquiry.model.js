import mongoose from "mongoose";

const userEnquirySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique:true,
  },
  message: {
    type: String,
    required: true,
  },
});

const enquiryModel = mongoose.model("enquiry", userEnquirySchema);

export default enquiryModel;


// module.exports=enquiryModel;.. common js
// const ObjectId = Schema.ObjectId;

// const BlogPost = new Schema({
//   author: ObjectId,
//   title: String,
//   body: String,
//   date: Date
// });