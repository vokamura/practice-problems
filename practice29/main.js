function do_math (num1, num2, operator) {
    if (operator == "+") {
        var addResult = num1 + num2;
        return num1 + num2;
    } else if (operator == "-") {
        var subtractResult = num1 - num2;
        return subtractResult;
    } else if (operator == "*" || operator == "x" || operator == "X") {
        var multiplyResult = num1 * num2;
        return multiplyResult;
    } else if (operator == "/") {
        var divideResult = num1/num2;
        return divideResult;
    } else {
        console.log("Did you enter 2 numbers and an operator?")
    }
}

//could also do a switch