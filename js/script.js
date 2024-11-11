console.log("yo")

 //variables
 const word = "BREAK";
 let guessedLetters = [];
 let remainingAttempts = 5;

//show guessed letters
 function displayWord() {
     let display = ""; //initialize the display as blank
     for (let letter of word) {
         if(guessedLetters.includes(letter)){
            display += letter;
         }
         else{display += "_"}
         display += " ";
     }
     document.getElementById("wordDisplay").textContent = display;
 }

 //make a guess, button that gets called
 function makeGuess() {
     const guessInput = document.getElementById("guessInput");
     const guess = guessInput.value.toUpperCase();
     guessInput.value = ""; //clear input

     //check if letter has been guessed already
     if (!guessedLetters.includes(guess)) {
         guessedLetters.push(guess);
         if (!word.includes(guess)) {
             remainingAttempts--;
         }
     }

     //update the game after guess
     displayWord();
     document.getElementById("guessedLetters").textContent = guessedLetters.join(", "); // separate all guessed letters by a comma
     document.getElementById("remainingAttempts").textContent = remainingAttempts; 
     checkGameOver(); //display ending message
 }

 //display win or loss
 function checkGameOver() {
     if (!document.getElementById("wordDisplay").textContent.includes("_")) {
         document.getElementById("message").textContent = "Congratulations! You won!";
     } else if (remainingAttempts <= 0) {
         document.getElementById("message").textContent = "Game over! The word was " + word;
     }
 }

 // Initialize the game display
 displayWord();