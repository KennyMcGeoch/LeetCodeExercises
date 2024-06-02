/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 * Runtime: 75 ms, faster than 71.78% of JavaScript online submissions for Reverse String.
 * Memory Usage: 56.7 MB, less than 77.86% of JavaScript online submissions for Reverse String.
 */
var reverseString = function(s) {  
    s.reverse(); // couldn't believe it was just 1 line of code
    
};

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 * Runtime: 75 ms, faster than 71.78% of JavaScript online submissions for Reverse String.
 * Memory Usage: 56.8 MB, less than 72.81% of JavaScript online submissions for Reverse String.
 */
var reverseString = function(s) {
    let left = 0
    let right = s.length-1
    
    while (left < right){
        let temp = s[left]
        s[left++] = s[right]
        s[right--] = temp
    }
    
};