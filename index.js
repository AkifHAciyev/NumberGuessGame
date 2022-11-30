const button = document.getElementById('button');
const myNumber = document.getElementById('myNumber');
const guessedNum = document.getElementById('guessedNum');
const numberOfGuesses = document.getElementById('numberOfGuesses');
const highFew = document.getElementById('highFew');
const error = document.getElementById('error');

let randomNum = Math.floor(Math.random() * 15);
console.log(randomNum);

button.addEventListener('click', () => {
	if (myNumber.value == randomNum) {
		highFew.innerHTML = 'you are winner';
	} else if (myNumber.value < randomNum) {
		highFew.innerHTML = 'few';
	} else if (myNumber.value > randomNum) {
		highFew.innerHTML = 'high';
	}

	guessedNum.innerHTML = myNumber.value;

	console.log(myNumber.value);

	console.log(randomNum);

	if (0 > myNumber.value || myNumber.value > 15) {
		myNumber.value = 'password length must be between 1 to 15';
		guessedNum.innerHTML = ' must be between 1 to 15';
	}
});

let count = 0;
button.onclick = function () {
	count++;
	numberOfGuesses.innerHTML = count;
};
