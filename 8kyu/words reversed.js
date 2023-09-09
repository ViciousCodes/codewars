Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples:

spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
spinWords( "This is a test") => returns "This is a test" 
spinWords( "This is another test" )=> returns "This is rehtona test"


my answer

function spinWords(string) {
    const words = string.split(' ');
  
    const reversedWords = words.map(word => {
      if (word.length >= 5) {
        return word.split('').reverse().join('');
      } else {
        return word;
      }
    });
  
    return reversedWords.join(' ');
  }

  extra solution 
  function spinWords(string) {
    let Array_of_string = string.split(' ');
    for (let i = 0; i < Array_of_string.length; i++) {
      if (Array_of_string[i].length >= 5)
      Array_of_string[i] = Array_of_string[i].split('').reverse().join('');
    }
    return Array_of_string.join(' ');
  }

            
        
    Yurrrrr