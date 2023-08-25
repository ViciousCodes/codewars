Define a function that removes duplicates from an array of non negative numbers and returns it as a result.

The order of the sequence has to stay the same.

Examples:

Input -> Output
[1, 1, 2] -> [1, 2]
[1, 2, 1, 1, 3, 2] -> [1, 2, 3]
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
