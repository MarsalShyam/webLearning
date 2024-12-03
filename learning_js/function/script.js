console.log("Welcome back");

function myFunction(){
    console.log("i am learning js");
}

function sum(a,b){
    let c=a+b;
    console.log(c);
}

function mul(a,b){
    return a*b;
    console.log(a);
}
let a=mul(2,5);
console.log(a);

//Arrow sum

const arrowdiv=(a,b)=>{
    console.log(a/b);
}
arrowdiv(4,2);
let count=0;
const vowelPrint=(str)=>{
    for(i of str){
        if(i===('a' || 'e' || 'i'||'o'||'u')){
            console.log(`${i} \n ramesh`);
            count++;
            // console.log(`ram`);
        }
    
    }
    console.log(count);
}
vowelPrint("shyam");
vowelPrint("hello");

// we can pass function in for each 
let ar=[1,2,3,4,5];
ar.forEach((i)=>{console.log(i);});
ar.forEach((i,idx)=>{console.log(i*i,idx);});
ar.forEach((i,idx,array)=>{console.log(i,idx,array);});

//map functin 
let nums=[23,43,23,88];

// let squareCal=(val)=>{console.log(val);};
let squareCal=(val)=>{return val;};
let newnum=nums.map(squareCal);
console.log(newnum);

//filter function
let filArray=[1,2,3,4,5,543,23,234];
// let evenAr=filArray.filter((val)=>{
//     return val%2==0;
// });
let evenAr=filArray.filter((val)=>{
    return val<5;
});
console.log(evenAr);

//reduce method
const output=filArray.reduce((prev,curr)=>{
    return prev>curr?prev:curr;
})
console.log(output);

let marks=[97,64,32,49,99,97,84];
let topper=marks.filter((val)=>{
    return val>90;
});
console.log(topper);