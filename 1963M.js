/**
 * @param {string} s
 * @return {number}
 * Runtime: 75 ms, faster than 88.39% of JavaScript online submissions for Minimum Number of Swaps to Make the String Balanced.
 * Memory Usage: 59.7 MB, less than 72.32% of JavaScript online submissions for Minimum Number of Swaps to Make the String Balanced.
 */
var minSwaps = function(s) {
    let open = 0
    let change = 0
    
    for (let i=0; i<s.length; i++){
        if (s[i] === "[") open++
        else open--
        
        if (open < 0){
            change++
            open += 2
        }
    }
    return change
};