// Gameboard object which stores the gameboard array
const createGameboard = (function() {
    const Gameboard = {};

    Gameboard.gameBoard = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    Gameboard.getBoard = () => gameBoard;

    return Gameboard;
})();

// players are going to be stored in objects
const createPlayers = function(nameOne, nameTwo) {
    return {
        playerOne: nameOne,
        playerTwo: nameTwo
    }
};

// object to control the flow of the game itself.
const playRound = function(playerChoice, computerChoice) {
    const round = {};

    round.playerChoice = playerChoice;
    round.computerChoice = computerChoice;

    round.playerScore = 0;
    round.computerScore = 0;

    return round;
};

// render gameboard contents to the webpage 
const displayController = (function() {
    const gridContainer = document.querySelector(".grid-container");
    const gridBoxes = document.querySelectorAll(".grid-box");
    const gameBoard = createGameboard.gameBoard;

    function createDisplay() {
        for (let square = 0; square < gameBoard.length; square++){
            const newSquare = document.createElement("div");
            newSquare.classList.add("grid-box");
            newSquare.textContent = gameBoard[square];
            gridContainer.appendChild(newSquare);
        }
    };

    function resetDisplay() {
        const gameBoardSquares = document.querySelectorAll(".grid-box")
        gameBoardSquares.forEach(square => {
            square.innerText = "";
        });
    };

    return {
        createDisplay,
        resetDisplay
    }
})();

displayController.createDisplay();

