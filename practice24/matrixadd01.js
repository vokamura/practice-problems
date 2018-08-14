// Create a function, matrix_add(), that does the following:

// #### Input: 
// - array1: a multi-dimensional array
// - array2: a multi-dimensional array

// #### Output: 
// - output: a multi-dimensional array

// #### Example:
// var array1 = 
// [
// 	[1,2,3],
// 	[3,4,5],
// 	[6,7,8]
// ]
// var array2 =
// [
// 	[1,2,3],
// 	[1,2,3],
// 	[1,2,3]
// ]

// output = matrix_add(array1,array2);
// console.log(output); 
// //outputs 
// [
// 	[2,4,6],
// 	[4,6,8],
// 	[7,9,11]
// ]

function matrix_add(array1, array2) {
    var output = [];
    var output1 = [];
    var output2 = [];
    var output3 = [];
    for (let i=0; i < 3; i++){
        for (var k=0; k < 3; k++){
            var total1 = array1[i][k] + array2[i][k];
            output1.push(total1);
        }
        output.push(output1);
    }
    for (let i=0; i < 3; i++){
        for (var m=0; m < 3; m++){
            var total2 = array1[i][m] + array2[i][m];
            output2.push(total2);
        }
        output.push(output2);
    }
    for (let i=0; i < 3; i++){
        for (var o=0; o < 3; o++){
            var total3 = array1[i][o] + array2[i][o];
            output3.push(total3);
        }
    }
        
        
        output.push(output3);
    
    return output;
}
var array1 = 
[
	[1,2,3],
	[3,4,5],
	[6,7,8]
]
var array2 =
[
	[1,2,3],
	[1,2,3],
	[1,2,3]
]
matrix_add(array1, array2);