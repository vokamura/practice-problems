// Create a function, find_factors(), that does the following:
// - Find all of the factors of a given number

// #### Input: 
// - factor_number: a number to find the factors of

// #### Output: 
// - output array, an array of all numbers that are a factor of factor_number

// #### Example:
// var factor_number = 10;

// output = find_factors(factor_number);
// console.log(output); //outputs [1,2,5,10];

function find_factors(number){
    var output = [];
    for (var i=0; i <= number; i++){
        if (number % i === 0){
            output.push(i);
        }
    }
    return output;
}
find_factors(10);