// ## math combo

// Build a function, cocococombomath, that takes 5 numbers as parameters.  
// It:
// 	- multiplies the 1st number x the 2nd number
// 	- the result of that, it adds the 3rd number
// 	- the result of that, it divides by the 4th number
// 	- the result of that, it subtracts the 5th number
// 	- it returns that result

// - example:
// 	- cocococombomath(3,2,6,3,5)
// 		- Returns -1

function cocococombomath(num1, num2, num3, num4, num5){
    var output;
    output = num1 * num2;
    output = output + num3;
    output = output / num4;
    output = output - num5;
    return output;
}
cocococombomath(3,2,6,3,5);