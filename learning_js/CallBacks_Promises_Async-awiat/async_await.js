console.log("Ram");
function api(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Weather data");
            resolve(200);
        },2000)
    });
}
async function getWeatherData(){
    await api();//1st call to getWeatherData
    await api();//2nd call to getWeatherData
}
getWeatherData();
