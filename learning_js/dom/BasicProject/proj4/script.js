// let elem1=document.querySelector("#elem1");
// let elemImage=document.querySelector("#elem1 img");



// elem1.addEventListener("mousemove",function(e) {
//     elemImage.style.left=e.x+"px";
//     elemImage.style.top=e.y+"px";
// });
// elem1.addEventListener("mouseenter",function(e) {
    // elemImage.style.opacity=1;
// });
// elem1.addEventListener("mouseleave",function(e) {
//     elemImage.style.opacity=0;
// });

let elem=document.querySelectorAll(".elem");
// let elemImage=document.querySelector(".elem img");

elem.forEach(function(val){
    val.addEventListener("mousemove",function(e) {
        val.childNodes[3].style.left=e.x+"px";
        // val.childNodes[3].style.top=e.y+"px";
    });

    val.addEventListener("mouseenter",function(e){
        val.childNodes[3].style.opacity=1;
    })
    val.addEventListener("mouseleave",function(e){
        val.childNodes[3].style.opacity=0;

    })
})