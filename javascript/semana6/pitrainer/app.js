// Setup:
function startGame() {
	document.getElementById("game").style.display = "block";
	document.getElementById("pi_decimals").focus();
}

function restartGame() {
	location.reload();
}

// Game:
const div_game = document.querySelector("#game");
const input_decimals = document.querySelector("#pi_decimals");
const result_decimals = document.querySelector("#result_decimals");
const result_score = document.querySelector("#result_score");

const pi_decimals =
	"1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109";
let position = 0;

input_decimals.addEventListener("keyup", function () {
	this.value = "";
	this.focus();
});

input_decimals.addEventListener("keydown", function (evt) {
	const decimal = String.fromCharCode(evt.keyCode);
	// evaluar reglas:
	if (
		decimal == "" ||
		isNaN(decimal) ||
		decimal != pi_decimals.charAt(position)
	) {
		result_decimals.style.color = "red";
	} else {
		// si pasó las reglas:
		result_decimals.style.color = "green";
		result_decimals.innerText += decimal;
		position++;
	}

	result_score.innerText = position;

	setTimeout(function () {
		result_decimals.style.color = "black";
	}, 250);
});
