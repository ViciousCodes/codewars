// Printing Array elements with Comma delimiters

// Input: Array of elements

// ["h","o","l","a"]

// Output: String with comma delimited elements of the array in th same order.

// "h,o,l,a"

// Note: if this seems too simple for you try the next level

// const array = ["h","o","l","a"];

// function printArray(array){
//     array.removeAll("");
//     const firstArray = arr.shift()
//     const newFirstArray = "+firstArray+ "
//     const lastArray = arr.pop()
//     const newLastArray = " + lastArray + "


//   }
 Optimal Solution 
function printArray(array){
    return array.join();
  }
  Less Optimal
  tion printArray(array){
    return array.join(',');
  }

  


my solution
const array = ["h", "o", "l", "a"];

function printArray(arr) {
    arr.removeAll("");

    let result = "";
    for (let i = 0; i < arr.length; i++) {
        if (i > 0) {
            result += ",";
        }
        result += arr[i];
    }
    console.log(result);
    return result;
}

Array.prototype.removeAll = function (value) {
    for (let i = 0; i < this.length; i++) {
        if (this[i] === value) {
            this.splice(i, 1);
            i--;
        }
    }
}

const output = printArray(array);
console.log(output);

2.solution 
function printArray(array){
    return array.join();
  }

  
  4.function printArray(array){
    arrayToString = array.join(',');
    return arrayToString;
  }