// ## Sort

// Build a function that takes in an array of strings and outputs a new array with the same strings in alphabetical order. 

// - Write a function that takes one parameter
// 	- Parameter 1 - An Array of strings
// - The function should output an array containing all the strings from the input array but in alphabetical order
// - Example:
// 	-`var myArray = ['mouse', 'cat', 'dog', 'human'];`
// 	- `sort(myArray);`
// 	- Output - `['cat', 'dog', 'human', 'mouse']`

var myArray = ['mouse', 'cat', 'dog', 'human'];
function sort(myArray){
    var newArray = [];
    var alphabet = 'abcdefghijklmnopqrstuvwxyz';
    for (var i=0; i<alphabet.length; i++){
        for (var k=0; k<myArray.length; k++){
            if (myArray[k].charAt(0) === alphabet[i]){
                newArray.push(myArray[k]);
            }

        }
    }
    return newArray;
}
sort(myArray);