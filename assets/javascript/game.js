// game.js
// -------------------------------------------------------
// -------------------------------------------------------

// Global Variables
// -------------------------------------------------------

// Seeded Arrays
var arrProgress = [[0, "<div class='progress' style='height: 30px;'><div role='progressbar' aria-valuemin='0' aria-valuemax='12' class='progress-bar bg-danger' style='width: 1%' aria-valuenow='0' >1%</div></div>"], [1, "<div class='progress' style='height: 30px;'><div role='progressbar' aria-valuemin='0' aria-valuemax='12' class='progress-bar bg-danger' style='width: 9%' aria-valuenow='1'>9%</div></div>"], [2, "<div class='progress' style='height: 30px;'><div role='progressbar' aria-valuemin='0' aria-valuemax='12' class='progress-bar bg-danger' style='width: 17%' aria-valuenow='2' >17%</div></div>"], [3, "<div class='progress' style='height: 30px;'><div role='progressbar' aria-valuemin='0' aria-valuemax='12' class='progress-bar bg-warning' style='width: 25%' aria-valuenow='3' >25%</div></div>"], [4, "<div class='progress' style='height: 30px;'><div role='progressbar' aria-valuemin='0' aria-valuemax='12' class='progress-bar bg-warning' style='width: 33%' aria-valuenow='4' >33%</div></div>"], [5, "<div class='progress' style='height: 30px;'><div role='progressbar' aria-valuemin='0' aria-valuemax='12' class='progress-bar bg-warning' style='width: 41%' aria-valuenow='5' >41%</div></div>"], [6, "<div class='progress' style='height: 30px;'><div role='progressbar' aria-valuemin='0' aria-valuemax='12' class='progress-bar bg-info' style='width: 50%' aria-valuenow='6' >50%</div></div>"], [7, "<div class='progress' style='height: 30px;'><div role='progressbar' aria-valuemin='0' aria-valuemax='12' class='progress-bar bg-info' style='width: 58%' aria-valuenow='7' >58%</div></div>"], [8, "<div class='progress' style='height: 30px;'><div role='progressbar' aria-valuemin='0' aria-valuemax='12' class='progress-bar bg-info' style='width: 66%' aria-valuenow='8' >66%</div></div>"], [9, "<div class='progress' style='height: 30px;'><div role='progressbar' aria-valuemin='0' aria-valuemax='12' class='progress-bar bg-success' style='width: 75%' aria-valuenow='3' >75%</div></div>"], [10, "<div class='progress' style='height: 30px;'><div role='progressbar' aria-valuemin='0' aria-valuemax='12' class='progress-bar bg-success' style='width: 83%' aria-valuenow='10' >83%</div></div>"], [11, "<div class='progress' style='height: 30px;'><div role='progressbar' aria-valuemin='0' aria-valuemax='12' class='progress-bar bg-success' style='width: 92%' aria-valuenow='11' >92%</div></div>"], [12, "<div class='progress' style='height: 30px;'><div role='progressbar' aria-valuemin='0' aria-valuemax='12' class='progress-bar bg-success' style='width: 100%' aria-valuenow='12' >100%</div></div>"]];
var arrRandomWords = ["global", "adjust", "middleware", "seize", "deposit", "awkward", "look", "notebook", "fare", "bush", "disposition", "fade", "monopoly", "carved", "yachtsman", "fashionable", "expand", "xylophone", "trunk", "sailing", "enter", "soak", "inspector", "woman", "shoelace", "transform", "loop", "shortage", "knapsack", "sinking", "jinx", "sofa", "poorly", "ignorance", "fjord", "pride", "marriage", "relate", "weeds", "accidental", "diplomat", "cottage", "numbskull", "attention", "voyeurism", "praise", "danger", "literature", "consumption", "umbrella", "buster", "westward", "complain", "overcharge", "complexity", "dashing", "dizzying", "voodoo", "trace", "tissue", "glockenspiel", "constraint", "triphthong", "sunday", "quarter", "basketball", "wristwatch", "visitor", "organization", "atmosphere", "contain", "index", "finger", "concession", "joint", "whizzing", "light", "partner", "abandon", "pasture", "salsa", "hypnotize", "dialogue", "jazziest", "license", "zephyr", "office", "printer", "electrician", "common", "complexion", "razzmatazz"];
var arrRandomQuotes = ["Just one more thing.", "My ears pop in an elevator. As a matter if fact, I don’t even like being this tall.", "I knew you could do it.", "I can't think in this coat.", "I'm hanging up.  You can keep talkin' but I'm gonna hang up.", "I can't swim, I don't even like a deep tub.", "I worry. I mean, little things bother me. I'm a worrier. I mean, little insignificant", "I respect your talent, but I don't like anything else about you.", "Before coffee, I'm up and walkin' around but I'm not awake.", "There are a couple of loose ends I'd like to tie up. Nothing important you understand.", "My wife always calls about some errand at the grocery store.", "I'm always getting you angry, it must be my accent or something.", "Sometimes I even wonder about my wife, not that she's a crackpot.", "I worry. I mean, little things bother me. I'm a worrier. I mean, little insignificant details - I lose my appetite. I can't eat. "];
var arrRandomImages = ["assets/images/01_columbo.png", "assets/images/02_columbo.jpg", "assets/images/03_columbo.jpg", "assets/images/04_columbo.jpg", "assets/images/05_columbo.jpg", "assets/images/06_columbo.jpg", "assets/images/07_columbo.jpg", "assets/images/08_columbo.jpg", "assets/images/09_columbo.jpg", "assets/images/10_columbo.jpg", "assets/images/11_columbo.jpg", "assets/images/12_columbo.jpg", "assets/images/13_columbo.jpg", "assets/images/14_columbo.jpg", "assets/images/15_columbo.jpg", "assets/images/16_columbo.jpg", "assets/images/17_columbo.jpg", "assets/images/18_columbo.jpg", "assets/images/19_columbo.jpg", "assets/images/20_columbo.jpg", "assets/images/21_columbo.jpg", "assets/images/22_columbo.jpg", "assets/images/23_columbo.jpg", "assets/images/24_columbo.jpg", "assets/images/25_columbo.jpg", "assets/images/26_columbo.jpg", "assets/images/27_columbo.jpg", "assets/images/28_columbo.jpg"];
var audioWin = new Audio("assets/audio/columbo_theme.mp3");
var audioLose = new Audio("assets/audio/womp_womp.mp3");

