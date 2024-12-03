var historyElement=document.getElementById("history-value");
var outputElement=document.getElementById("output-value");

let tempHistory="";
function getHistory(){
    // return document.getElementById("history-value").innerText;
    return historyElement.innerText;
}
// alert(getHistory());
function printHistory(num){
    historyElement.innerText=num;
}
function getOutput(){
    return outputElement.innerText;
}
function printOutput(num){
    if(num==""){
        outputElement.innerText=num;
    }else{
        outputElement.innerText=getFormattedNumber(num);
    }
   
}
function getFormattedNumber(num){
    if(num=="-"){
        return "";
    }
    let n=Number(num);
    let value=n.toLocaleString("en");
    return value;
}
function reverseNumberFormat(num){
    return Number(num.replace(/,/g,''));
}

let operator=document.getElementsByClassName("operator"); 
for(let i=0;i<operator.length;i++){
    operator[i].addEventListener("click",function(){
        let output=getOutput();
        let history=getHistory();

        if(this.id=="clear"){
            printHistory("");
            printOutput("");
            tempHistory="";
        }

        else if(this.id=="backspace"){
            let output=reverseNumberFormat(getOutput()).toString();
            if(output){
                output=output.substring(0,output.length-1);
                printOutput(output);
            }
        }
        else{
            
            if(output=="" && history!=""){
                if(isNaN(history[history.length-1])){
                    history=history.substring(0,history.length-1);
                }
            }

            if(output!=="" || history!=""){
                output=output==""? output:reverseNumberFormat(output);
                // history=history+output;
                tempHistory=tempHistory+output;
                if(this.id=="="){
                    // let result=eval(history);
                    let result=eval(tempHistory);
                    
                    printOutput(result);
                    // printHistory("");
                    printHistory(tempHistory);
                    tempHistory="";
                }
                else{
                    // history=history+this.id;
                    // printHistory(history);
                    tempHistory=tempHistory+this.id;
                    printOutput("");
                    printHistory(tempHistory);
                    // printOutput(output);
                }
            }
        }

    });
}



let number=document.getElementsByClassName("number"); 
for(let i=0;i<number.length;i++){
    number[i].addEventListener("click",function(){
        let output=reverseNumberFormat(getOutput());
        if(output!=NaN){
            //if output is a number
            output=output+this.id;
            printOutput(output);
        }
    })
}