Define a function that removes duplicates from an array of non negative numbers and returns it as a result.

The order of the sequence has to stay the same.

Examples:

Input -> Output
[1, 1, 2] -> [1, 2]
[1, 2, 1, 1, 3, 2] -> [1, 2, 3]


best solution 
function distinct(a) {
    return [...new Set(a)];
  }

  new Set(a): This creates a new Set object, initialized with the elements of array a. The Set data structure in JavaScript automatically eliminates duplicate values, so any duplicates in the original array are effectively removed.

[...new Set(a)]: The spread operator ... is used to spread the elements of the Set back into an array. This operation effectively converts the unique elements in the Set back into an array format.

how i wanted my attempt to be 
function distinct(a) {
    for (let i = 0; i < a.length; i++) {
        for (let j = i + 1; j < a.length; j++) {
            if (a[i] === a[j]) {
                a.splice(j, 1);
                j--;
            }
        }
    }
    return a;
 }

my attempt
//  function distinct(a) {
//    for let i = 0; i < a.length; i++)    
//    {
//        if (a[i] == a[i + 1]) {
//            a.splice[i, 1];
//        } 

//    }
//     }
//     return [];
//   }


// \
