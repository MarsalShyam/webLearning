import mongoose from 'mongoose';

const UsersSchema=new mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String,required:true},
    age:{type:Number,min:18,max:100},
    dataJoined:{type:Date,default:Date.now},
});

const postSchema =new mongoose.Schema({
    title:{type:String, required:true},
    content:{type:String,required:true},
    author:{type:mongoose.Schema.Types.ObjectId,ref:'User',required:true},
    tags:[String],
    published:{ type: Date, default: Date.now },
})

export const User=mongoose.model("User",UsersSchema);

//in the email unique:true, is take only unique email

export const Post=mongoose.model("Post",postSchema);