var first_array = [3,-5,15,4];
var second_array = [3,18,-5,-4];
var output = [];
function add_arrays(first_array, second_array) {
    for (var i=0; i<first_array.length; i++) {
        output.push(first_array[i] + second_array[i]);
    }
    return output;
}
add_arrays(first_array,second_array);