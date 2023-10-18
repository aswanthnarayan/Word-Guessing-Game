const inputs = document.querySelector(".inputs"),
hints = document.querySelector(".hint span"),
guesses = document.querySelector(".guesses span"),
wrongLetters = document.querySelector(".wrong-letters span"),
resetBtn = document.querySelector(".reset-btn"),
typingInput = document.querySelector(".typing-input");

let word;
let maxGuesses;
let incorrectLetters = []
let correctLetters = [];

function randomWordGenerator() {
    let randomWord = wordList[Math.floor(Math.random() * wordList.length)];
    word = randomWord.word;
    console.log(word);
   if (word.length>=5) {
     maxGuesses = 8;
   } else {
    maxGuesses=5;
   };
    correctLetters = [];
    incorrectLetters = [];
    hints.innerText = randomWord.hint;
    guesses.innerText = maxGuesses;
    wrongLetters.innerText = incorrectLetters;

    let inputTag = "";
    for (let i = 0; i < word.length; i++) {
        inputTag += `<input type="text" disabled>`;
    }
    inputs.innerHTML = inputTag; 
}

randomWordGenerator();

function gameStart(e) {
    let key = e.target.value.toLowerCase();
    if (key.match(/^[A-Za-z]+$/) && !incorrectLetters.includes(key)) {
        if (word.includes(key)) {
            for (let i = 0; i < word.length; i++) {
                if (word[i] == key) {
                    correctLetters.push(key);
                    inputs.querySelectorAll("input")[i].value = key;
                }
            }
        } else {
            maxGuesses--;
            incorrectLetters.push(key);
        }
        guesses.innerText = maxGuesses;
        wrongLetters.innerText = incorrectLetters;
    }
    typingInput.value = "";

    setTimeout(() => {
        if (correctLetters.length === word.length) {
            new swal({
                text: `Congrats! You found the word ${word.toUpperCase()}`,
                icon:"success",
                buttons: true,
                confirmButtonText: " Play Again !",
                    
              });
            randomWordGenerator();
        } else if (maxGuesses < 1) {
            new swal({
                text: "Game over! You don't have remaining guesses",
                icon:"error",
                buttons: true,
                confirmButtonText: " Try Again !",
                     
              });
            for (let i = 0; i < word.length; i++) {
                inputs.querySelectorAll("input")[i].value = word[i];
            }
        }
    }, 100);
}


resetBtn.addEventListener("click", randomWordGenerator);
typingInput.addEventListener("input", gameStart);
inputs.addEventListener("click", () => typingInput.focus());
document.addEventListener("keydown", () => typingInput.focus());