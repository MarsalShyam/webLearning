const path=require("path");
// console.log(path);

let myPath="D:\\programming\\ReviceHTML_CSS_JS\\LCode\\Backend\\vid87_fs_path_module\\server.js";

console.log(path.extname(myPath));//extension name
console.log(path.dirname(myPath));
console.log(path.basename(myPath));
console.log(path.join('/foo','bar','baz/asdf'));