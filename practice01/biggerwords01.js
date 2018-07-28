var myArray = ['bug', 'insect', 'mammal', 'reptile', 'mammoth', 'turtles'];
var output = [];
function biggerWords(string, stringArray) {
    for (var i=0; i<myArray.length; i++) {
        if(myArray[i].length > string.length) {
            output.push(myArray[i]);
        }
    }
    return output;
}

biggerWords('whales', myArray);