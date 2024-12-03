console.log("Ram");

const st={
    calckMarks(){
        console.log("your marks is good");
    },
}

const student={
    fullName:"Shyam Kumar",
    marks:88,
    printMarks:function(){
        console.log("marks =",this.marks);
    },
};

student.__proto__=st;//adding the ptorotype

//class and objects


class car{
    constructor(model,milage){
        console.log("Creating new object");
        this.modelName=model;
        console.log("modelName =",this.modelName);
        this.milage=milage;
        console.log("milage =",this.milage);
    }
    start(){
        console.log("Start");
    }
    stop(){
        console.log("Stop");
    }
    setBrand(brand){
        this.brandName=brand;
    }
    setColor(color){
        this.colorName=color;
    }
}


let fortuner=new car("1996Old",30);
fortuner.setBrand("Fortuner");
fortuner.setColor("white");
let lexus=new car();



