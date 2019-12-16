// Create Global Variables
var userName = null;
var countWins = 0;
var countProgress = 12;
var countWrongGuesses = 0;
var letterCheck;
var arrUsedLetters = [];
var arrCorrectLetters = [];
var arrGameWord = [];
var arrProgress = [[12, "<div role='progressbar' aria-valuemin='0' aria-valuemax='12' class='progress-bar bg-success' style='width: 100%' aria-valuenow='12' >12</div>"], [11, "<div role='progressbar' aria-valuemin='0' aria-valuemax='12' class='progress-bar bg-success' style='width: 91%' aria-valuenow='11' >11</div>"], [10, "<div role='progressbar' aria-valuemin='0' aria-valuemax='12' class='progress-bar bg-success' style='width: 83%' aria-valuenow='01' >10</div>"], [9, "<div role='progressbar' aria-valuemin='0' aria-valuemax='12' class='progress-bar bg-info' style='width: 75%' aria-valuenow='9' >9</div>"], [8, "<div role='progressbar' aria-valuemin='0' aria-valuemax='12' class='progress-bar bg-info' style='width: 66%' aria-valuenow='8' >8</div>"], [7, "<div role='progressbar' aria-valuemin='0' aria-valuemax='12' class='progress-bar bg-info' style='width: 58%' aria-valuenow='7' >7</div>"], [6, "<div role='progressbar' aria-valuemin='0' aria-valuemax='12' class='progress-bar bg-warning' style='width: 50%' aria-valuenow='6' >6</div>"], [5, "<div role='progressbar' aria-valuemin='0' aria-valuemax='12' class='progress-bar bg-warning' style='width: 41%' aria-valuenow='5' >5</div>"], [4, "<div role='progressbar' aria-valuemin='0' aria-valuemax='12' class='progress-bar bg-warning' style='width: 33%' aria-valuenow='4' >4</div>"], [3, "<div role='progressbar' aria-valuemin='0' aria-valuemax='12' class='progress-bar bg-danger' style='width: 25%' aria-valuenow='3' >3</div>"], [2, "<div role='progressbar' aria-valuemin='0' aria-valuemax='12' class='progress-bar bg-danger' style='width: 16%' aria-valuenow='2' >2</div>"], [1, "<div role='progressbar' aria-valuemin='0' aria-valuemax='12' class='progress-bar bg-danger' style='width: 1%' aria-valuenow='1' >1</div>"], [0, "<div role='progressbar' aria-valuemin='0' aria-valuemax='12' class='progress-bar bg-danger' style='width: 1%' aria-valuenow='0' >0</div>"]];
var arrRandomWords = ["adjust", "look", "fare", "bush", "disposition", "fade", "monopoly", "carve", "fashionable", "expand", "trunk", "sail", "enter", "soak", "inspector", "woman", "transform", "loop", "shortage", "sink", "sofa", "poor", "ignorance", "pride", "marriage", "relate", "weed", "accident", "diplomat", "cottage", "attention", "praise", "danger", "literature", "consumption", "umbrella", "west", "complain", "overcharge", "dash", "trace", "tissue", "constraint", "sunday", "quarter", "visit", "organization", "atmosphere", "contain", "index", "finger", "concession", "joint", "light", "partner", "abandon", "pasture", "hypnotize", "dialogue", "license", "office"];
var arrRandomQuotes = ["Just one more thing.", "I knew you could do it.", "I can't think in this coat.", "I'm hanging up.  You can keep talkin' but I'm gonna hang up.", "I can't swim, I don't even like a deep tub.", "I respect your talent, but I don't like anything else about you.", "Before coffee, I'm up and walkin' around but I'm not awake.s"];
var arrRandomImages = ["assets/images/01_columbo.png", "assets/images/02_columbo.jpg", "assets/images/03_columbo.jpg", "assets/images/04_columbo.jpg", "assets/images/05_columbo.jpg", "assets/images/06_columbo.jpg", "assets/images/07_columbo.jpg", "assets/images/08_columbo.jpg", "assets/images/09_columbo.jpg", "assets/images/10_columbo.jpg", "assets/images/11_columbo.jpg", "assets/images/12_columbo.jpg", "assets/images/13_columbo.jpg", "assets/images/14_columbo.jpg", "assets/images/15_columbo.jpg", "assets/images/16_columbo.jpg", "assets/images/17_columbo.jpg", "assets/images/18_columbo.jpg", "assets/images/19_columbo.jpg", "assets/images/20_columbo.jpg", "assets/images/21_columbo.jpg", "assets/images/22_columbo.jpg", "assets/images/23_columbo.jpg", "assets/images/24_columbo.jpg", "assets/images/25_columbo.jpg", "assets/images/26_columbo.jpg", "assets/images/27_columbo.jpg", "assets/images/28_columbo.jpg"];

// Create variables to set document contents during the game
/*Tested*/
var detective = document.getElementById("playerName");
var winTotal = document.getElementById("playerWins");
var gameBoard = document.getElementById("wordPanel");
var usedBoard = document.getElementById("usedPanel");
var remLetters = document.getElementById("remainPanel");
// var revLetters = document.getElementById("wordPanel");
var winQuote = document.getElementById("quotes");


// Variables for Game Music
/*Tested*/

var audioWin = new Audio("assets/audio/columbo_theme.mp3");
var audioLose = new Audio("assets/audio/womp_womp.mp3");

//Prompt player for their name.
/*Tested*/
userName = prompt("May I know your name?");

//Put player's name in the welcome message
/*Tested*/
welcomeMsg();

