
document.addEventListener('DOMContentLoaded', function() {
    
    //HTML Elements
    buttonTeamA = document.getElementById("button-team-a");
    buttonTeamB = document.getElementById("button-team-b");

    //Generic Variables
    scoreTeamA = 0;
    scoreTeamB = 0;

    updateButtonText();

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
        if(scoreTeamA >= 25 && scoreTeamB < scoreTeamA - 2){
            console.log("Team A wins!")
        }
    }

    //Updates Button self explanatory
    function updateButtonText() {
        buttonTeamA.textContent = scoreTeamA;
        buttonTeamB.textContent = scoreTeamB;
    }
});
