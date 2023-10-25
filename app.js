// Gameboard object which stores the gameboard array
const createGameboard = (function() {
    const Gameboard = {};

    Gameboard.gameBoard = ["", "", "", "", "", "", "", "", ""];
    Gameboard.getBoard = () => gameBoard;

    return Gameboard;
})();

// players are going to be stored in objects
const createPlayers = function(xPlayer, oPlayer) {
    return {
        xPlayer: xPlayer,
        oPlayer: oPlayer
    };
};

// object to control the flow of the game itself.
const gameController = (function () {
    const currRound = {
        1: "",
        2: "",
        3: "",
        4: "",
        5: "",
        6: "",
        7: "",
        8: "",
        9: "",
    };
    const winningCombo = [
        // horizontal
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        // vertical
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        // diagonal
        [1, 5, 9],
        [3, 5, 7]
    ];

    const players = {};
    let currPlayer = Object.keys(currPlayers)[0];

    const round = {};
    round.xPlayerScore = 0;
    round.oPlayerScore = 0;

    function playRound() {
        round.playerChoice = playerChoice;
        round.computerChoice = computerChoice;
    
        return result;
    };

    function switchPlayer() {
        let firstPlayer = Object.keys(currPlayers)[0];
        let secondPlayer = Object.keys(currPlayers)[1];
        currPlayer = currPlayer === firstPlayer ? secondPlayer : firstPlayer;
    }

    function checkWinner(){

    }

    return {
        playRound,
        switchPlayer,
        players
    }

})();

// render gameboard contents to the webpage 
const displayController = (function() {
    const gridContainer = document.querySelector(".grid-container");
    const gameBoard = createGameboard.gameBoard;

    function createDisplay() {
        for (let i = 0; i < gameBoard.length; i++){
            const newBox = document.createElement("button");
            newBox.classList.add("grid-box");
            newBox.dataset.index = i;
            newBox.textContent = gameBoard[i];
            gridContainer.appendChild(newBox);
        }
    };

    function resetDisplay() {
        const gameBoardBoxes = document.querySelectorAll(".grid-box");
        gameBoardBoxes.forEach(box => {
            box.innerText = "";
        });
    };

    function bindEvents(){
        const gameBoardBoxes = document.querySelectorAll(".grid-box");
        gameBoardBoxes.forEach(box => 
            box.addEventListener("click", handleBoxClick)
        );

        const resetBtn = document.querySelector(".resetBtn");
        resetBtn.addEventListener("click", resetDisplay)

        const startBtn = document.querySelector(".startBtn");
        const form = document.querySelector(".game-settings-form");
        startBtn.addEventListener("click", function(e){
            e.preventDefault();
            const xPlayerInputValue = form.elements.xPlayer.value;
            const oPlayerInputValue = form.elements.oPlayer.value;
            gameController.currPlayers = createPlayers(xPlayerInputValue, oPlayerInputValue);
        })
    };

    function handleBoxClick(e) {
        e.target.innerText = "X";
        console.log(e.target.dataset.index);
    }

    // function render() {

    // }

    return {
        createDisplay,
        resetDisplay,
        bindEvents,
        handleBoxClick
    }
})();

displayController.createDisplay();
displayController.bindEvents();