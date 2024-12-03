import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
    title: String, // String is shorthand for {type: String}
    author:{type:String,required:true,default:"Ram"},
    // author: String,
    // body: String,
    // comments: [{ body: String, date: Date }],
    // date: { type: Date, default: Date.now },
    // hidden: Boolean,
    // meta: {
    //   votes: Number,
    //   favs: Number
    // }
    desc:String,
    isDone:Boolean,
    days:Number,
  });



  // Export the model so other files can use it (It rapped the schema as a module)
  // export const Todo=mongoose.model('Todo',TodoSchema);
  export  const Todo=mongoose.model('Todo',TodoSchema);