function welcomeMsg() {
    //Check whether User input is null or contains a number. 
    var ltrs = /\d/;

    if (userName === null || ltrs.test(userName) == true) {

        //If input is null or a number, do not display userName

        detective.textContent = "!";
    }
    else {

        //If input is NOT null or a number, display userName (in uppercase) in the welcome message

        detective.textContent = " " + userName.toUpperCase() + "!";
    }

    //Call initSession()
    initSession();
}


//Initialize the Session
/* Tested */

function initSession() {

    //Hide Columbo Image/Quote Card
    document.getElementById("winnerPanel").style.display = "none";

    //Select new random word from arrRandomWords
    arrGameWord = arrRandomWords[Math.floor(Math.random() * arrRandomWords.length - 1) + 1];

    console.log(arrGameWord);

    var theDiv;
    var content;

    for (var i = 0; i < arrGameWord.length; i++) {
        //create blanks for letters
        theDiv = document.getElementById("wordPanel");
        content = "<button class='btn btn-outline-info btn-lg border-top-0 border-left-0 border-right-0 id='"
        content += i + "'><span id='revealed'><span></button> "
        theDiv.innerHTML += content;
    }

}

// Initial event listener for users to click any key
/*Tested*/
document.onkeyup = function () {
    //Hide "Click Any Key" message
    document.getElementById("pressIt").style.display = "none";
    //Call pickletter()
    pickLetter();

}

// pickLetter() function

function pickLetter() {

    // Process Players Chosen Letters

    document.onkeyup = function () {

        //capture player input

        var picked = event.key;

        if (countProgress === 0) {

            youLost();

        }
        else if ((countProgress > 0) && (arrCorrectLetters.length === arrGameWord.length)) {

            youWon();
        }
        else {

            //used letters
            console.log("Picked Letter---------------------")
            console.log(picked)

            //add all used letters to arrUsedLetters
            //add all letters to usedPanel

            arrUsedLetters.push(picked);
            console.log("Used Letter Array---------------------")
            console.log(arrUsedLetters);

            //check if correct

            letterCheck = arrGameWord.indexOf(picked);
            console.log("Array Index---------------------")
            console.log(letterCheck);


            if (letterCheck === -1) {

                //Reduce available tries
                //Display updated available tries in remainPanel  (HTML)
                countProgress--;
                remLetters.textContent = "Remaining Tries: " + countProgress;

            }

            else {

                //add all correct letters to arrCorrectLetters
                //add ll correct letters to wordPanel (HTML)

                arrCorrectLetters.push(picked);
                console.log("Correct Letter Array---------------------")
                console.log(arrCorrectLetters);
            }
        }


        // You Won Function
        /* Tested */

        function youWon() {

            //Select Random quote from arrRandomQuote
            var genQuote = arrRandomQuotes[Math.floor(Math.random() * arrRandomQuotes.length - 1) + 1];
            winQuote.textContent = genQuote;
            // console.log(genQuote);
            // console.log(winQuote);

            // Select Random image from arrRandomImage
            // <img class="card-img-top" src="assets/images/11_columbo.jpg" alt="Picture of Columbo"></img>
            var genImage = arrRandomImages[Math.floor(Math.random() * arrRandomImages.length - 1) + 1];
            console.log(genImage);

            var elem = document.createElement("img");
            elem.setAttribute("src", genImage);
            elem.setAttribute("class", "card-img-top");
            elem.setAttribute("alt", "Picture of Columbo");
            document.getElementById("images").With(elem);
            // console.log(elem);

            //Display Columbo Card
            document.getElementById("winnerPanel").style.display = "block";
            // Play Columbo Theme
            audioWin.play();
            //Add one to playerWins
            countWins++;
            //Update Wins in HTML
            winTotal.textContent = " You've won " + countWins + " game(s)!";
            console.log(countWins);
            //Alert "You cracked the case!"
            alert("You cracked the case Detective!");
            //Call newGame()
            newGame();
        }

        // You Lost Function
        /* Tested */

        function youLost() {

            //Hide Columbo Image/Quote Card
            document.getElementById("winnerPanel").style.display = "none";
            //Play whomp whomp
            audioLose.play();
            //Alert "Sorry, better luck next time."
            alert("Sorry, better luck next time Detective!");
            //Call newGame()
            newGame();
        }

        // New Game Function

        function newGame() {
            //Clear Game Word Board
            gameBoard.textContent = null;
            //Clear Used Letters Board
            usedBoard.textContent = null;
            //Clear Used Letters Board
            remLetters.textContent = null;
            //Reset Wrong Guesses counter and Used and Correct Letter Arrays
            countWrongGuesses = 0;
            arrUsedLetters = [];
            arrCorrectLetters = [];
            //Reset Status Bar to 12 chances
            TBD
            //Reset Progress Counter to 12
            countProgress = 12;
            //Select new random word from arrRandomWords
            arrGameWord = arrRandomWords[Math.floor(Math.random() * arrRandomWords.length - 1) + 1];
            console.log(arrGameWord);

            var theDiv;
            var content;

            for (var i = 0; i < arrGameWord.length; i++) {
                //create blanks for letters
                theDiv = document.getElementById("wordPanel");
                content = "<button class='btn btn-outline-info btn-lg border-top-0 border-left-0 border-right-0 id='"
                content += i + "'> </button> "
                theDiv.innerHTML += content;
            }

            //call pickLetter()
            pickLetter();

        }


        // Exit button
        /* Tested */

        function exitGame() {
            //Thank user for playing and navigate them to my Bootstrap Portfolio
            /*Tested*/
            alert("Thank you for playing!");
            window.location.href = 'https://plkgit.github.io/Bootstrap-Portfolio/portfolio.html';
        }


