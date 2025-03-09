let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newGame=document.querySelector("#newGame");
let player=document.querySelector(".msg-container")
let turn0= true;
let count=0;
let countO=0;
let crown1=document.querySelector(".crown1");
let crown2=document.querySelector(".crown2");
let player1=document.querySelector("#player1");
let countX=0;
let player2=document.querySelector("#player2");
let mode=document.querySelector("#heading");
const winPattern=[
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

heading.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

let winbox=[];

const colorBoxes=()=>{
    for(let win of winbox)
    {
        win.classList.add("glow");
    }
}

const originalBoxes=()=>{
    for(let win of boxes)
    {
        win.classList.remove("glow");
    }
}

const checkWinner = () => {
    for (let pattern of winPattern) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        winbox = [boxes[pattern[0]], boxes[pattern[1]], boxes[pattern[2]]];

        if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
            if (pos1 === pos2 && pos2 === pos3) {
                showWinner(pos1);
                colorBoxes();
                disableboxes();
                return true;
            }
        }
    }
    return false;
};

const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const showWinner=(winner)=>{
    if(winner==="O")
        {
            countO+=1;
            crown1.classList.remove("crown1");
            player1.innerText=`${countO}`;
        }
        else{
            countX+=1;
            crown2.classList.remove("crown2");
            player2.innerText=`${countX}`;
        }
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0) {
            box.innerHTML = "O";
            box.classList.add("O");
            box.classList.remove("X");
            turn0 = false;
        } else {
            box.innerHTML = "X";
            box.classList.add("X");
            box.classList.remove("O");
            turn0 = true;
        }
        
        box.disabled = true;
        count += 1;

        let isWinner = checkWinner();

        if (!isWinner && count === 9) {
            checkDraw();
        }
    });
});

const checkDraw=()=>{
    player.innerText=`Match Draw`
    player.classList.remove("hide");
    disableboxes();
    count=0;
}

const resetGame=()=>{
    turn0=true;
    enableboxes();
    count=0;
    countO=0;
    countX=0;
    player1.innerText="";
    player2.innerText="";
    originalBoxes();
    crown1.classList.add("crown1");
    crown2.classList.add("crown2");
    player.classList.add("hide");
}

const newgame=()=>{
    turn0=true;
    enableboxes();
    count=0;
    originalBoxes();
    crown1.classList.add("crown1");
    crown2.classList.add("crown2");
    player.classList.add("hide");
}

reset.addEventListener("click",resetGame);
newGame.addEventListener("click",newgame);