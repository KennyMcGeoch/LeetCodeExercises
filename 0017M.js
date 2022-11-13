/**
 * @param {string} digits
 * @return {string[]}
 * Runtime: 103 ms, faster than 28.20% of JavaScript online submissions for Letter Combinations of a Phone Number.
 * Memory Usage: 41.9 MB, less than 74.80% of JavaScript online submissions for Letter Combinations of a Phone Number.
 */
 var letterCombinations = function(digits) {

    if (digits.length === 0) return []
    

    const letters = {2: ["a","b","c"], 3: ["d","e","f"], 4: ["g","h","i"], 5: ["j","k","l"], 
   6: ["m","n","o"], 7: ["p","q","r","s"], 8: ["t","u","v"], 9:["w","x","y","z"]}

    let len = digits.length
    let solution = []

    search("",0)

    function search (word, char){
       let funcWord = word
       let newChar = char
       if (char === len){
           solution.push(word)
           return
       }
       let iterations = letters[digits[char]].length
       for (let i=0; i<iterations; i++){
           search(funcWord + letters[digits[newChar]][i],newChar+1)
       }
       return
    }
    return solution    
};