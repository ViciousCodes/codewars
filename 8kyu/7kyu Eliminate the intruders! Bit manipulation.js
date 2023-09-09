Task
You are given a string representing a number in binary. Your task is to delete all the unset bits in this string and return the corresponding number (after keeping only the '1's).

In practice, you should implement this function:
yesir


function eliminateUnsetBits(number);
Examples
eliminateUnsetBits("11010101010101") ->  255 (= 11111111)
eliminateUnsetBits("111") ->  7
eliminateUnsetBits("1000000") -> 1
eliminateUnsetBits("000") -> 0

solution 1 
function eliminateUnsetBits(number) {
    let digit = '0';
    let string = number.toString();
    let newString = string;
    for (let i = 0; i < string.length; i++) {
      newString = newString.replace(digit, '');
    }
       if (newString === "") {
      console.log(0); // Output 0
      return 0;      // Return 0
    }
    
    let result = parseInt(newString, 2);
    console.log(result); // Output the result
    return result;       
  }
  solution 2
  function eliminateUnsetBits(number) {
    return parseInt(number.replace(/0/g,'') || 0, 2)
  }

  solution 3
  const eliminateUnsetBits = number =>
  2 ** number.replace(/0+/g, ``).length - 1;

  solution 4 
  function eliminateUnsetBits(number) {
    return number=parseInt((number.split("0").join('')),2)||0;
    
    }