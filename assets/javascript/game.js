// Create Global Variables
var playerName = "";
var playerWins = 0;
var countWrongGuesses = 0;
var progress=12;
var arrUsedLetters = [];
var arrGameWord =[];
var arrRandomWords = ["adjust","look","fare","bush","disposition","fade","monopoly","carve","fashionable","expand","trunk","sail","enter","soak","inspector","woman","transform","loop","shortage","sink","sofa","poor","ignorance","pride","marriage","relate","weed","accident","diplomat","cottage","attention","praise","danger","literature","consumption","umbrella","west","complain","overcharge","dash","trace","tissue","constraint","sunday","quarter","visit","organization","atmosphere","contain","index","finger","concession","joint","light","partner","abandon","pasture","hypnotize","dialogue","license","office"];
var arrRandomQuotes = ["Just one more thing.","I knew you could do it.", "I can't think in this coat.", "I'm hanging up.  You can keep talkin' but I'm gonna hang up.", "I can't swim, I don't even like a deep tub.", "I respect your talent, but I don't like anything else about you.","Before coffee, I'm up and walkin' around but I'm not awake.s"];
var arrRandomImages = [];

    //prompt for player's name (required input)
    //Store user name in playerName
    //Columbo Image/Quote Card should be hidden
    //Game Word section should be empty
    //Used letter board should be empty
    //Display "Click Any Key" message
    //call function anyKey()

function anyKey() {
    //on any key click
        //Hide "Click Any Key" message
        //Call newGame()
}

function newGame() {
    //set countWrongGuesses = 0;
    //set arrUsedLetters = [];
    //Select new random word from arrRandomWords
    //Create dashes for each letter of the Game Word
    //call pickLetter()
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
}

function youLost() {
    //Play whomp whomp
        //Alert "Sorry, better luck next time."
    //Call newGame()
}

function exitGame() {
    //Navigate to a thank you for playing page in the same browser window
}
