let gameSequence=[];
let userSequence=[];
let started=false;
let level=0;
let h2=document.querySelector("h2");
let body=document.querySelector("body");
let f;
document.addEventListener("keypress",function(){
    if(started==false){
       console.log("Game has started");
       started=true;
       levelUp();
    }
});
let btns=document.querySelectorAll("button");
    for(let btn of btns){
        btn.addEventListener("click",function(){
            btn.classList.add("flash");
            playSound();
            setTimeout(function(){
                btn.classList.remove("flash");
            },300);
            userSequence.push(this.id);
            answercheck();
        });
    }
function levelUp(){
    setTimeout(function(){
    userSequence=[];
    level++;
    h2.innerText=`Level ${level}`;
    let btnno=Math.floor(Math.random()*4)+1;
    //Sequence addition
    gameSequence.push(`box${btnno}`);
    let button=document.querySelector(`#box${btnno}`);
    btnFlash(button);},1000);
}
function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },300);
}
function answercheck(){
    let index = userSequence.length - 1;
    if(userSequence[index] !== gameSequence[index]){
        wrongSound();
        body.classList.add("wrong");
        setTimeout(function(){
            body.classList.remove("wrong");
        },300);
        restartGame();
    }   
    else if(userSequence.length === gameSequence.length){
        setTimeout(function(){
            userSequence = [];
            levelUp();
        },1000);
    }
}
function restartGame(){
    h2.innerText="Game over please try again";
    userSequence=[];
    gameSequence=[];
    level=0;
    started=false;
}
function playSound(){
    let sound=new Audio("sound1.mp3");
    sound.currentTime=0;
    sound.play();
}
function wrongSound(){
    let sound=new Audio("wrong.mp3");
    sound.currentTime=0;
    sound.play();
}