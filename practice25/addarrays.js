// Create a function, add_arrays(), that does the following:

// #### Input: 2 arrays of equal size 
// - first_array, an array of numbers
// - needle array, an array of numbers

// #### Output: 
// - output array, which has all values from the first array added to the values from the second array

// #### Example:
// var first_array = [3,-5,15,4];
// var second_array = [3,18,-5,-4]


// output = add_arrays(first_array,second_array);
// console.log(output); //outputs [6,13,10,0];

// #### Put your solution in answer.js

var array1 = [3,-5,15,4];
var array2 = [3,18,-5,-4];

function add_arrays(array1, array2) {
    var output = [];
    var number;
    for (var i=0; i < array1.length; i++){
            number = array1[i] + array2[i];
            output.push(number);
    }
    return output;
}
add_arrays(array1, array2);