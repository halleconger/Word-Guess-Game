// INITIALIZE VARIABLES
var winsCounter = 0;
var lossesCounter = 0;

// VARIABLES SET IN THE RESET FUNCTION
var blankSpaces;
var guessesCounter;
var guessesMade;
var randomWord;

// STORE DYNAMIC HTML ELEMENTS AS VARIABLES
var blankSpacesSpan = document.getElementById("blankSpaces");
var winsSpan = document.getElementById("wins");
var lossesSpan = document.getElementById("losses");
var guessesLeftSpan = document.getElementById("guessesLeft");
var guessesMadeSpan = document.getElementById("guessesMade")

// UPDATE THE DOM
winsSpan.textContent = winsCounter;
lossesSpan.textContent = lossesCounter;

// RUN RESET FUNCTION
reset();
console.log(randomWord);

// VALIDATE THE USER'S KEYPRESS WITH THE RANDOMLY SELECTED WORD
// DETECT THE USER'S KEYPRESS
document.onkeyup = function (event) {
    var userInput = event.key.toLowerCase();
    var alphabet = "abcdefghijklmnopqrstuvwxyz";

    if (alphabet.includes(userInput)) {
        console.log(userInput);

        // CHECK IS KEYPRESS IS IN THE WORD
        // IF IT IS, REPLACE THE WORD WITH THE CORRECT LETTER
        for (var i = 0; i < randomWord.length; i++) {
            if (randomWord[i].toLowerCase() === userInput) {
                console.log(i)
                console.log(blankSpaces)
                blankSpaces[i] = randomWord[i];
                blankSpacesSpan.textContent = blankSpaces.join("\xa0");

                // CHECK WIN CONDITION
                // IF THE WORD HAS BEEN ENTIRELY GUESSED
                // INCREMENT WINCOUNTER AND UPDATE THE DOM
                if (!blankSpaces.includes("_")) {
                    winsCounter++;
                    winsSpan.textContent = winsCounter;

                    alert("you win!");
                    // RESET THE GAME
                    reset();
                }
            } else {
                // IF THE RANDOMWORD DOES NOT INCLUDE USERINPUT
                // AND IF THE USERINPUT HAS NOT BEEN GUESSED ALREADY
                // DECREMENT GUESSES COUNTER 
                // ADD IT TO THE GUESSED LETTERS LIST [ARRAY] AND UPDATE THE DOM
                if (!randomWord.toLowerCase().includes(userInput) && !guessesMade.includes(userInput)) {
                    guessesCounter--;
                    guessesMade.push(userInput);
                    guessesLeftSpan.textContent = guessesCounter;
                    guessesMadeSpan.textContent = guessesMade;

                    // CHECK LOSS CONDITION
                    // IF THE GUESSES RUN OUT (= 0)
                    // INCREMENT LOSSES COUNTER AND UPDATE THE DOM
                    if (guessesCounter === 0) {
                        lossesCounter++;
                        lossesSpan.textContent = lossesCounter;

                        alert("you lose!");
                        // RESET THE GAME
                        reset();
                    }
                }
            }
        }
    }
}
// END OF DOCUMENT.ONKEYUP FUNCTION

// RESET THE GAME
function reset() {

    // RESETS THE GUESSES COUNTER AND GUESSES MADE AND UPDATES THE DOM
    guessesCounter = 15;
    guessesMade = [];

    guessesLeftSpan.textContent = guessesCounter;
    guessesMadeSpan.textContent = guessesMade;

    // CREATES A RANDOM NUMBER AND USES IT TO SELECT A RANDOM WORD
    var wordBank = [
        "airheads",
        "blow pops",
        "sweet tarts",
        "gummy bears",
        "fun dip",
        "gobstopper",
        "gushers",
        "jolly ranchers",
        "laffy taffy",
        "live saver",
        "nerds",
        "skittles",
        "pop rocks",
        "twizzler",
        "runts",
        "smarties",
        "sprees",
        "warheads",
        "pez",
        "starburts"
    ];

    var randomIndex = Math.floor(Math.random() * wordBank.length);
    randomWord = wordBank[randomIndex];

    // IF THE CHARACTER IN THE WORD IS A SPACE
    // DON'T PUSH AN UNDERSCORE
    // INSTEAD PUSH A SPACE
    // PARSE THE WORD INTO BLANKS
    blankSpaces = [];

    for (var i = 0; i < randomWord.length; i++) {
        if (randomWord[i] === " ") {
            blankSpaces.push(" ");
        } else {
            blankSpaces.push("_");
        }
    }

    // "\xa0" is a nonbreakable space
    blankSpacesSpan.textContent = blankSpaces.join("\xa0");

    gameStart = true;
}
// END OF FUNCTION RESET