// let button=document.createElement("button");
// button.innerText="Click Me";
// button.style.color="White";
// button.style.background="red";
let body=document.querySelector("body");
// body.append(button);

// let button=document.querySelector("button");
// button.style.color="red";
// button.onClick=function(){
//     alert("Clicked from js");
// }

let btn1=document.getElementById("btn1");
// btn1.onclick=()=>{
//     console.log("Clicked");
// }
btn1.addEventListener("click",()=>{
    console.log("Button 1 was clicked -handler1");
})
const handler3=()=>{
    console.log("Button 1 was clicked -handler3");
};
btn1.addEventListener("click",()=>{
    console.log("Button 1 was clicked -handler2");
})
btn1.addEventListener("click",handler3)
btn1.addEventListener("click",()=>{
    console.log("Button 1 was clicked -handler4");
})

btn1.removeEventListener("click",handler3);

let img=document.getElementsByClassName("img");
// img.addEventListener("click",()=>{
//     console.log("Switched Click");
// })
img.onclick=()=>{
    console.log("Switched Click");
}

let btn2=document.getElementById("btn2");
btn2.style.backgroundColor="red";
let currMode="light";
let mode=()=>{
    if(currMode==="light"){
        currMode="dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }else{
        currMode="light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    
    console.log(currMode);
}
btn2.addEventListener("click",mode);
    
