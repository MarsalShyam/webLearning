let div=document.querySelector("div");
console.log(div);

let classAttr=div.getAttribute("class");
console.log(classAttr);


let nameAttr=div.getAttribute("name");
console.log(nameAttr);

let box1=document.querySelector(".box1");
box1.style.backgroundColor="black";
box1.style.color="yellow";

//dom manipulation
// Insert Element
// Node.append(el)|prepend(el)|before(el)|after(el);

let newButton=document.createElement("button");
newButton.innerText="Click me";
console.log(newButton);

let box2=document.querySelector("#box2");
box2.append(newButton);
// box2.style.backgroundColor="green";
box2.before(newButton);

let heading=document.createElement("h1");
heading.innerHTML="<i>Hii , i am shyam</i>";

document.querySelector("body").prepend(heading);