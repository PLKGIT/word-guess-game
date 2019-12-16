// Create Global Variables
var userName="";
var countWins = 0;
var progress=12;
var countWrongGuesses = 0;
var arrUsedLetters = [];
var arrGameWord =[];
var arrRandomWords = ["adjust","look","fare","bush","disposition","fade","monopoly","carve","fashionable","expand","trunk","sail","enter","soak","inspector","woman","transform","loop","shortage","sink","sofa","poor","ignorance","pride","marriage","relate","weed","accident","diplomat","cottage","attention","praise","danger","literature","consumption","umbrella","west","complain","overcharge","dash","trace","tissue","constraint","sunday","quarter","visit","organization","atmosphere","contain","index","finger","concession","joint","light","partner","abandon","pasture","hypnotize","dialogue","license","office"];
var arrRandomQuotes = ["Just one more thing.","I knew you could do it.", "I can't think in this coat.", "I'm hanging up.  You can keep talkin' but I'm gonna hang up.", "I can't swim, I don't even like a deep tub.", "I respect your talent, but I don't like anything else about you.","Before coffee, I'm up and walkin' around but I'm not awake.s"];
var arrRandomImages = [];

// Create variables to set document contents during the game
var detective = document.getElementById("playerName");
var gameBoard = document.getElementById("wordPanel");
var usedBoard = document.getElementById("usedPanel");

// Set a flag for anykey listener
var anyKeyFlag = true;

    //Prompt player for their name.
    /*Tested*/
    userName = prompt("May I know your name?");

    //Call welcomeMsg() function
    /*Tested*/
    initSession ();

    //Put player's name in the welcome message
    /*Tested*/

    function initSession () {
        
        //Hide Columbo Image/Quote Card
        document.getElementById("winnerPanel").style.display = "none";
        //Display "Click Any Key" message
        document.getElementById("pressIt").style.display = "block";
        //Clear Game Word Board
        gameBoard.textContent = null;
        //Clear Used Letters Board
        usedBoard.textContent = null;

        //Check whether User input is null or contains a number. 
        
        var ltrs = /\d/;

        if (userName === null || ltrs.test(userName)==true){

            //If input is null or a number, do not display userName

            detective.textContent = "!";
        } 
        else {

            //If input is NOT null or a number, display userName (in uppercase) in the welcome message

            detective.textContent = " " + userName.toUpperCase() + "!";
        }
    }

    // Initial event listener for users to click any key
    /*Tested*/
    document.onkeyup = function() {
        if (anyKeyFlag == true) {
             //Hide "Click Any Key" message
             document.getElementById("pressIt").style.display = "none";
             //Turn off anykey flag
                 anyKeyFlag=false;

        } else {
            //Should stop the listener from doing anything after the initial click
            return;
        }
       
      }

function pickLetter() {

    // While countWrongGuesses<12
        //onclick
        //If user picks anything other than a letter
            //Alert "Letters only, please."
        //If a letter
            //add letter selected to arrUsedLetters
            //search arrRandomWord
                //If letter appears in word
                    //make the letter appear in Game Word Section at the correct index
                //If letter does not appear in word
                    //add one to countWrongGuesses
                    //change the status bar
        //If length of arrGameWord = length of arrRandomWord
        //call youWon()
        //countWrongGuesses=12
        //call youLost()

}

function youWon() {
    //Select Random image from arrRandomImage
    //Select Random quote from arrRandomQuote
    //Display Columbo Card
    //Play Columbo Theme
    //Add one to playerWins
    //Alert "You cracked the case!"
    //Call newGame()
    document.getElementById("winnerPanel").style.display = "block";
}

function youLost() {
    //Play whomp whomp
    //Alert "Sorry, better luck next time."
    document.getElementById("winnerPanel").style.display = "none";
    //Call newGame()
}

function newGame() {
    //Reset Wrong Guesses counter and Used Letter Array
        countWrongGuesses = 0;
        arrUsedLetters = [];
    //Reset Status Bar
    //Select new random word from arrRandomWords
    //Create dashes for each letter of the Game Word
    //call pickLetter()
}

function exitGame() {
    //Thank user for playing and navigate them to my Bootstrap Portfolio
    /*Tested*/
    alert("Thank you for playing!");
    window.location.href = 'https://plkgit.github.io/Bootstrap-Portfolio/portfolio.html';
}


