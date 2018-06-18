/*Question 2--decodeString(s): 
    Given an encoded string,return its corresponding decoded string. The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is repeated exactly k times.Note: k is guaranteed to be a positive integer.
    For s = "4[ab]", the output should be decodeString(s) = "abababab"
    For s = "2[b3[a]]", the output should be decodeString(s) = "baaabaaa"
*/

let decodeString = (s) => {
    //using regEx to evaulate what's in the []
    const insideBrackets = /(\d+)\[(\w+)\]/;
  
    //I want to replace what's in the brackets with the repeated the values
    let inside = s.replace(insideBrackets, (match, num, letters) => {
      return letters.repeat(num);
    });
    if (!insideBrackets.test(inside)) {
     return inside;
    } else {
      return decodeString(inside);
    }
  }

console.log(decodeString('4[ab]'));
//abababab
console.log(decodeString('2[b3[a]]'));
//baaabaaa
console.log(decodeString('3[a]2[bc]'));
//aaabcbc
console.log(decodeString('[a]'));
//[a]
  