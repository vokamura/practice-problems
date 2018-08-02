// ## do math

// Build a function, do_math, that takes in 3 parameters: num1 (number), num2 (number), and operator (string)

// - it uses the operator to determine what math to do to the numbers
// 	- if '+', it adds them
// 	- if '-', it subtracts them
// 	- if '*' or 'x' or 'X', it multiplies them
// 	- if '/', it divides them
// - if then returns the result
// - Example:
// 	- do_math(5,2,'*')
// 	- Return: 10

function do_math(num1, num2, operator){
    var result = null;
    switch(operator){
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "x":
        case "X":
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
    }
    return result;
}
do_math(2,5, "*");