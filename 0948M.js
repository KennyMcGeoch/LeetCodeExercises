/**
 * @param {number[]} tokens
 * @param {number} power
 * @return {number}
 * Runtime: 56 ms, faster than 100.00% of JavaScript online submissions for Bag of Tokens.
 * Memory Usage: 50.7 MB, less than 42.86% of JavaScript online submissions for Bag of Tokens.
 */
var bagOfTokensScore = function(tokens, power) {
    
    tokens.sort((a,b)=>a-b)
    let left = 0
    let right = tokens.length - 1
    let count = 0
    
    while (left <= right){
        if (tokens[left] <= power){
            count++
            power -= tokens[left++]
        }
        else{
            if (count === 0 || right === left) return count
            else{
                power += tokens[right--]
                count--
            }
        }
    }
    
    return count
    
};