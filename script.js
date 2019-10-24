let number = Math.floor(Math.random() * 100) + 1;
//console.log("Secret number: " + number);

let numberOfGuesses = 0;

let inputNumber = document.querySelector("#input_number");
inputNumber.focus();

let messageAlert = document.querySelector(".message");
let guesses = document.querySelector(".guesses");

let guessButton = document.querySelector(".guess_button");

function playGame() {
	let guessedNumber = inputNumber.value;

	if (isNaN(guessedNumber)) {
		messageAlert.innerHTML = "Enter a valid number!";
	} else {
		if (guessedNumber < 1 || guessedNumber > 100) {
			messageAlert.innerHTML = "Enter a number between 1 and 100";
		} else {
			if (guessedNumber < number) {
				messageAlert.innerHTML = "Your guess is too small!";
			} else if (guessedNumber > number) {
				messageAlert.innerHTML = "Your guess is too big!";
			} else {
				messageAlert.classList.add("winning_message");
				messageAlert.innerHTML =
					"Your guess of " + guessedNumber + " is correct!";
				gameOver();
			}
			let guessItem = document.createElement("span");
			guessItem.classList.add("guess");
			guessItem.innerText = guessedNumber.toString();
			guesses.appendChild(guessItem);

			if (numberOfGuesses >= 9) {
				messageAlert.innerHTML = "Sorry you ran out of 10 guesses!!!";
				gameOver();
			}
			numberOfGuesses++;
		}
	}

	inputNumber.value = "";
	inputNumber.focus();

	//console.log(guessedNumber);
}

function gameOver() {
	guessButton.innerText = "Refresh to play again!";
	guessButton.disabled = true;
	inputNumber.disabled = true;
}

guessButton.addEventListener("click", playGame);

inputNumber.addEventListener("keyup", event => {
	event.preventDefault();
	if (event.keyCode === 13) {
		guessButton.click();
	}
});
