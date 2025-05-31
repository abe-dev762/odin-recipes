var getHumanChoice = prompt("Do you choose Rock, Paper, or Scissors ?");

var getComputerChoice = Math.random(); {
    if (getComputerChoice > 0 && getComputerChoice < 0.33) {
        getComputerChoice = Rock;
    }
    else if (getComputerChoice > 0.34 && getComputerChoice < 0.66) {
        getComputerChoice = Paper;
    }
    else (getComputerChoice > 0.67 && getComputerChoice < 1); {
        getComputerChoice = scissors;
    }
    }

    console.log(getComputerChoice)