class Animal{
    Print(){
        console.log("It is the Animal");
    }
}
class cat extends Animal{}

let obj=new cat();

class person{
    constructor(){
        this.species='homo Sapiens';
    }
    eat(){
        console.log("eat");
    }
    sleep(){
        console.log("sleep");
    }
    work(){
        console.log("do nothing");
    }
}

class Engineer extends person{


    constructor(branch){
        super();//to invoke parent class constructor
        this.branchName=branch;
    }
    work(){
        console.log("solve problems, build something");
    }
}

let shyamobj=new person();
let ramobj=new Engineer();

//supuer keyboard
let ganeshobj=new Engineer("computer Sceience");

