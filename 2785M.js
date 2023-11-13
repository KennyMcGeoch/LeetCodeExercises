/**
 * @param {string} s
 * @return {string}
 * Runtime: 181 ms, faster than 76.38% of JavaScript online submissions for Sort Vowels in a String.
 * Memory Usage: 65.8 MB, less than 50.39% of JavaScript online submissions for Sort Vowels in a String.
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