// Counter variables
var countWins = 0;
var countTries = 0;
var countCorrect = -1;
var countProgress = 12;
var picked = "";
var alpha = false;

// Prompt player for their name
var userName = "";
userName = prompt("May I know your name?");

// Create variables to set document contents during the game
var detective = document.getElementById("playerName");
var winTotal = document.getElementById("playerWins");
var gameBoard = document.getElementById("wordPanel");
var usedBoard = document.getElementById("usedPanel");
var remLetters = document.getElementById("remainPanel");
var progBar = document.getElementById("progBar");
var winQuote = document.getElementById("quotes");
var gameImage = document.getElementById("images");

// Array variables
var arrUsedLetters = [];
var arrMixedLetters = [];
var arrGameWord = [];
var indexes = [];

// Logic
// -------------------------------------------------------

// Call welcomMsg() Function
welcomeMsg();

// Display player's name in the welcome message
function welcomeMsg() {
    // Check whether User input is null or contains a number. 
    var ltrs = /\d/;
    if (userName === null || ltrs.test(userName) === true) {
        // If input is null or a number, do not display userName
        detective.textContent = "!";
    }
    else {
        // If input is NOT null or a number, display userName (in uppercase) in the welcome message
        detective.textContent = " " + userName.toUpperCase() + "!";
    }
    // Launch Game Rules Modal
    $('#helpModal').modal('show');

    initGame();
}

