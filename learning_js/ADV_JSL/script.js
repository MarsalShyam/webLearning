async function sleep(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(45);
        },2000);
    });
}

function sum(a,b,c){
    return a+b+c;
}
//IIfe(immediate invoke function)
( async function main(){
    let a=await sleep();
    console.log(a);
let b=await sleep();
console.log(b);
})();

//Destructing
(function main(){
    // let [x,y,...rest]=[1,2,3,4,5,6,7];
    // console.log(x,y,rest);

    let obj={
        a:1,
        b:2,
        c:3
    }
    let{a,b}=obj;
    console.log(a,b);

    //spread syntax
    let arr=[2,4,5];
    console.log(sum(arr[0],arr[1],arr[2]));
    console.log(sum(...arr));
})();

