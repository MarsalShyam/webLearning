import fs from "fs/promises";
import fsn from "fs";
import path from "path";

const basepath="d:\\programming\\ReviceHTML_CSS_JS\\LCode\\Backend\\vid91_exercise2";

let files= await fs.readdir(basepath);
// console.log(files);

// let extension=[];

for(const item of files){
    console.log("runnin for ",item);//it also run for folder
    let ext=item.split(".")[item.split(".").length-1];
    // console.log(ext);

    if(ext != "js" && ext != "json" && item.split(".").length> 1){

        if(fsn.existsSync(path.join(basepath,ext)) ){
            //Move the files to this directory if its not a js and json file
            fs.rename(path.join(basepath,item),path.join(basepath,ext,item));
        }else{
            fs.mkdir(ext);
        }

    }
    
    // console.log(item);
}