// Initialize the game
function initGame() {
    // Reset Counters
    countTries = 0;
    countProgress = 12;
    countCorrect = -1;

    // Hide Game Word Panel
    document.getElementById("wordPanel").style.display = "none";
    // Hide Used Letter Panel
    document.getElementById("usedPanel").style.display = "none";
    // Hide Remaining Tries
    document.getElementById("remainPanel").style.display = "none";
    // Hide Progress Bar
    document.getElementById("progBar").style.display = "none";

    // Select random word from arrRandomWords
    var randomNumber = Math.floor(Math.random() * arrRandomWords.length);
    // console.log("---Random Number---");
    // console.log(randomNumber);
    arrGameWord = arrRandomWords[randomNumber];
    // console.log("---GameWord---");
    // console.log(arrGameWord);

    // Reset game information on HTML
    gameBoard.textContent = "";
    usedBoard.textContent = "";
    remLetters.textContent = "Remaining Tries: " + countProgress;
    progBar.innerHTML = arrProgress[countProgress][1];

    var theDiv;
    var content = " ";

    // Create array of blanks for each letter of arrGameWord
    for (var i = 0; i < arrGameWord.length; i++) {
        arrMixedLetters.push("_");
    }
    // console.log("---Mixed Letter---");
    // console.log(arrMixedLetters);

    // Display array of blanks in Game Word Panel
    for (var i = 0; i < arrMixedLetters.length; i++) {
        theDiv = document.getElementById("wordPanel");
        content += arrMixedLetters[i] + " "
        theDiv.textContent = content;
    }

    // Initial event listener for users to click any key
    document.onkeyup = function () {
        // Hide "Click Any Key" message after any key clicked
        document.getElementById("pressIt").style.display = "none";

        // Show Progress Bar
        document.getElementById("progBar").style.display = "block";
        // Show Word Panel;
        document.getElementById("wordPanel").style.display = "block";
        // Show Used  Panel;
        document.getElementById("usedPanel").style.display = "block";
        // Show Remaining Tries
        document.getElementById("remainPanel").style.display = "block";
        // Call gamePlay() function
        gamePlay();
    }
}

// Get the index for all occurrences of a letter in the game word

function getAllIndexes(arr, letter) {
    indexes.length = 0;
    for (var i = 0; i < arr.length; i++) {
        if (letter == arr[i])
            indexes.push(i);
    };
};

function checkAlpha(value) {
    alpha = false;
    var charCode = event.which || event.keyCode;
    console.log(value);
    if (charCode > 64 && charCode < 91 || charCode > 96 && charCode < 123) {
         return alpha = true;
    }
    else {
        return alpha = false;
    }

}


// Play the game
function gamePlay() {
    // Process Players Chosen Letters
    document.onkeyup = function (event) {
        // Set player input to a variable
        picked = event.key;
        // console.log("---Picked---");
        // console.log(picked);

        checkAlpha(picked);
        // console.log(picked);
        // console.log(alpha);

        if (alpha === true) {
        getAllIndexes(arrUsedLetters, picked);
        if (indexes.length === 0) {
            // Push used letter to arrUsedLetters
            arrUsedLetters.push(picked);
            // console.log("---Used Letters---");
            // console.log(arrUsedLetters);

            // Display arrUsedLetters letters on usedPanel
            var theDiv;
            var content = " ";

            for (var i = 0; i < arrUsedLetters.length; i++) {
                theDiv = document.getElementById("usedPanel");
                content += arrUsedLetters[i] + " "
                theDiv.innerHTML = content.toUpperCase();
            }

        } else {
            alert("Sorry, but you've already guessed that letter!")
        }

        // Check whether user guess appears in game word
        letterCheck = arrGameWord.indexOf(picked);
        // console.log("---Letter Check---");
        // console.log(letterCheck);

        // If not, lower and update remaining tries counter and progress bar
        if (letterCheck === -1) {
            // Reduce available tries
            countProgress--;
            // Display updated available tries in remainPanel
            remLetters.textContent = "Remaining Tries: " + countProgress;
            // Update progress bar based on countProgress value
            progBar.innerHTML = arrProgress[countProgress][1];
        }

        // If yes, replace __ with picked letter
        else {
            // Id the index for each occurence of the user's guess
            getAllIndexes(arrGameWord, picked);
            // console.log("---Indexes after correct letter---");
            // console.log(indexes);
            // Replace blank in arrayMixedLetter representing the user's guess with the user's guess
            for (var i = 0; i < indexes.length; i++) {
                var temp = indexes[i];
                arrMixedLetters[temp] = picked;
            }
            // console.log("---Temp---");
            // console.log(temp);
            // console.log("---Mixed Letters---");
            // console.log(arrMixedLetters);

            var theDiv = "";
            var content = " ";
            // Display arrayMixedLetter in Game Word Panel
            for (var i = 0; i < arrMixedLetters.length; i++) {
                theDiv = document.getElementById("wordPanel");
                content += arrMixedLetters[i] + " "
                theDiv.textContent = content.toUpperCase();
            }
            // Count remaining letters to be guessed and set counter
            getAllIndexes(arrMixedLetters, "_");
            // console.log("---Index for Underscore---");
            // console.log(indexes);
            countCorrect = indexes.length;
            // console.log("---Count Correct---");
            // console.log(countCorrect);

        }
        // Call gameCheck() function
        gameCheck()

        } else {
            alert("Please use letters only!")
        };

    }
}

