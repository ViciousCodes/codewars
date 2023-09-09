Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.


function getCount(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const newstr = str.split('');
    
    const vowelCount = newstr.filter(char => vowels.includes(char)).length;
    
    return vowelCount;
  }


  Intresting solution
  if i want to do whole words
  return str.match(/\bfat\b/i) !== null;

  function getCount(str) {
    return (str.match(/[aeiou]/ig)||[]).length;
  }

  str.match(/[aeiou]/ig):

This part uses the match() method on the str string to search for all occurrences of vowels (i.e., characters 'a', 'e', 'i', 'o', 'u') in the string.
The regular expression [aeiou] is used inside the match() method. It matches any of the vowel characters.
The i and g flags are added to the regular expression:
i makes the regular expression case-insensitive, so it will match both lowercase and uppercase vowels.
g makes it global, so it finds all occurrences of vowels in the string, not just the first one.
(str.match(/[aeiou]/ig) || []):

The result of the str.match(/[aeiou]/ig) expression is an array containing all the matches (vowels) found in the string.
However, if there are no matches (i.e., no vowels in the string), match() would return null.
To handle this case, the code uses the || [] part. If the result of str.match(/[aeiou]/ig) is null, it is replaced with an empty array [].
.length:

Finally, .length is used to get the length of the resulting array. This length represents the number of vowels found in the string.
