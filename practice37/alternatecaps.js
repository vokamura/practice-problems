// ## alternate caps

// - given a string, create a new string with every other letter capitalized
// - example:
// 	- parameters: "amazing"
// 	- return: "aMaZiNg"

// ### human-level instructions
// - create variable to store new string
// - start a loop to proceed through the string
// 	- get a new letter from the string
// 		- store it in a variable
// 	- get the next letter from the string
// 		- store it in a variable
// 		- capitalize it
// 	- add the regular and capitalized letters to the new string
// - repeat


function alternate_caps(str){
    var output ="";
    for (var i=0;i < str.length; i++){
        if(i % 2 == 0){
            output = output + str[i];
        }
        if(i% 2 == 1){
            output = output + str[i].toUpperCase();
        }
    }
    return output;
}
alternate_caps("amazing");