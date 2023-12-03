
document.addEventListener('DOMContentLoaded', function() {
    
    //HTML Elements
    buttonTeamA = document.getElementById("button-team-a");
    buttonTeamB = document.getElementById("button-team-b");
    textWinnerMessage = document.getElementById("winner-message");
    buttonStandardSet = document.getElementById("standard-set");
    buttonSmallSet = document.getElementById("small-set");
    divTeamA = document.getElementById("div-team-a");
    divTeamB = document.getElementById("div-team-b");

    //Generic Variables
    scoreTeamA = 0;
    scoreTeamB = 0;
    setType = "";

    //Ensure the right text ("0") at the start
    updateButtonText();

    //Selecting Set Mode
    buttonStandardSet.addEventListener("click", function() {
        divTeamA.classList.remove("hide-element");
        divTeamB.classList.remove("hide-element");
        buttonStandardSet.classList.add("hide-element");
        buttonSmallSet.classList.add("hide-element");
        setType = "standard";
    });
    buttonSmallSet.addEventListener("click", function() {
        divTeamA.classList.remove("hide-element");
        divTeamB.classList.remove("hide-element");
        buttonStandardSet.classList.add("hide-element");
        buttonSmallSet.classList.add("hide-element");
        setType = "small";
    });

    //Score Logic
    buttonTeamA.addEventListener("click", function() {
        scoreTeamA++;
        updateButtonText();
        checkWinConditions();
    });
    buttonTeamB.addEventListener("click", function() {
        scoreTeamB++;
        updateButtonText();
        checkWinConditions();
    });

    //Checks if any win condition applies
    function checkWinConditions(){
        if (setType == "standard") {
            if(scoreTeamA >= 25 && scoreTeamB < scoreTeamA - 1){
                textWinnerMessage.textContent = "Team A wins!";
            }
            else if(scoreTeamB >= 25 && scoreTeamA < scoreTeamB - 1){
                textWinnerMessage.textContent = "Team B wins!";
            }
        }
        if (setType == "small") {
            if(scoreTeamA >= 15 && scoreTeamB < scoreTeamA - 1){
                textWinnerMessage.textContent = "Team A wins!";
            }
            else if(scoreTeamB >= 15 && scoreTeamA < scoreTeamB - 1){
                textWinnerMessage.textContent = "Team B wins!";
            }
        }
    }

    //Updates Button self explanatory
    function updateButtonText() {
        buttonTeamA.textContent = scoreTeamA;
        buttonTeamB.textContent = scoreTeamB;
    }

});
