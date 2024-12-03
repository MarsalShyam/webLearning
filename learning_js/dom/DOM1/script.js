console.log("Starting to learn DOM"); 
document.body.style.background="green";

let id_1=document.getElementById("ram");
id_1.style.color="blue";

let class1=document.getElementsByClassName("paragraph");
console.log(class1);

let elements=document.querySelector("p");
console.dir(elements);

let div=document.querySelector("div");
console.dir(div);
div.innerHTML="<div> inner div </div>";
console.dir(div);

let heading=document.querySelector("h1");
heading.innerText="hii, i am shyam";
heading.innerHTML="<i>New Heading</i>";
console.log(heading);

let box1=document.querySelector(".box1");
box1.innerText="ram is good boy";
box1.style.height="400px";
box1.style.width="400px";
box1.style.border="2px solid red";
box1.insertAdjacentHTML('afterbegin','<p>This is a paragraph</P>');
box1.insertAdjacentHTML('beforeend','<p>This is a paragraph</P>');