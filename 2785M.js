/**
 * @param {string} s
 * @return {string}
 * Runtime: 181 ms, faster than 76.38% of JavaScript online submissions for Sort Vowels in a String.
 * Memory Usage: 65.8 MB, less than 50.39% of JavaScript online submissions for Sort Vowels in a String.
 * Runtime 72ms Beats 72.63%
 * Memory 69.85MB Beats 65.26%
 */
var sortVowels = function(s) {
    
    let vowels = []
    let letter = ["a","e","i","o","u","A","E","I","O","U"]
    for (let i=0; i<s.length; i++){
        if (letter.includes(s[i]))vowels.push(s[i])
    }
    if (vowels.length === 0)return s
    vowels.sort()
    let ans = ""
    let add = 0
    for (let i=0; i<s.length; i++){
        if (letter.includes(s[i])) ans += vowels[add++]
        else ans += s[i]
    }
    return ans
};

/**
 * @param {string} s
 * @return {string}
 * Runtime 18ms Beats 98.95%
 * Memory 62.54MB Beats 98.95%
 */
let arr = new Array(10).fill(0)
let vArr = ["A","E","I","O","U","a","e","i","o","u"]
let vowelSet = new Set(vArr)

var sortVowels = function(s) {
   
   for (let i=0; i<s.length; i++){
       if (vowelSet.has(s[i])){
           if (s[i] === "A") arr[0]++
           else if (s[i] === "E") arr[1]++
           else if (s[i] === "I") arr[2]++
           else if (s[i] === "O") arr[3]++
           else if (s[i] === "U") arr[4]++
           else if (s[i] === "a") arr[5]++
           else if (s[i] === "e") arr[6]++
           else if (s[i] === "i") arr[7]++
           else if (s[i] === "o") arr[8]++
           else arr[9]++
       }   
   }
   let curr = 0
   let ans = ""
   for (let i=0; i<s.length; i++){
       if (vowelSet.has(s[i])){
           while(arr[curr] === 0) curr++
           ans += vArr[curr]
           arr[curr]--
       }
       else ans += s[i]
   }

   return ans
};