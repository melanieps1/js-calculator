var solar = document.getElementById('solarPanel');
var display = document.getElementById('display');
var digits = document.getElementsByClassName('numeric-btn');

// Wait for page to load before doing what this guy says
document.onreadystatechange = function() {
	if (document.readyState === "interactive") {
		for (i = 0; i < digits.length; i++) {
			digits[i].addEventListener("click", ButtonLogic);
			//console.log( digits[ i ]);
		}
		solarPanel.addEventListener("click", Surprise);
	}
};

function ButtonLogic() {
	//alert("You clicked me");
	// console.log( this );
	// console.log( this.innerHTML );

	var digit = this.innerHTML;
	var currentDisplay = display.innerHTML;

	if (currentDisplay === "0") {
		display.innerHTML = digit;
	} else {
		display.innerHTML = currentDisplay + digit;
	}

}

function Surprise() {
	alert("SURPRISE!!!!!");
}