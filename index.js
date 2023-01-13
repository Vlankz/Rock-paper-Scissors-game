const moves = ['rock', 'paper', 'scissors'];
let playerOne = "paper";
let computer = moves[Math.floor(Math.random() * moves.length)];

    switch (playerOne) {

        case computer:
            console.log("Guess you both chose the same move, Tie Game bro");
            break;

        case "rock":
            if (computer === "paper"){
                console.log("You choose rock, Computer chose" + " " + computer + " " + "you lost bro");
            }  else {
                console.log("You choose rock, Computer chose" + " " + computer + " " + "you won bro");
            } 
            break;

            case "paper":
                if (computer === "scissors"){
                    console.log("You choose paper, Computer chose" + " " + computer + " " + "you lost bro");
                }  else {
                    console.log("You choose paper, Computer chose" + " " + computer + " " + "you won bro");
                } 
                break;

                case "scissors":
                    if (computer === "rock"){
                        console.log("You choose rock, Computer chose" + " " + computer + " " + "you lost bro");
                    }  else {
                        console.log("You choose rock, Computer chose" + " " + computer + " " + "you won bro");
                    } 
                    break;    
             
                    default: 
                    console.log("please use a valid keyword")
    }