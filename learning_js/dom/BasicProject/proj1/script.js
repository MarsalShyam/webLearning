let h1=document.querySelector("h5");

let btn=document.querySelector("#add");
var check=0;
// let remove=document.querySelector("#remove");
// let work=()=>{
//     h1.innerText="Friend";
//     add.innerText="Message";
//     add.style.backgroundColor="blue";
//     h1.style.color="green";
// }
// let work2=()=>{
//     h1.style.color="red";
//     h1.innerText="Stranger";
//     add.innerText="Add Friend";
// }
// setTimeout(); 
btn.addEventListener("click",function(){
    if(check==0){
        h1.innerText="Friend";
        add.innerText="Remove Friend";
        // add.style.backgroundColor="blue";
        h1.style.color="green";
        check=1;
    }else{
        h1.style.color="red";
        h1.innerText="Stranger";
        add.innerText="Add Friend";
        check=0;
        
    }
});
// remove.addEventListener("click",work2);


// if(h1.innerText=="Stranger"){
//     add.addEventListener("click",work);
// }else{
//     remove.removeEventListener("click",work2);
// }


// if(h1.innerText=="Friend"){
//    add.removeEventListener("click",work);
// }