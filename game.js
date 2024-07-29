let userscore=0;
let compscore=0;
const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");

 const choices=document.querySelectorAll(".choice");
 const msg=document.querySelector("#msg");
 
 const gencompchoice=()=>{
const options=["rock","paper","scissors"];
const randidx=Math.floor(Math.random()*3);
return options[randidx];

 }


 const drawgame=()=>{

    console.log("game was draw...")
    msg.innerText="Game Was Draw.. Play Again";
    msg.style.backgroundColor="lightblue";
    };

const showwinner=(userwin)=>{
if(userwin){
userscore++;
userscorepara.innerText=userscore;
    console.log("you win..");
    msg.innerText="you win..";
    msg.style.backgroundColor="green";
}

else{

    compscore++;
    compscorepara.innerText=compscore;
    console.log("You Loose...");
    msg.innerText="You Loose...";
    msg.style.backgroundColor="red";
}
}


const playgame=(userchoice)=>{
console.log("userchoice=",userchoice);
//generate computer choice
const compchoice=gencompchoice();
console.log("computer choice=",compchoice)
if(userchoice==compchoice){
//draw game
drawgame();

}
else{
let userwin=true;
if(userchoice==="rock"){

userwin=compchoice==="paper"?false:true;

}
else if(userchoice==="paper"){

userwin=compchoice==="scissors"? false :true;
}
else{
compchoice=="rock"?false:true;

}

showwinner(userwin);

}


};

 choices.forEach((choice)=> {
 choice.addEventListener("click",()=>{
 const userchoice=choice.getAttribute("id");
 playgame(userchoice);
    });
    
 });