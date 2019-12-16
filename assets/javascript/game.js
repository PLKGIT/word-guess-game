// Create Global Variables
var userName=null;
var countWins = 0;
var countProgress=12;
var countWrongGuesses=0;
var arrUsedLetters = [];
var arrGameWord =[];
var arrProgress =[];
var arrRandomWords = ["adjust","look","fare","bush","disposition","fade","monopoly","carve","fashionable","expand","trunk","sail","enter","soak","inspector","woman","transform","loop","shortage","sink","sofa","poor","ignorance","pride","marriage","relate","weed","accident","diplomat","cottage","attention","praise","danger","literature","consumption","umbrella","west","complain","overcharge","dash","trace","tissue","constraint","sunday","quarter","visit","organization","atmosphere","contain","index","finger","concession","joint","light","partner","abandon","pasture","hypnotize","dialogue","license","office"];
var arrRandomQuotes = ["Just one more thing.","I knew you could do it.", "I can't think in this coat.", "I'm hanging up.  You can keep talkin' but I'm gonna hang up.", "I can't swim, I don't even like a deep tub.", "I respect your talent, but I don't like anything else about you.","Before coffee, I'm up and walkin' around but I'm not awake.s"];
var arrRandomImages = [];

// Create variables to set document contents during the game
/*Tested*/
var detective = document.getElementById("playerName");
var gameBoard = document.getElementById("wordPanel");
var usedBoard = document.getElementById("usedPanel");

var letterBtn;

// Variables for Game Music
/*Tested*/

var audioWin = new Audio("assets/audio/columbo_theme.mp3");
var audioLose = new Audio("assets/audio/womp_womp.mp3");



    // Set a flag for anykey listener so that I can turn it off after the initial click
    var anyKeyFlag = true;

    //Prompt player for their name.
    /*Tested*/
    userName = prompt("May I know your name?");

    //Put player's name in the welcome message
    /*Tested*/
    welcomeMsg();

    function welcomeMsg(){
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

        //Call initSession()
        initSession();
    }


    //Initialize the Session
    /* Tested */

    function initSession () {

        //Hide Columbo Image/Quote Card
        document.getElementById("winnerPanel").style.display = "none";

        //Select new random word from arrRandomWords
        arrGameWord = arrRandomWords [Math.floor(Math.random() * arrRandomWords.length - 1) + 1];

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
       
    }

    // Initial event listener for users to click any key
    /*Tested*/
    document.onkeyup = function() {
        if (anyKeyFlag == true) {
            //Hide "Click Any Key" message
             document.getElementById("pressIt").style.display = "none";
            //Turn off anykey flag
            anyKeyFlag=false;
            //Call pickletter()
            pickLetter();
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
    document.getElementById("winnerPanel").style.display = "block";
    //Play Columbo Theme
    audioWin.play();
    //Add one to playerWins
    countWins++;
    //Alert "You cracked the case!"
    alert("You cracked the case Detective!") ; 
    //Call newGame()
    newGame();

}

function youLost() {

    //Hide Columbo Image/Quote Card
    document.getElementById("winnerPanel").style.display = "none";
    //Play whomp whomp
    audioLose.play();
    //Alert "Sorry, better luck next time."
    alert("Sorry, better luck next time Detective!") ; 
    //Call newGame()
    newGame();
}

function newGame() {
    //Clear Game Word Board
        gameBoard.textContent = null;
    //Clear Used Letters Board
        usedBoard.textContent = null;
    //Reset Wrong Guesses counter and Used Letter Array
        countWrongGuesses = 0;
        arrUsedLetters = [];
    //Reset Status Bar to 12 chances

    //Reset Progress Counter to 12
        countProgress=12;
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


