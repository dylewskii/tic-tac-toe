// Gameboard object which stores the gameboard array
const createGameboard = (function() {
    const Gameboard = {};

    Gameboard.gameBoard = ["", "", "", "", "", "", "", "", ""];
    Gameboard.getBoard = () => gameBoard;

    return Gameboard;
})();

// players are going to be stored in objects
const createPlayers = function(xPlayerInputValue, oPlayerInputValue) {
    return {
        xPlayer: {
            name: xPlayerInputValue,
            symbol: "X"
        },

        oPlayer: {
            name: oPlayerInputValue,
            symbol: "O"
        }
    };
};

// object to control the flow of the game itself.
const gameController = (function () {
    const currBoard = {
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

    let players = {};
    const firstPlayer = players.xPlayer;
    const secondPlayer = players.oPlayer;
    let currPlayer = players.xPlayer;

    const round = {};
    round.xPlayerScore = 0;
    round.oPlayerScore = 0;

    function playRound(clickedBoxIndex, event) {
        if (currBoard[clickedBoxIndex] !== ""){
            console.log("spot taken")
            return
        } 

        currBoard[clickedBoxIndex] = "o";
        // currBoard[clickedBoxIndex] = currPlayer.symbol;

        // checkWinner();
        // switchPlayer();
    };

    function switchPlayer() {
        // currPlayer = currPlayer === firstPlayer ? secondPlayer : firstPlayer;
    }

    function checkWinner(){

    }

    return {
        playRound,
        switchPlayer,
        players,
        currPlayer,
        firstPlayer,
        currBoard
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

        // const startBtn = document.querySelector(".startBtn");
        // const form = document.querySelector(".game-settings-form");
        // startBtn.addEventListener("click", function(e){
        //     e.preventDefault();
        //     const xPlayerInputValue = form.elements.xPlayer.value;
        //     const oPlayerInputValue = form.elements.oPlayer.value;
        //     gameController.players = createPlayers(xPlayerInputValue, oPlayerInputValue);
        //     gameController.currPlayer = gameController.players.xPlayer;
        // })
    };

    function beginGame(){
        const startBtn = document.querySelector(".startBtn");
        const form = document.querySelector(".game-settings-form");
        startBtn.addEventListener("click", function(e){
            e.preventDefault();
            const xPlayerInputValue = form.elements.xPlayer.value;
            const oPlayerInputValue = form.elements.oPlayer.value;
            gameController.players = createPlayers(xPlayerInputValue, oPlayerInputValue);
            displayController.createDisplay();
            displayController.bindEvents();
        }, {once : true})
    };

    function handleBoxClick(e) {
        const clickedBoxIndex = parseInt(e.target.dataset.index) + 1;
        const event = e.target;
        gameController.playRound(clickedBoxIndex, event);
    }

    // function render() {

    // }

    return {
        createDisplay,
        resetDisplay,
        bindEvents,
        handleBoxClick,
        beginGame
    }
})();


displayController.beginGame()
// displayController.createDisplay();
// displayController.bindEvents();
