var solar = document.getElementById('solarPanel');
var display = document.getElementById('display');
var keys = document.getElementsByClassName('key');

var value1;
var value2;
var selectedOperator;

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
	//console.log(this.classList.contains('numeric'));

	if (this.classList.contains('numeric')) {
		numeric(keyLabel);
	} else if(this.classList.contains('calculate')) {
		calculate();
	} else if (this.classList.contains('decimal')) {		
		decimal(keyLabel);
	} else if (this.classList.contains('operator')) {		
		operator(keyLabel);
	} else if (this.classList.contains('allclear')) {		
		allClear();
	} else if (this.classList.contains('clear')) {		
		clear();
	}

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
				// calculate
				calculate();

				// store results of calculation as value1


				// update display with results of calculation (aka value1)


				// clear value2
				value2 = '';

				// store keyLabel in selectedOperator
				selectedOperator = keyLabel;
			}
		}
	}
}

function decimal(keyLabel) {
	if (value1.indexOf('.') !== -1) {
			// There is already a decimal in this number, so ignore it
	} else {
		display.innerHTML = display.innerHTML + keyLabel;
		value1 = value1 + keyLabel;
	}
}

function numeric(keyLabel) {
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