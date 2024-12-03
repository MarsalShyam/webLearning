let historyElement = document.getElementById("his-value");
let outputElement = document.getElementById("output-value");

function getHistory() {
    return historyElement.innerText;
}
function printHistory(num) {
    historyElement.innerText = num;
}
function getOutput() {
    return outputElement.innerText;
}
function printOutput(num) {
    if (num == "") { outputElement.innerText = num; } else {
        outputElement.innerText = getFormattedNumber(num);
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
        // console.log("the clicked operator is "+this.id);
        if(this.id=="del"){
            console.log("del clicked!");
            printHistory("");
            printOutput("");
        }

        else if(this.id=="backspace"){
            let output=reverseNumberFormat(getOutput()).toString();
            if(output){
                output=output.substring(0,output.length-1);
                printOutput(output);
            }
        }

        else{
            // let output=getOutput();
            // let history=getHistory();
            if(output==""&&history!=""){
                if(isNaN(history[history.length-1])){
                    history=history.substring(0,history.length-1);
                }
            }

            if(output!="" || history!=""){
                output=output==""?output:reverseNumberFormat(output);
                history=history+output;
                if(this.id=="="){
                    let result=eval(history);
                    printOutput(result);
                    printHistory("");
                }
                else{
                    history=history+this.id;
                    printHistory(history);
                    printOutput("");
                }
            }
            
        }
    })
}

let number=document.getElementsByClassName("number");
for(let i=0;i<number.length;i++){
    number[i].addEventListener("click",function(){
        let output=reverseNumberFormat(getOutput());
        console.log("the clicked number is "+this.id);
        if(output!=NaN){
            console.log("clic out");
            output=output+this.id;
            printOutput(output);
        }
        
    });
}