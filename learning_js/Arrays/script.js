console.log("Array learning");
let ar=["ram","shyam",2,"ganesh",true];
console.log(ar);

// multiper item with in same name 
console.log(ar[0]);
let arr=[1,2,3,4,5,6];

arr.splice(2,0,101);

let companies=["Bloomberg","Microsoft","Uber","Google","IBM","Nerflix"];
console.log(companies);
// companies=companies.shift();
// console.log(companies);
delete companies[0];
console.log(companies);

// change the oniginal array and return the new array length

companies.shift();
console.log(companies);

companies.splice(2,1,"Ola");

console.log(companies);
companies.push("Amazon");
console.log(companies);