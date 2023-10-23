// store the gameboard as an array 
// inside of a Gameboard object.

const createGameboard = (function() {
    const Gameboard = {};
    Gameboard.gameboard = [];

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