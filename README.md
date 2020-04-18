# Word Guess with Lt. Columbo

![](https://res.cloudinary.com/damplk/image/upload/v1587186936/portal/hw_columbo_rea0bd.gif)


## Overview
This is a hangman-style game with a theme based on the classic television detective show Columbo.

## Playing the Game
* Players are prompted for their name upon navigation to the site
   * If a user supplies a valid name (i.e. no numbers), the header of the game will be display their name
   * If an invalid name or no name is supplied, a generic welcome message will display in the header
* A modal containing instructions on "How to Play" appears the first time the game is played
   * There is also a button on the page , labeled "How to Play," that opens the instructions modal
* The app will choose a random game word
   * An underscore for each letter in the game word is displayed on the game board
* Press any key to begin the game
* Click a letter on your keyboard to enter your guesses
* Guessing a correct letter will reveal the letter on the game board whereever it appears in the game word
* During the game, the app will:
   * Track and display the number of guesses remaining with both a number and a progress bar
   * Track and display used letters
   * Alert the player if they select a letter more than once or if they click on an invalid key (e.g. a number, caps lock, tab, etc.)
* To win the game, guess all of the letters in the hidden word before running out of 12 guesses
   * Win or lose, a short audio file plays at the end of each game
   * A randomly selected picture of and a quote from Columbo appear at the end of each game won
   * A "Better Luck Next Time" message appears at the end of each game lost
* Win or lose, the game automatically restarts, choosing another game word
   * The total games won appears beneath the welcome message in the header

## Development Details

### Developer
Pam Kelly at [esq.kelly@gmail.com](mailto:esq.kelly@gmail.com)

### GitHub Repository
[GitHub](https://github.com/PLKGIT/word-guess-game) at https://github.com/PLKGIT/word-guess-game

### Deployed Application
[Word Guess Game](https://plkgit.github.io/word-guess-game/) deployed at https://plkgit.github.io/word-guess-game/

### Porfolio
[Professional Porfolio](https://www.pamkelly.com/portdev.html) at https://www.pamkelly.com/portdev.html

Copyright &copy; 2019-2020 Pamela L. Kelly