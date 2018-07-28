- `fibSequence(12);`
	- Output - `0 1 1 2 3 5 8 13 21 34 55 89`

var output = "";
function fibSequecnce(number){
    if (output.length === 0) {
        output += 0 + " ";
    } else if (output.length === 1){
        output += 1 + " ";
    }
    for (var i=1; i<number; i++) {
        
        output = output[i-1] 
    }
    return output;
}
fibSequecnce(12);