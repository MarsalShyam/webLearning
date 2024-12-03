// You are creating a website for your college. Create a class Userwith 2 properties, name & ElementInternals. It also has a method called viewData() that allows user to view website Data 

class college{
    constructor(name){
        this.CollegeName=name;
    }

}
class User extends college{
    function(name){
        this.name=name;
    }
    function(email){
        this.email=email;
    }
}
let userobj1=new User("Anna University");
userobj1.name="Shyam kumar";
userobj1.email="shyam@gmail.com";

viewData=(obj)=>{
    console.log(obj);
}
viewData(userobj1);

//Create a new class called Admin which inherits from User . Add a new method called editData to admin tht allows it to edit website data.
 
class Admin extends User{
    editData(obj,newname,newEmail){
        obj.name=newname;
        obj.email=newEmail;
        viewData(obj);
    }
    
}

let adminobj=new Admin();
adminobj.editData(userobj1,"ram","ram@gmial.lcom");
adminobj.editData(userobj1,"ganesh","ganesh@gmail.com");
