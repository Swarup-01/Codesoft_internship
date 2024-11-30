let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")
const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");

const genCompChoice = ()=>{
const options = ["rock","paper","scissors"];
const randIdx = Math.floor(Math.random()*3);
return options[randIdx];
};

const playGame = (userChoice)=>{
    console.log("user choice is: ",userChoice);
    const compChoice = genCompChoice();
    console.log("computer choice is: ",compChoice);
    
    if (userChoice==compChoice) {
        console.log("It's a draw");
        msg.innerHTML = "Game was Draw.Play again."
        msg.style.backgroundColor = "yellow";
         msg.style.color = "black";
    }
    else if(userChoice=="rock" & compChoice=="paper" || userChoice=="scissors" & compChoice=="rock" || userChoice=="paper" & compChoice=="scissors"){
       compscore++;
       compScorepara.innerHTML = compscore;
        console.log("You Lose");
        msg.innerHTML = `You Lose. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
        msg.style.color = "aliceblue";
    }
    else{
        userscore++;
        userScorepara.innerHTML = userscore;
        console.log("You Wins");
        msg.innerHTML = `You Wins! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        msg.style.color = "aliceblue";
    }
    };


choices.forEach((choice)=>{
choice.addEventListener("click",()=>{
    const userChoice = choice.getAttribute("id")
    //console.log("choice was clicked","id");
    playGame(userChoice);
    
});
});