// Create a function, search_array(), that does the following:

// #### Input: 2 arrays
// - haystack array, which has values to search through
// - needle array, which has values to search for 
// #### Output: 
// - output array, which has all values in needle that are found in haystack
// #### Example:
// var haystack = ['cat','dog','bird','turtle','lizard'];
// var needle = ['dog','lizard','flower','monkey','unicorn']
// var output = null;

// output = search_array(haystack,needle);
// console.log(output); //outputs ['dog','lizard'];

var haystack = ['cat','dog','bird','turtle','lizard'];
var needle = ['dog','lizard','flower','monkey','unicorn'];
var output = "";

function search_array(haystack, needle) {
    for (var i=0; i < haystack.length; i++){
        for (var k=0; k < needle.length; k++){
            if (haystack[i] == needle[k]){
                output = output + haystack[i] + " ";
            }
        }
    }
    return output;

}
search_array(haystack, needle);