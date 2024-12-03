console.log("hii bro, i am shyam");
// alert("hii");
console.log("I love js");
let a=4;
let b=6;
let c=a+b;
console.log(c);
let age=23;
if(age>=13){
    console.log("you are child");
}
istrue=true;
console.log(istrue);
//seven premitive 

// * Null *Number *String *Symbol *Undefined *Boolean *BigInt 

const student={
    fullName: "Shyam kumar",
    age:15,
    isPass:true,
};
console.log(student.fullName);
console.log(student["age"]);
student["age"]=student["age"]+1;
console.log(student["age"]);

//create an const object "product" to stre information of the one product on amazon

const product={
    Name:"Ball-Pen",
    color:"black",
    rating:4,
    isdeal:true,
    price:45,
    offer:"25%"
};
console.log(product);
console.log(typeof product);

//Cretate an const object called "profile" to store information on the linkidin profile

const profile={
    userName:"Shyamkumar123",
    isFollow:true,
    isMessage:true,
    posts:185,
    followers:"534K",
    following:4,
    name:"Shyam kumar",
    extra_link:true,
    about:" Marsal.Ltd | Ex-Microsoft, DRDO",
    intrest:"To earning money by using my skill is my first priority",
};
console.log(profile);
console.log(profile.userName);
profile["userName"]="ramsingh12";
console.log(profile.userName);


