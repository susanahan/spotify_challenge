/*Question 1--sortByStrings(s, t):
    Sort the letters in the string s by the order they occur in the string t.You can assume t will not have repetitive characters.For s = "weather"
    and t = "therapyw", the output should be sortByString(s, t) = "theeraw". For s = "good"
    and t = "odg", the output should be sortByString(s, t) = "oodg".
*/

//I thought about this by sorting by the second args
let sortByString = (s, t) => {
  let strArr = s.split('')
   return strArr.sort((a,b)=>{
     return t.indexOf(a) - t.indexOf(b)
    }).join("");
}

console.log(sortByString('weather','therapyw'))
//theeraw
console.log(sortByString('good','odg'))
//oodg