// NBA Player Profile

let playerName = "Victor";
let team = "San Antonio";
let position = "Center";
let jerseyNumber = 1;
let pointsPerGame = 25.7;


// 1. Concatenated String

let playerInfo = playerName + " plays " + position + 
    " for the " + team + " team and wears number " + jerseyNumber + ".";

document.getElementById("playerInfo").innerHTML = playerInfo;


// 2. If Statement

let scoringMessage;

if (pointsPerGame >= 20) {
    scoringMessage = playerName + " is a high-scoring player!";
} else {
    scoringMessage = playerName + " is still developing as a scorer.";
}

document.getElementById("scoringInfo").innerHTML = scoringMessage;


// 3. Switch Statement

let positionMessage;

switch (position) {
    case "Point Guard":
        positionMessage = "This player usually handles the ball.";
        break;

    case "Shooting Guard":
        positionMessage = "This player is usually known for scoring and shooting.";
        break;

    case "Small Forward":
        positionMessage = "This player can contribute in many areas.";
        break;

    case "Power Forward":
        positionMessage = "This player usually contributes with scoring and rebounding.";
        break;

    case "Center":
        positionMessage = "This player usually protects the rim and rebounds.";
        break;

    default:
        positionMessage = "Position not recognized.";
}

document.getElementById("positionInfo").innerHTML = positionMessage;


// 4. String Method

let teamName = team.toUpperCase();

document.getElementById("teamInfo").innerHTML = teamName;


// 5. Number Method

let roundedPoints = pointsPerGame.toFixed(1);

document.getElementById("pointsInfo").innerHTML = roundedPoints + " points per game.";