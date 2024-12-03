console.log("hii");
const url="http://cat-fact.herokuapp.com/facts";

let para=document.querySelector("#para");
let GetFact=document.querySelector("#GetFact");

// let promise=fetch(url);
// console.log(promise);

const getFacts=async()=>{
    console.log("getting data.....");
    let response=await fetch(url);//Get Request
    console.log(response);//json format
    console.log(response.status);
    console.log("Success");
    
    let data=await response.json();
    // console.log(data);
    // console.log(data[0].text);
    para.innerText=data[0].text;
};

// getFacts();//running at run time

GetFact.addEventListener("click",getFacts);

// function getFacts(){
//     fetch(URL)
//     .then((response)=>{
//         return response.json();
//     })
//     .then((data)=>{
//         console.log(data);
//         factPara.innerText=data[0].text;
//     })
// }