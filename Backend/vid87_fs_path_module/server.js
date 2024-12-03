const fs=require("fs");

// console.log(fs);
fs.writeFile("shyam2.txt","shyam is a good boy2",()=>{
    console.log("done");
    fs.readFile("shyam2.txt",(error,data)=>{
        console.log(error,data.toString());
    })
})

fs.appendFile("shyam2.txt","new shyam",(e,d)=>{
    console.log(d);
})
console.log("starting");
fs.writeFileSync("shyam.txt","shyam is a good boy");
console.log("Ending");
