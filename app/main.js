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
	//alert("You clicked me");
	// console.log( this );
	// console.log( this.innerHTML );

	var keyLabel = this.innerHTML;
	//console.log(this.classList.contains('numeric-btn'));

	if (this.classList.contains('numeric-btn')) {
		if (display.innerHTML === "0") {
			display.innerHTML = keyLabel;
		} else {
			display.innerHTML = display.innerHTML + keyLabel;
		}
		value1 = value1 + keyLabel;
	} else if (this.classList.contains('decimal')) {
		if (value1.indexOf('.') !== -1) {
			// There is already a decimal in this number, so ignore it
		} else {
			display.innerHTML = display.innerHTML + keyLabel;
			value1 = value1 + keyLabel;
		}
	} else if (this.classList.contains('operator')) {
		alert("operator alert");
	} else if (this.classList.contains('allclear')) {
		allClear();
	} else if (this.classList.contains('clear')) {
		clear();
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