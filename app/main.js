var solar = document.getElementById('solarPanel');
var display = document.getElementById('display');
var keys = document.getElementsByClassName('key');

var value1;
var value2;
var selectedOperator;
var lastKeyPressed;

// Wait for page to load before doing what this guy says
document.onreadystatechange = function() {
	if (document.readyState === "interactive") {

		allClear();

		for (i = 0; i < keys.length; i++) {
			keys[i].addEventListener("click", ButtonLogic);
			//console.log( digits[ i ]);
		}
		solarPanel.addEventListener("click", Surprise);
	}
};

function ButtonLogic() {

	var keyLabel = this.innerHTML;

	if (this.classList.contains('numeric')) {
		numeric(keyLabel, lastKeyPressed);
	} else if(this.classList.contains('calculate')) {
		calculate();
	} else if (this.classList.contains('decimal')) {		
		decimal(keyLabel, lastKeyPressed);
	} else if (this.classList.contains('operator')) {		
		operator(keyLabel);
	} else if (this.classList.contains('allclear')) {		
		allClear();
	} else if (this.classList.contains('clear')) {		
		clear();
	} else if (this.classList.contains('sign')) {
		sign();
	}

	lastKeyPressed = keyLabel;
}

// WIP
function sign(num) {
	var temp = Number(num)*(-1);
	console.log(temp);
	return temp;
}

function operator(keyLabel) {
	if (value1 === '') {
		// set value1 = 0
		value1 = 0;
		// store keyLabel in selectedOperator
		selectedOperator = keyLabel;

	} else {
		if (selectedOperator === '') {
			// store keyLabel in selectedOperator
			selectedOperator = keyLabel;

		} else {
			if (value2 === '') {
				// store keyLabel in selectedOperator
				selectedOperator = keyLabel;

			} else {
				calculate();
				selectedOperator = keyLabel;
			}
		}
	}
}

function decimal(keyLabel, lastKey) {
	if (lastKey === '=') {
		allClear();
	}

	if (selectedOperator === '') {
		if (value1.indexOf('.') == -1) {
			if (value1 === '') {
				value1 = 0 + keyLabel;
			} else {
				value1 = value1 + keyLabel;
			}
		}
		display.innerHTML = value1;
	} else {
		if (value2.indexOf('.') == -1) {
			if (value2 === '') {
				value2 = 0 + keyLabel;
			} else {
				value2 = value2 + keyLabel;
			}
		}
		display.innerHTML = value2;
	}	
}

function calculate() {
	var results = 0;

	switch (selectedOperator) {
		case "+": 
			results = Number(value1) + Number(value2);
			break;
		case "-":
			results = Number(value1) - Number(value2);
			break;
		case "*":
			results = Number(value1) * Number(value2);
			break;
		case "/":
			results = Number(value1) / Number(value2);
			break;
		default:
			alert("What are you doing?!");
	}

	// store results of calculation as value1
	value1 = results;

	// update display with results of calculation (aka value1)
	display.innerHTML = value1;

	// clear value2
	value2 = '';

	// clear selectedOperator
	selectedOperator = '';
}

function numeric(keyLabel, lastKey) {
	if (lastKey === '=') {
		allClear();
	}

	if (selectedOperator === '') {
		// value1 = value1 + keyLabel; (this was replaced with the line below it)
		value1 = properAppend(value1, keyLabel);
		display.innerHTML = value1;
	} else {
		// value2 = value2 + keyLabel; (this was replaced with the line below it)
		value2 = properAppend(value2, keyLabel);
		display.innerHTML = value2;
	}
}

function properAppend(main, added) {
	if (main === "0") {
		return added;
	} else {
		return main + added;
	}
}

function clear() {
	if (selectedOperator === '') {
		value1 = '';
	} else {
		value2 = '';
	}
	alert("clear!");
}

function allClear() {
	value1 = '';
	value2 = '';
	selectedOperator = '';
	display.innerHTML = '0';
}

function Surprise() {
	alert("SURPRISE!!!!!");
}