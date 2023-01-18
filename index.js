// confirmation popup 
let playGame = confirm("Shall we play rock, paper, scissors?");
if (playGame === true) {
    /// play (if true)
    let playerChoice = prompt("Choose your move");
if (playerChoice) {
    let playerOne = playerChoice.trim().toLocaleLowerCase(); // to trim down any whitespaces and force input to lowercase letters.
    if (playerOne === "rock" || playerOne === "paper" || playerOne === "scissors") {

        let computerChoice = Math.floor(Math.random() * 3 + 1 ); //random number from 1 to 3
        //if value is 1 then rock, if  then paper, scissors if 3
        let computer = computerChoice === 1 ? "rock" 
        : computerChoice === 2 ? "paper" 
        : "scissors";

        //declaring a result variable for outcome
        let result = 

        playerOne === computer ? "tie game" 
        : playerOne === "rock" && computer === "scissors" ? `playerOne: ${playerOne}\ncomputer: ${computer}\nPlayer wins!`
        : playerOne === "paper" && computer === "rock" ? `playerOne: ${playerOne}\ncomputer: ${computer}\nplayer Wins!`
        : playerOne === "scissors" && computer === "paper" ? `playerOne: ${playerOne}\ncomputer: ${computer}\nplayer Wins!`
        :  `playerOne: ${playerOne}\ncomputer: ${computer}\computer Wins!`

            alert(result);

            // setting up a rematch pop up 
            let playAgain = confirm("play again?"); 
            playAgain ? location.reload() : alert("okay thanks for playing")

    } else {
        alert("you didnt enter any valid arguements");
    }

} else {
    alert("i guess you changed your mind.");
}

// if playGame value is false
} else {
    alert("okay, maybe next time.")
}