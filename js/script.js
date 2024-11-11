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

 document.getElementById("guessInput").addEventListener("keydown", function(event) {
    const guessInput = document.getElementById("guessInput");

    //listen for the enter, backspace, and letter keys
    if (event.key === "Enter") {
        //when enter is typed
        const guess = guessInput.value;
        if (guess.match(/^[a-zA-Z]$/)) { //check input
            makeGuess(guess);
        }
        event.preventDefault();
    } else if (event.key === "Backspace" || event.key === "Delete") {
        // Allow Backspace and Delete to function as normal
        return;
    } else if (!event.key.match(/^[a-zA-Z]$/)) {
        // Prevent any non-letter characters
        event.preventDefault();
    }
});