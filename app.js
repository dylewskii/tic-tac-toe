let gamePlayers = null;

const gameBoardController = (function() {
    const gameBoardObj = {};
    gameBoardObj.gameBoard = 
    ["", "", "", 
    "", "", "", 
    "", "", ""];

    return gameBoardObj;
})();

const playerController = function(xPlayerInputValue, oPlayerInputValue) {
    let turnMessage = document.querySelector(".turnIndicator");
    let players = {
        xPlayer: {
            name: xPlayerInputValue,
            symbol: "X"
        },

        oPlayer: {
            name: oPlayerInputValue,
            symbol: "O"
        },

        currPlayer: null,

        switchPlayer : function() {
            this.currPlayer = this.currPlayer === this.xPlayer ? this.oPlayer : this.xPlayer;
            turnMessage.textContent = `${this.currPlayer.name}'s turn. Pick a box: `;
        }
    };

    players.currPlayer = players.xPlayer;
    return players;
};

const gameController = (function () {
    let turnMessage = document.querySelector(".turnIndicator");
    const gb = gameBoardController.gameBoard;
    const winningCombos = [
        // horizontal
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        // vertical
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        // diagonal
        [0, 4, 8],
        [2, 4, 6]
    ];

    function playRound(clickedBoxIndex) {
        if (gameBoardController.gameBoard[clickedBoxIndex] !== ""){
            return;
        } 
        gameBoardController.gameBoard[clickedBoxIndex] = gamePlayers.currPlayer.symbol;
        if (!checkWinner()){
            gamePlayers.switchPlayer()
        }
    };

    function checkWinner(){
        let gameWon = false;
        let draw = true;
        const symbol = gamePlayers.currPlayer.symbol;

        // Checks winner
        winningCombos.forEach(arr => {
            const [a, b, c] = arr;
            if (gb[a] === symbol && gb[b] === symbol && gb[c] === symbol){
                gameWon = true;
            }
        });

        // Checks for a tie
        gb.forEach(box => {
            if (box === ""){
                draw = false;
            }
        });

        // Displays Tie Result
        if (draw && !gameWon){
            turnMessage.textContent = `It's a tie! Press Restart to play again`;
            return 'tie';
        };

        // Displays Win Result
        if (gameWon || gameWon && !draw){
            turnMessage.textContent = `${gamePlayers.currPlayer.name} has won!`;
            return true;
        };
        return false;
    };

    return {
        playRound,
        checkWinner
    }
})();

const displayController = (function() {
    const gridContainer = document.querySelector(".grid-container");
    const gameBoard = gameBoardController.gameBoard;

    function render() {       
        while (gridContainer.firstChild) {
            gridContainer.removeChild(gridContainer.firstChild);
        }

        for (let i = 0; i < gameBoard.length; i++){
            const newBox = document.createElement("button");
            newBox.classList.add("grid-box");
            newBox.dataset.index = i;
            newBox.textContent = gameBoard[i];
            gridContainer.appendChild(newBox);
        }
    }
      
    function resetDisplay() {
        const gameBoardBoxes = gameBoardController.gameBoard;
        gameBoardBoxes.forEach((box, i) => gameBoardBoxes[i] = "");
        render();
    }

    function bindEvents(){
        const gameBoardBoxes = document.querySelectorAll(".grid-box");
        
        gameBoardBoxes.forEach(box => 
            box.addEventListener("click", function(e){
                handleBoxClick(e);
            })
        );

        const resetBtn = document.querySelector(".resetBtn");
        resetBtn.addEventListener("click", resetDisplay);
    };

    function beginGame(){
        const startBtn = document.querySelector(".startBtn");
        const form = document.querySelector(".game-settings-form");
        let turnMessage = document.querySelector(".turnIndicator");
        startBtn.addEventListener("click", function(e){
            e.preventDefault();
            const xPlayerInputValue = form.elements.xPlayer.value;
            const oPlayerInputValue = form.elements.oPlayer.value;
            gamePlayers = playerController(xPlayerInputValue, oPlayerInputValue);
            console.log(gamePlayers) // >> this returns the desired object
            displayController.render();
            displayController.bindEvents();
            turnMessage.textContent = `${gamePlayers.currPlayer.name}'s turn. Pick a box: `;
        }, {once : true})
    };

    function handleBoxClick(e) {
        const clickedBoxIndex = parseInt(e.target.dataset.index);
        const eventTarget = e.target;
        eventTarget.textContent = gamePlayers.currPlayer.symbol;
        gameController.playRound(clickedBoxIndex);
    }

    return {
        render,
        resetDisplay,
        bindEvents,
        handleBoxClick,
        beginGame,
    }
})();

displayController.beginGame()