# Word-Guess-Game
JavaScript Homework

## Overview
 Create a Word Guess computer game that runs in the browser and features dynamically updated HTML and CSS powered by  JavaScript code.

## Requirements

### Due
Sunday, December 16, 2019

### Minimum Requirements
Attempt to complete homework assignment as described in instructions. If unable to complete certain portions, please pseudocode these portions to describe what remains to be completed. Adding a README.md as well as adding this homework to your portfolio are required as well and more information can be found below.

### Submit Your Work on [BootCampSpot](https://www.bootcampspot-v2.com/)
Please submit both the deployed Github.io link to your homework AND the link to the Github Repository!

### Add the Project To Your Portfolio
After completing the homework please add the piece to your portfolio. Make sure to add a link to your updated portfolio in the comments section of your homework so the TAs can easily ensure you completed this step when they are grading the assignment. To receive an 'A' on any assignment, you must link to it from your portfolio.


## Project Instructions

### Before you begin

1. Create a new GitHub repo called `Word Guess Game` or `Psychic-Game`, in accordance with the assignment you choose to complete. Then, clone it to your computer.

2. Inside your local git repository, create an `index.html`.

3. While still in your local git repo, create a directory called `assets`.

4. `cd` your way into the `assets` folder, then make three additional folders: `javascript`, `css` and `images`.

   * In the `javascript` folder, make a file called `game.js`. Use the `src` attribute of the `script` tag to link to this file, rather than embedding the code directly in your HTML document.
   * In the `css` folder, make a file called `style.css`.
   * Also in the `css` folder, make a file called `reset.css`. Paste into it the code from the Meyerweb reset stylesheet. If you opt to use Bootstrap instead of writing your own CSS, skip this step, and simply include a link to Bootstrap via CDN.
   * In the `images` folder, save whatever images you plan on using.

```
├── assets
|  ├── css
|  |  └── style.css
|  ├── images
|  └── javascript
|     └── game.js
└── index.html
```

5. Push the above changes to GitHub.

6. Choose whichever game you'd like to build. Making the Psychic game will prove less challenging than coding Word Guess. However, as the challenge of the Word Guess exercise provides a more comprehensive review of this unit's material, we suggest attempting that assignment first.

7. Note: There's no shame if you'd prefer submitting Psychic—it's still a proper challenge.

8. Push your selected game to Github Pages.


### Word Guess Game Parameters

1. [Watch the demo](https://youtu.be/W-IJcC4tYFI).

2. Choose a theme for your game!

3. Use key events to listen for the letters that your players will type.

4. Display the following on the page:

   * Press any key to get started!
   * Wins: (# of times user guessed the word correctly).
   * If the word is `madonna`, display it like this when the game starts: `_ _ _ _ _ _ _`.
   * As the user guesses the correct letters, reveal them: `m a d o _  _ a`.
   * Number of Guesses Remaining: (# of guesses remaining for the user).
   * Letters Already Guessed: (Letters the user has guessed, displayed like `L Z Y H`).

5. After the user wins/loses the game should automatically choose another word and make the user play it.

#### Game design bonuses
1. Play a sound or song when the user guesses their word correctly, like in our demo.
2. Write some stylish CSS rules to make a design that fits your game's theme.
3. **HARD MODE:** Organize your game code as an object, except for the key events to get the letter guessed. This will be a challenge if you haven't coded with JavaScript before, but we encourage anyone already familiar with the language to try this out.
4. Save your whole game and its properties in an object.
5. Save any of your game's functions as methods, and call them underneath your object declaration using event listeners.
6. Don't forget to place your global variables and functions above your object.
   * Remember: global variables, then objects, then calls.

## Completed Assignment

### Student
Pam Kelly at [esq.kelly@gmail.com](mailto:esq.kelly@gmail.com)

Full-Stack Coding Bootcamp through UCB Extension

### Completed Assignment URLs
#### Github repository
[Github Link](https://github.com/PLKGIT/Word-Guess-Game) at https://github.com/PLKGIT/Word-Guess-Game
#### Deployed Game
[Word Guess Game](https://plkgit.github.io/Word-Guess-Game/) deployed at https://plkgit.github.io/Word-Guess-Game/

#### Portfolio pages on Professional and Bootstrap portfolios with links to the game
[Professional Porfolio](https://www.pamkelly.com/portdev.html) at https://www.pamkelly.com/portdev.html
[Bootstrap Portfolio](https://plkgit.github.io/Bootstrap-Portfolio/portfolio.html) at https://plkgit.github.io/Bootstrap-Portfolio/portfolio.html

- - 
Copyright &copy; 2019-2020 Pamela L. Kelly
