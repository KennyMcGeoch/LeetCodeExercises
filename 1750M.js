/**
 * @param {string} s
 * @return {number}
 * Runtime: 51 ms, faster than 94.74% of JavaScript online submissions for Minimum Length of String After Deleting Similar Ends.
 * Memory Usage: 53.4 MB, less than 57.89% of JavaScript online submissions for Minimum Length of String After Deleting Similar Ends.
 */
var minimumLength = function(s) {
    
    let left = 0, right = s.length-1
    
    while (left < right){
        if (s[left] !== s[right]) return right-left + 1
        
        let temp = s[left]
        while(s[left] === temp) left++
        while(s[right] === temp) right--
    }
    
    return left === right
    
};

/**
 * @param {string} s
 * @return {number}
 * Runtime: 54 ms, faster than 92.11% of JavaScript online submissions for Minimum Length of String After Deleting Similar Ends.
 * Memory Usage: 53.3 MB, less than 60.53% of JavaScript online submissions for Minimum Length of String After Deleting Similar Ends.
 */
var minimumLength = function(s) {
    
    let left = 0, right = s.length-1
    
    while (left < right){
        if (s[left] !== s[right]) return right-left + 1
        
        let temp = s[left]
        while(s[left] === temp) left++
        while(s[right] === temp && right >= left) right--
    }
    
    return left === right
    
};