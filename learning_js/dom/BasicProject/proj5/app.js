// let arr=[1,2,3,5];
let arr=[
    {dp:"dhiraj.jpg",story:"dhiraj.jpg"},
    {dp:"surya.jpg",story:"surya.jpg"},
    {dp:"tanuj.jpg",story:"tanuj.jpg"},
    {dp:"dhiraj.jpg",story:"dhiraj.jpg"},
    {dp:"tanuj.jpg",story:"tanuj.jpg"},
    {dp:"surya.jpg",story:"surya.jpg"},
]
let storys=document.querySelector("#storys");
let fullscreen=document.querySelector("#full-screen");
let clutter="";
arr.forEach(function(elem,idx){
    // console.log(elem);
    // console.log(elem,idx);
    clutter+=`<div class="story">
                <img id="${idx}" src="${elem.dp}" alt="">
            </div>`
})
// console.log(clutter);
storys.innerHTML=clutter;
storys.addEventListener("click",function(data){
    fullscreen.style.display="block";
    fullscreen.style.backgroundImage=`url(${arr[data.target.id].story})`;

    setTimeout(function(){
        fullscreen.style.display="none";
    },3000);

})