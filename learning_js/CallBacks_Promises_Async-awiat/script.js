console.log("hii , i am shyam");


function hello(){
    console.log("hello");
}
setTimeout(hello,2000); //timeout 2s=>2000

setTimeout(()=>{
    console.log("hii");
},3000);


//CallBack function

calculator(2,3,(a,b)=>{
    console.log(a+b);
});

function sum(a,b){
    console.log(a+b);
}

function calculator(a,b,sumCallback){
    sumCallback(a,b);
}
calculator(1,2,sum);

//Pyramid of Dom (cal(lback function)

// function getData(dataId,getNextData){
//     setTimeout(()=>{
//         console.log("data",dataId);
//         if(getNextData){
//             getNextData();
//         }
//     },2000);
// }

// getData(1,()=>{
//     getData(2,()=>{
//         getData(3,()=>{
//             getData(4,()=>{
//                 getData(5,()=>{
//                     getData(6,()=>{
//                         getData(7,()=>{
//                             getData(8,()=>{
//                                 getData(9,()=>{
//                                     getData(10,()=>{
//                                         getData(11,()=>{
//                                             getData(12,()=>{
//                                                 getData(13);
//                                             })
//                                         })
//                                     })
//                                 })
//                             })
//                         })
//                     })
//                 });
//             })
//         });
//     });
// })

//promises 

let promise=new Promise((resolve,reject)=>{
    console.log("i am a promise)");
    // resolve("success");
    // reject("error");
})

const getPromise1=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("i am a promise1");
        resolve("success");
        // reject("error");
        },4000)
        
        
    });
}
const getPromise2=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("i am a promise2");
        resolve("success");
        // reject("error");
        },4000)
        
        
    });
}


console.log("fetching promise1......");
// let promise1=getPromise1();
// promise1.then((res)=>{
//     console.log("Promises1 is fullfiled",res);
//     console.log("fetching promise2....");
//     let promise2=getPromise2();
//     promise2.then((res)=>{
//         console.log("Promises2 is fullfiled",res);
//     })

// });

getPromise1().then((res)=>{
    console.log("fetching promise2....");
    getPromise2().then((res)=>{});
})

// promise1.catch((err)=>{
//     console.log("promises is not fullfiled",err)
// });


function getData(dataId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data t",dataId);
        },3000);
        resolve("success");
    });
};
// let p1=getData(1);
// p1.then((res)=>{
//     console.log("Getting Data with promises is ",res);
//     getData(2).then((res)=>{
//         console.log("2",res);
//     });
// })


// promise chain
getData(1)
.then((res)=>{
    return getData(2);
})
.then((res)=>{
    return getData(3);
})
.then((res)=>{
    return getData(4);
})
.then((res)=>{
    return getData(5);
})
.then((res)=>{
    console.log("success");
});


// Async - Await

async function getAllData(){
    console.log("getting data 11..");
    await getData(11);
    console.log("getting data 22..");
    await getData(22);
    console.log("getting data 33..");
    await getData(33);
    console.log("getting data 44..");
    await getData(44);
}
getAllData();                                                                                                                                                              