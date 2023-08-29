// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "
function doubleChar(str) {
  
    let result = '';
    
      for (let i = 0; i < str.length; i++) {
        result += str[i] + str[i]; 
      }
    
      return result;
    }
    


    // another solution 
    const doubleChar = (str) => str.split("").map(c => c + c).join("");
// another 1
    function doubleChar(str) {
        return str.split("").map(function (c) {
          return c + c;
        }).join("");
      }