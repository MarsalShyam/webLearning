console.log("hii");

let Rock=document.querySelector("#img1");
let Paper=document.querySelector("#img2");
let  Scissors=document.querySelector("#img3");


// let rockResult=()=>{
//     result.innerText="You Choose a Rock !";
//     result.style.backgroundColor="violet";
// };
// Rock.addEventListener("click",rockResult);
// let PaperResult=()=>{
//     result.innerText="You Choose a Paper !";
//     result.style.backgroundColor="rgb(120,26,208)";
// };
// Paper.addEventListener("click",PaperResult);
// let ScissorsResult=()=>{
//     result.innerText="You Choose a Scissor !";
//     result.style.backgroundColor="rgb(12,139,189)";
// };
// Scissors.addEventListener("click",ScissorsResult);

//logic of game

let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".things");
let result=document.querySelector("#result");

const user_scorepara=document.querySelector("#user-score");
const comp_scorepara=document.querySelector("#comp-score");

const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];

}
const drawGame=()=>{
    result.innerText=`Game was Draw. Play Again.`;
        result.style.backgroundColor="black";
};

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        user_scorepara.innerText=userScore;
        console.log("your win");
        result.innerText=`You Win! ${userChoice} beats ${compChoice}`;
        result.style.backgroundColor="green";
        
    }else{
        compScore++;
        comp_scorepara.innerText=compScore;
        console.log("you lose");
        result.innerText=`You Lost! ${compChoice} beats ${userChoice}`;
        result.style.backgroundColor="red";
    }
};

const playGame=(userChoice)=>{
    console.log("User Choice= ",userChoice);
    //Generate computer choice
    const compChoice=genCompChoice();
    console.log("Computer Choice= ",compChoice);

    if(userChoice=== compChoice){
        // Draw Game
        drawGame();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            //Scissors,paper
            userWin=compChoice==="paper"?false : true;
        }else if(userChoice==="paper"){
            userWin=compChoice==="scissors"?false:true;
        }else{
            //rock,paper
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);

    }

};

choices.forEach((choice)=>{
   choice.addEventListener("click",()=>{
    const userChoice=choice.getAttribute("id");
    playGame(userChoice);
   });
})
