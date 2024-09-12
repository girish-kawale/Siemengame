let gameSeq=[];
let userSeq=[];
let highl=0;
let btns=["yellow","red","green","purple",]

let started = false;
let level=0;
let h2=document.querySelector("h2");
console.log("welcome sir");
document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game is started");
        started=true;
        levelUp();
    }
    
});

function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}
function levelUp(){
    userSeq=[];
    level++;
    if(level>highl){
        highl=level;
    }
    h2.innerText=`Level ${level}`;
    let randInd=Math.floor(Math.random()*3);
    let randColor=btns[randInd];
    let randombutton=document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameflash(randombutton);
}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}
function checkAns(idx){


if(userSeq[idx]===gameSeq[idx]){
if(userSeq.length == gameSeq.length){
    setTimeout(levelUp,1000);
}
}else{
  
    h2.innerHTML=` Game over ! your score was <b>${level} </b>  highest level ${highl}<br>   Press any key to start`;
    reset();
}
}
function btnPress(){
let btn=this;
userflash(btn);
userColor = btn.getAttribute("id");
userSeq.push(userColor);
checkAns(userSeq.length-1);
}

let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnPress);
}
function reset(){
started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}