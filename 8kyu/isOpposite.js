// Task
// Give you two strings: s1 and s2. If they are opposite, return true; otherwise, return false. Note: The result should be a boolean value, instead of a string.

// The opposite means: All letters of the two strings are the same, but the case is opposite. you can assume that the string only contains letters or it's a empty string. Also take note of the edge case - if both strings are empty then you should return false/False.

// Examples (input -> output)
// "ab","AB"     -> true
// "aB","Ab"     -> true
// "aBcd","AbCD" -> true
// "AB","Ab"     -> false
// "",""         -> false


function isOpposite(s1, s2) {
  if (s1.length !== s2.length) {
    return false;
  }
  if (s1 === s2) {
    return false;
  }

  for (let i = 0; i < s1.length; i++) {
    for (let j = 0; j < s2.length; j++) {
      if (s1[i] === s2[j]) {
        return false;
      }
    }
  }
  
  return true;
}

console.log(isOpposite("", "")); // Output: false
\

solution 1 
function isOpposite(s1,s2){
  if(s1 === s2 || s1.toLowerCase() !== s2.toLowerCase()) return false;
  
  for(var i = 0; i < s1.length; i++) {
    if(s1.charAt(i) === s2.charAt(i)) return false;
  }
  
  return true;
  
}

solution 2 function isOpposite(s1,s2){
  return s1.split('')
    .map(c => c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase())
    .join('') === s2 && s1 !== '';
  
}

solution 3 unction isOpposite(s1, s2) {
  if ((!s1 && !s2) || s1.length != s2.length) return false;
  if (s1.toLowerCase() != s2.toLowerCase()) return false;
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] === s2[i]) {
      return false;
    }
  }
  return true;
}