# Calculator Requirements

## Tech

	1. HTML
	2. CSS
	3. JavaScript

## Wireframe

See wireframe-js-calculator.png

## MVP

### UI + Basics

Calculator must have a fake solar panel at the top.

Calculator must have a display area at the top.  Display must show '0' by default.

Calculator must have following function buttons:
	* Division
	* Multiplication
	* Subtraction
	* Addition
	* Calculate
	* Clear
	* All Clear
	* Plus/minus
	* Digits 0-9
	* Decimal point .

Calculator must store three values internally:
	1. First number entered by the user
	2. Operator selected by the user
	3. Second number entered by the user

### Display

Display must update as the user presses number buttons

### Calculate Button

When the calculate (=) button is pressed, calculator must:
	* Apply the operation to the two numbers that have been entered, in the order that they were entered
	* Update the display with the output of the operation

### Clearing Calculator

When the Clear button is pressed, the cnumber that is currently being stored must be discarded and the display must return to 0.

When the All Clear button is pressed, all stored data in the calculator must be discarded and the display must return to 0.

### Plus/Minus Button

When the Sign button (+/-) is pressed, must change the sign of the current value to positive if the current value is negative, or to negative if the current value is positive.

### Decimal Point Button

When the decimal point is pressed, must append '.' to the current number and show in the display.

Must only be able to enter a decimal once in a stored number.  If the decimal point is pressed more than once by the user, it must be recorded only the first time.