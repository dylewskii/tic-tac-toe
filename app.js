// Gameboard object which stores the gameboard array
const createGameboard = (function() {
    const Gameboard = {};
    Gameboard.gameboard = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    return Gameboard;
})();

// players are going to be stored in objects
function createPlayers(nameOne, nameTwo) {
    const players = {
        playerOne: {},
        playerTwo: {}
    };

    players.playerOne.name = nameOne;
    players.playerTwo.name = nameTwo;

    return players;
};

// object to control the flow of the game itself.
function playRound(playerChoice, computerChoice) {
    const round = {};

    round.playerChoice = playerChoice;
    round.computerChoice = computerChoice;

    round.playerScore = 0;
    round.computerScore = 0;

    return round;
};

// render the contents of the gameboard array to the webpage 
const displayController = (function() {
    
    function createDisplay() {
        const gridContainer = document.querySelector(".grid-container");
        const gameboard = createGameboard.gameboard;

        for (let square of gameboard){
            const newSquare = document.createElement("div");
            newSquare.classList.add("grid-box");
            newSquare.textContent = gameboard[square];
            newSquare.style.backgroundColor = "white";
            newSquare.style.padding = "10px";
            newSquare.style.border = "1px solid #000";
            gridContainer.appendChild(newSquare);
        }
    }

    return {
        createDisplay
    }
})();

displayController.createDisplay()