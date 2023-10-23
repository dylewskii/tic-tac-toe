// Gameboard object which stores the gameboard array
const createGameboard = (function() {
    const Gameboard = {};

    Gameboard.gameboard = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    Gameboard.getBoard = () => gameboard;

    return Gameboard;
})();

// players are going to be stored in objects
const createPlayers = function(nameOne, nameTwo) {
    const players = {
        playerOne: {},
        playerTwo: {}
    };

    players.playerOne.name = nameOne;
    players.playerTwo.name = nameTwo;

    return players;
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

// render the contents of the gameboard array to the webpage 
const displayController = (function() {
    const gridContainer = document.querySelector(".grid-container");
    const gameboard = createGameboard.gameboard;

    function createDisplay() {
        for (let square = 0; square < gameboard.length; square++){
            const newSquare = document.createElement("div");
            newSquare.classList.add("grid-box");
            newSquare.textContent = gameboard[square];
            gridContainer.appendChild(newSquare);
        }
    };

    function resetDisplay() {
        const gameboardSquares = document.querySelectorAll(".grid-box")
        gameboardSquares.forEach(square => {
            square.innerText = "";
        });
    };

    return {
        createDisplay,
        resetDisplay
    }
})();

displayController.createDisplay();