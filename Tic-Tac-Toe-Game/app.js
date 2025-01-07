let box = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let msgBox = document.querySelector("#msgw");
let msgBoxDraw =document.querySelector("#msgn");
let newGameBtn = document.querySelector("#newgame");


let turnO = true; // player x , player O 

const winpatterns =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [6,4,2]
];

const resetGame = () => {
    turnO = true ;
    enableBox();
    msgBox.classList.add("hidden");
    msgBoxDraw.classList.add("hidden");
}

box.forEach((box) => {
    box.addEventListener("click",() =>{
        console.log("x")
        if(turnO){
            box.innerText = "O";
            turnO = false ;
        }else{
            box.innerText = "X";
            turnO = true ;
        }
        box.disabled = true;

        checkWinner();
    });
});

const disabledBox = () => {
    for(let boxs of box){
        boxs.disabled = true;
    }
}

const enableBox = () => {
    for(let boxs of box){
        boxs.disabled = false;
        boxs.innerText = "";
    }
}

const showWinner = (winner) => {
    msgBox.innerText = `Congratulations! ${winner} is the winner`;
    msgBox.classList.remove("hidden");
    disabledBox();
}
const draw = () =>{
    msgBoxDraw.classList.remove("hidden");
}
const checkWinner = () => {
    for(pattern of winpatterns) {
        let pos1Val = box[pattern[0]].innerText;
        let pos2Val = box[pattern[1]].innerText;
        let pos3Val = box[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("winner",pos1Val);
                showWinner(`Player-"${pos1Val}"`);
            }
        }
    };
};


resetBtn.addEventListener("click",resetGame);
newGameBtn.addEventListener("click",resetGame);