// # math computation sequences

// Given the following function call:
// - math_sequences(2,5);

// And the resulting output:
// - ["2+5=7", "2-5=-3", "2*5=10", "2/5=0.4"];

// Create a function definition that achieves the output with the given input. 

// <a href="http://jsbin.com/zebete/edit?html,js,console" target="_blank">Solution Set</a>

function math_sequences(number1, number2){
    var result1 = 0;
    var result2 = 0;
    var result3 = 0;
    var result4 = 0;
    var output= [];
    result1 = number1+number2;
    result2 = number1-number2;
    result3 = number1*number2;
    result4 = number1/number2;
    output.push(number1 + "+" + number2 + "=" + result1);
    output.push(number1 + "-" + number2 + "=" + result2);
    output.push(number1 + "*" + number2 + "=" + result3);
    output.push(number1 + "/" + number2 + "=" + result4);
    return output;
}
math_sequences(2,5);
