const statusDisplay = document.querySelector('.game-status');

let gameActive =true;

let currentPlayer = "X";

// To store game state
let gameState = ["","","","","","","","",""];

const winningMessage = () => `player ${currentPlayer} has won!!!`;
const drawMessage = () => `Game ended in draw`;
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;


statusDisplay.innerHTML = currentPlayerTurn();

function handleCellPlayed(){

};

function handlePlayerChange(){

};

function handleCellClick(){

};

function handleRestart(){

};

document.querySelectorAll('.cell').forEach((cell) => {cell.addEventListener('click', handleCellClick)});
document.querySelector('game-restart').addEventListener('click', handleRestart);