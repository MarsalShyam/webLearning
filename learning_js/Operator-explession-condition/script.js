console.log("check");
//Operators in javaScript

//Arithmetic operations in javaScript
// +,-,*,/,%,**=>5^2,++,--

//Assignment operators in javaScript
//=,+=,-=,*=,/=,%=,**=

//Comparison operators in javaScript
//==,!=,===,!==,>,<,>=,<=,?

//logical opertors
// &&,||,!

//Condition Stateemets
let mode="dark-mode";
let color;
if(mode=="dark-mode"){
    color="Black";
}
else{
    color="white";
}
console.log(color);
let n=5;
if(n%2==0){
    console.log("the "+ n+" number is even");
}else{
    console.log("the ",n, " number is odd");
}

// tirnany operators
let age=34;
result=age>18?"adult":"not adult";
console.log(result);

//switch statement

let ag=prompt("Emter your age");
alert(ag>18?"adult":"notadult");