const turnA = "❌"
const turnB = "❤️"
const gameOverBoad = "rgb(255 159 159 / 51%)"

const player1Name = document.getElementById("player1Name");
const player2Name = document.getElementById("player1Name");
const player1Icon = document.getElementById("player1Icon");
const player2Icon = document.getElementById("player2Icon");

const currentTurn = document.getElementById("current-turn");

const board = document.querySelectorAll('.board')
const gameOverEl = document.getElementById("gameOver");
const resetWarning = document.getElementById("resetBoard");
const player = document.getElementById("player");
const popTextCongo = document.getElementById("pop-text-congo");

const tie = new Audio('./assets/tie.mp3')
const playerClicked = new Audio('./assets/playerClicked.mp3')
const error = new Audio('./assets/error.mp3')
const playerWin = new Audio('./assets/playerWin.mp3')

let isGameOver = false;
let count = 0;
currentTurn.innerText = turnA

const GameData = localStorage.getItem("gameData") || [];

player1Icon.addEventListener("click",()=>{

})
player2Icon.addEventListener("click",()=>{
    
})


for (let i = 0; i < 9; i++) {
    board[i].addEventListener('click', () => { turn(i) })
}

const turn = (i) => {
    if (isGameOver == true) {
        error.play();
    }
    else if (board[i].innerText == "") {
        playerClicked.play();
        if (count % 2 == 0){
            board[i].innerText = turnA;
            currentTurn.innerText = turnB
        }
        else{
            board[i].innerText = turnB;
            currentTurn.innerText = turnA
        }
        count++;
        if (count >= 5) {
            xWinValue = checkWin(turnA)
            oWinValue = checkWin(turnB)
            if (xWinValue != -1) {
                player.innerText = xWinValue;
                gameOver();
                playerWin.play();
            }
            else if (oWinValue != -1) {
                gameOver();
                playerWin.play();
            }
            else if (count == 9) {
                tie.play()
                popTextCongo.innerText = "Tie"
                gameOver();
            }
        }
    }
}

const gameOver = () => {

    gameOverEl.style.display = "flex";
    isGameOver = true;
    setTimeout(()=>{closePopUP();replay();},5000);
}

const changeBoardColor = (i, j, k) => {
    board[i].style.backgroundColor = gameOverBoad;
    board[j].style.backgroundColor = gameOverBoad;
    board[k].style.backgroundColor = gameOverBoad;
}


const checkWin = (e) => {
    // Horizontal
    if (board[0].innerText == board[1].innerText && board[1].innerText == board[2].innerText && board[2].innerText == e) {
        changeBoardColor(0, 1, 2);
        return e;
    }

    else if (board[3].innerText == board[4].innerText && board[4].innerText == board[5].innerText && board[5].innerText == e) {
        changeBoardColor(3, 4, 5);
        return e;
    }

    else if (board[6].innerText == board[7].innerText && board[7].innerText == board[8].innerText && board[8].innerText == e) {
        changeBoardColor(6, 7, 8);
        return e;
    }

    // Vertical
    else if (board[0].innerText == board[3].innerText && board[3].innerText == board[6].innerText && board[6].innerText == e) {
        changeBoardColor(0, 3, 6);
        return e;
    }

    else if (board[1].innerText == board[4].innerText && board[4].innerText == board[7].innerText && board[7].innerText == e) {
        changeBoardColor(1, 4, 7);
        return e;
    }

    else if (board[2].innerText == board[5].innerText && board[5].innerText == board[8].innerText && board[8].innerText == e) {
        changeBoardColor(2,5,8);
        return e;
    }

    // Diagonally
    else if (board[0].innerText == board[4].innerText && board[4].innerText == board[8].innerText && board[8].innerText == e) {
        changeBoardColor(0, 4, 8);
        return e;
    }

    else if (board[2].innerText == board[4].innerText && board[4].innerText == board[6].innerText && board[6].innerText == e) {
        changeBoardColor(2, 4, 6);
        return e;
    }

    else
        return -1;
}

const restart = () => {
    location.reload();
}

const replay = () => {
    count = 0;
    isGameOver = false;
    gameOverEl.style.display = "none";
    resetWarning.style.display = "none";
    currentTurn.innerText = turnA
    for (let i = 0; i < 9; i++) {
        board[i].innerText = "";
        board[i].style.backgroundColor = "";
    } 
}

const reset = () => {
    resetWarning.style.display = "flex";
}

const closePopUP = () => {
    gameOverEl.style.display = "none";
}

const closeWarningPopUP = () => {
    resetWarning.style.display = "none";
}
