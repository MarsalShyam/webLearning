
use("CrudDb");
// console.log(db);
db.createCollection("Courses");
//Creating collection
db.Courses.insertOne({
    name:"java in 1 short",
    price:2000,
    assigments:10,
    project:20
})

db.Courses.insertMany([
    {
      "name": "Java in 1 Short",
      "price": 2000,
      "assignments": 10,
      "projects": 10
    },
    {
      "name": "Mastering Python",
      "price": 2500,
      "assignments": 12,
      "projects": 10
    },
    {
      "name": "JavaScript from Zero to Hero",
      "price": 1800,
      "assignments": 8,
      "projects": 10
    },
    {
      "name": "Complete C++ Bootcamp",
      "price": 2200,
      "assignments": 14,
      "projects": 10
    },
    {
      "name": "MongoDB Essentials",
      "price": 2100,
      "assignments": 5,
      "projects": 10
    }
  ])

  //Read
  let a =db.Courses.find({"projects":10})
  console.log(a);
console.log("nxt");
  let b=db.Courses.findOne({"projects":10});
  console.log(b);

//Update
db.Courses.updateOne({"name":"MongoDB Essentials"},{$set:{name:"MongoDB In One short"}})

let c=db.Courses.findOne({"name":"MongoDB In One short"})
console.log(c);

db.Courses.updateMany({projects:10},{$set:{projects:20}})

//Delete
db.Courses.deleteOne({name:"Complete C++ Bootcamp"});
db.Courses.deleteMany({name:"Complete C++ Bootcamp"})
console.log("Comparison Operators");
//Comparison Operators
let minPrice=db.Courses.find({price:{$lte:2000}})
console.log(minPrice);

//operator with numeric
// $eq
// $gt
// $gte
// $in
// $lt
// $lte
// $ne
// $nin