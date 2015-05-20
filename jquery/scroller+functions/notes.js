var variableOne = 500;
var variableTwo = 600;

// Ternary Operator
var highestValue = ( variableOne > variableTwo) ? variableOne : variableTwo;

//  Would replace a standard binary operator if else statement

if (variableOne>variableTwo){
	highestValue = variableOne;
} else {
	highestValue = variableTwo;
}

console.log ("The two values are:");
console.log ("Value One:" + variableOne);
console.log ("Value Two:" + variableOne);
console.log ("The highest value is" + highestValue);

/*  INstead of log, you can use color code with console:
	user 	console.debug as a descriptive line
			console.info will highlight in blue
			console.warning will highlight in yellow
			console.error will highlight in red
*/

// Looping


