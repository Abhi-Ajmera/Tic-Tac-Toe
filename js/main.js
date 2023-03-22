const statusDisplay = document.querySelector('.game-status');

let gameActive = true;

let currentPlayer = "X";

// To store game state
let gameState = ["","","","","","","","",""];

const winningMessage = () => `player ${currentPlayer} has won!!!`;
const drawMessage = () => `Game ended in draw`;
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;


statusDisplay.innerHTML = currentPlayerTurn();

function handleCellClick(clickedCellEvent){
    const clickedCell = clickedCellEvent.target;

    const clickedCellIndex = parseInt(clickedCell.getAttribute('data-cell-index'));

    if (gameState[clickedCellIndex] !== "" || !gameActive){
        return;
    };

    handleCellPlayed(clickedCell,clickedCellIndex);
    handleResultValidation();
};

function handleCellPlayed(clickedCell,clickedCellIndex){
    gameState[clickedCellIndex] = currentPlayer;
    clickedCell.innerHTML = currentPlayer;
};

function handleResultValidation(){

};

function handlePlayerChange(){

};


function handleRestart(){

};

document.querySelectorAll('.cell').forEach((cell) => {cell.addEventListener('click', handleCellClick)});
document.querySelector('game-restart').addEventListener('click', handleRestart);