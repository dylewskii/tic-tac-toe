// Gameboard object which stores the gameboard array
const createGameboard = (function() {
    const Gameboard = {};

    Gameboard.gameBoard = ["", "", "", "", "", "", "", "", ""];
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
const gameController = (function () {


    function playRound(playerChoice, computerChoice) {
        const result = {};
    
        result.playerChoice = playerChoice;
        result.computerChoice = computerChoice;
    
        result.playerScore = 0;
        result.computerScore = 0;
    
        return result;
    };

    function checkWinner(){

    }

    return {
        playRound,
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
        const gameBoardBoxes = document.querySelectorAll(".grid-box")
        gameBoardBoxes.forEach(box => {
            box.innerText = "";
        });
    };

    function bindEvents(){
        const gameBoardBoxes = document.querySelectorAll(".grid-box")
        gameBoardBoxes.forEach(box => 
            box.addEventListener("click", handleBoxClick)
        );
    };

    function handleBoxClick(e) {
        e.target.innerText = "X"
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