// Check whether user lost, won, or should keep playing
function gameCheck() {
    // Check to see if user is out of guesses and lost
    if (countProgress === 0) {
        // Call youLost() function
        youLost();
    }
    // Check to see if user has guessed all the word letters and won
    else if (countProgress !== 0 && countCorrect === 0) {
        // Call youWon() function
        youWon();
    }
    else {
        // Call gamePlay() function
        gamePlay();
    };
};


// If user lost, play sound and message
function youLost() {
    // Reset underscore counter
    countCorrect = -1;
    // Play whomp whomp
    audioLose.play();
    // Launch lost game modal
    $('#lostModal').modal('show');
    // Start a new game
    newGame();
}

// If user won, play sound and message
function youWon() {
    // Reset underscore counter
    countCorrect = -1;
    // Add 1 to player's win count
    countWins++;
    // Update Wins count in banner
    if (countWins > 1) {
        winTotal.innerHTML = " You've won " + countWins + " games!"
    } else {
        winTotal.innerHTML = " You've won " + countWins + " game!"
    };

    // Play Columbo Theme
    audioWin.play();
    // Select Random image from arrRandomImage
    var genImage = arrRandomImages[Math.floor(Math.random() * arrRandomImages.length)];
    // console.log(genImage);
    // Display image tag with random image
    var ranImages = "<img class='card-img-top' src='" + genImage + "' alt='Picture of Columbo'></img>";
    images.innerHTML = ranImages;
    // Select Random quote from arrRandomQuote
    var genQuote = arrRandomQuotes[Math.floor(Math.random() * arrRandomQuotes.length)];
    // console.log(genQuote);
    // Display random quote
    winQuote.innerHTML = genQuote;
    // Launch You Won Modal
    $('#wonModal').modal('show');
    // Start a new game
    newGame();
}

// Start a new game
function newGame() {
    // Show "click any key" message again
    document.getElementById("pressIt").style.display = "block";

    // Reset Counters
    countTries = 0;
    countProgress = 12;
    countCorrect = -1;

    // Reset Arrays
    arrUsedLetters.length = 0;
    arrMixedLetters.length = 0;
    arrGameWord.length = 0;
    indexes.length = 0;

    // Hide Game Word Panel
    document.getElementById("wordPanel").style.display = "none";
    // Hide Used Letter Panel
    document.getElementById("usedPanel").style.display = "none";
    // Hide Remaining Tries
    document.getElementById("remainPanel").style.display = "none";
    // Hide Progress Bar
    document.getElementById("progBar").style.display = "none";

    // Select random word from arrRandomWords
    var randomNumber = Math.floor(Math.random() * arrRandomWords.length);
    // console.log("---Random Number---");
    // console.log(randomNumber);
    arrGameWord = arrRandomWords[randomNumber];
    // console.log("---GameWord---");
    // console.log(arrGameWord);

    // Reset game information on HTML
    gameBoard.textContent = "";
    usedBoard.textContent = "";
    remLetters.textContent = "Remaining Tries: " + countProgress;
    progBar.innerHTML = arrProgress[countProgress][1];

    var theDiv;
    var content = " ";

    // Create array of blanks for each letter of arrGameWord
    for (var i = 0; i < arrGameWord.length; i++) {
        arrMixedLetters.push("_");
    }
    // Display array of blanks in Game Word Panel
    for (var i = 0; i < arrMixedLetters.length; i++) {
        theDiv = document.getElementById("wordPanel");
        content += arrMixedLetters[i] + " "
        theDiv.textContent = content;
    }
    // Initial event listener for users to click any key
    document.onkeyup = function () {
        // Hide "Click Any Key" message after any key clicked
        document.getElementById("pressIt").style.display = "none";

        // Show Progress Bar
        document.getElementById("progBar").style.display = "block";
        // Show Word Panel;
        document.getElementById("wordPanel").style.display = "block";
        // Show Used  Panel;
        document.getElementById("usedPanel").style.display = "block";
        // Show Remaining Tries
        document.getElementById("remainPanel").style.display = "block";

        // Call gamePlay() function
        gamePlay();
    }
}


// Exit button
function exitGame() {
    //Thank user for playing and navigate them to my Bootstrap Portfolio
    alert("Thank you for playing Word Guess with Lt. Columbo detective!");
    window.location.href = 'https://www.pamkelly.com/portdev.html';
}