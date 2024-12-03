console.log("here we learn about loops and String");

// let n=prompt("Enter the number your want?");

// for(let i=1;i<=n;i++){
//     console.log(i);
// }
                                                                                                                                                                                              

// for in loop , for of loop
let str="shyamumar";
for(let i of str){
    console.log(i);
}

let student={
    name:"Shyam kumar",
    age:20,
    sem:3,
};
for(let i in student){
    console.log("key"+i+" values"+ student[i]);
}

//doWhileLoop
let i=1;
do{
    console.log("i=",i);
    i++;
}while(i<=5);
str="ramesh";

for(i of str){
    console.log(i);
}
//crete a game whtere you statrt with ay randomgame number. Ask theuser to keep
// let gameNum=26;
// let userNum=prompt("Enter the guess Numbare");
// while(userNum != gameNum){
//     userNum = prompt("Your are guessing wrong numbe . Let's try again! ")
// }
// console.log("Congratulations,you entered the right number");

let nam="ganesh";
console.log(nam.length);

// Template Literals in Js  =>it is string
let sentence=`This is a Template literal`;
console.log(sentence);
let obj1={
    item:"pen",
    price:10,
}
console.log("the cost of ", obj1.item,"is ",obj1.price," ruppess");

let output=`the cost of ${obj1.item} is ${obj1.price} ruppess `;
let about=`This is a template ${obj1.item} is usert for writitng`;
console.log(about);
console.log(output);

let usName=prompt("Enter the name ");
console.log(`your username is @${usName}${usName.length}`);